<template>
  <div class="btn" @click="openModal()">{{ props.btnTxt }}</div>
  <div class="backdrop" @click="closeModal" v-if="active === true"></div>
  <div class="modal-window" v-if="active === true">
    <form class="obratnuj-zvonok" v-if="!formSubmitted">
      <div class="modal-title">
        <h1>Обратный звонок</h1>
        <p>
          Для обсуждения деталей вашей задачи заполните, пожалуйста, поля. И мы
          вам непременно перезвоним.
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
            type="text"
            name="phone"
            id="phone"
            placeholder="+7(000)000-00-00"
            class="form__field"
            ref="phoneInput"
            @click="checkInput"
            @input="checkInput"
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
import IMask from "imask";

const props = defineProps({
  btnTxt: String,
});

const phoneInput = ref(null);
const active = ref(false);
const formSubmitted = ref(false);
const message = ref("");
const formData = reactive({
  name: "",
  number: "",
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

const checkInput = () => {
  console.log(formData.number);
  if (formData.number === "") {
    if (phoneInput.value && !maskInstance) {
      maskInstance = IMask(phoneInput.value, {
        mask: "+7(000)000-00-00",
        lazy: false,
      });
    }
  }
  if (formData.number === "+7)" || formData.number === "+7()") {
    console.log("hi");
    maskInstance.destroy();
    maskInstance = null;
    phoneInput.value = null;
    formData.number = "";
  }
};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.btn {
  background: #34b9d9;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  text-align: center;
  @include fluid("width", 290);
  @include fluid("padding", 13);
  @include fluid("font-size", 20);
  border-radius: 0;
  transition: 0.3s all ease;
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
  z-index: 99089789;
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
  background-color: #34b9d9;
  cursor: pointer;
  border: 3px #ffd50034 solid;
  transition: 0.5s all ease;
}
.form-zvonok .bot-send-mail:hover {
  color: #000000;
  background-color: #ff9747;
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
@media (max-width: 991px) {
  .btn {
    width: 100%;
    @include fluid("font-size", 45);
  }
}
</style>
