<template>
  <div class="btn" @click="openModal()">{{ props.btnTxt }}</div>
  <div class="backdrop" @click="closeModal" v-if="active === true"></div>
  <div class="modal-window" v-if="active === true">
    <form class="obratnuj-zvonok" v-if="!formSubmitted">
      <div class="modal-title">
        <h1>Обратный звонок</h1>
        <p>
          Для обсуждения деталей вашей задачи заполните, пожалуйста, поля. И мы вам непременно перезвоним.
        </p>
      </div>
      <input type="hidden" name="form-name" value="name_of_my_form" />

      <div class="form-zvonok">
        <div>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            required
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <input
            v-model="formData.number"
            @input="eventCallback"
            @blur="eventCallback"
            @focus="eventCallback"
            :data-phone-pattern="pattern"
            :data-phone-clear="clearOnBlur"
            type="text"
            name="number"
            placeholder="Ваш номер телефона"
            required
          />
        </div>
        <div>
          <input
            v-model="formData.question"
            type="text"
            name="question"
            placeholder="Сообщение(необязательно)"
          />
        </div>
        <button @click="post()" class="bot-send-mail" type="submit">
          Позвоните мне
        </button>
      </div>
    </form>
    <div v-else>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { submitForm } from "../services/form.js";

const props = defineProps({
  btnTxt: String,
});

const phone = ref("");
const pattern = ref("+7(___) ___-__-__");
const clearOnBlur = ref("true");

const eventCallback = (e) => {
  const el = e.target;
  const clearVal = el.dataset.phoneClear;
  const matrix = el.dataset.phonePattern || "+7(___) ___-__-__";
  let i = 0;
  const def = matrix.replace(/\D/g, "");
  let val = el.value.replace(/\D/g, "");

  if (clearVal !== "false" && e.type === "blur") {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      el.value = "";
      return;
    }
  }

  if (def.length >= val.length) val = def;

  el.value = matrix.replace(/./g, (a) => {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ""
      : a;
  });

  phone.value = el.value;
};

const active = ref(false);
const formSubmitted = ref(false);
const message = ref("");
const formData = reactive({
  name: "",
  number: "",
  email: "",
  question: "",
});

watch(formData, () => {
  formData.number = formData.number.replace(/[^\d+()]/g, "");
});

const openModal = () => {
  active.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = (event) => {
  event.stopPropagation();
  document.body.classList.remove("modal-open");
  active.value = false;
};

const post = async () => {
  await submitForm(formData, formSubmitted, message);
};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.btn {
  background: #cb9a74;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  text-align: center;
  @include fluid("width", 290);
  @include fluid("padding", 13);
  @include fluid("font-size", 20);
  border-radius: 0;
  transition: 1s all ease;
}
.btn:hover {
  background: #ff9747;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.modal-open {
  overflow: hidden;
}
.modal-window {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eeeeee;
  color: #000;
  padding: 30px;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
}

.obratnuj-zvonok {
  width: 100%;
  max-width: 350px;
}
.form-zvonok {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
}
.form-zvonok div {
  padding: 15px 0;
}
.bot-send-mail {
  box-sizing: border-box;
  width: 100%;
}
.form-zvonok label,
.form-zvonok input {
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.form-zvonok label {
  margin-bottom: 5px;
  font-weight: bold;
}
.form-zvonok input {
  padding: 10px 15px;
  margin-top: 10px;
}
.form-zvonok label span {
  color: red;
}
.form-zvonok .bot-send-mail {
  padding: 15px;
  margin-top: 10px;
  background: none;
  border: none;
  text-transform: uppercase;

  font-weight: 700;
  background-color: #f89537;
  cursor: pointer;
  border: 3px #ffd50034 solid;
}
.form-zvonok .bot-send-mail:hover {
  color: #009b97;
  background-color: #fff;
}
.modal-title {
  h1 {
    @include fluid("margin-bottom", 20);
  }
}

@media (min-width: 200px) and (max-width: 500px) {
  .modal-window {
    width: 230px;
    padding: 5px;
  }
  .modal-title {
    font-size: 8px;
    h1 {
      margin-bottom: 10px;
    }
  }
  .form-zvonok {
    font-size: 10px;
  }
  .bot-send-mail {
    font-size: 10px;
    padding: 3px !important;
  }
  .form-zvonok div {
    padding: 10px px;
  }
  .form-zvonok input {
    padding: 10px;
    margin-top: 10px;
  }
}
</style>
