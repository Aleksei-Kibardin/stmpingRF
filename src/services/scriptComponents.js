function openModal(modalSelector, modalTimerId){
    const mod = document.querySelector(modalSelector);
    
    mod.classList.remove('hide');
    mod.classList.add('show');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}

function closeModal(modalSelector) {
    const mod = document.querySelector(modalSelector);

    mod.classList.add('hide');
    mod.classList.remove('show');
    document.body.style.overflow = '';
} 

function modal(triggerSelector, modalSelector, modalTimerId){    

const btnModal = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);


//scrollModal	
function showModalScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= 
    document.documentElement.scrollHeight) {
        openModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalScroll);
    }
}
window.addEventListener('scroll', showModalScroll);

//Modal


btnModal.forEach(btn =>{
    btn.addEventListener('click', () =>  openModal(modalSelector, modalTimerId));
})	


modal.addEventListener('click', (e)=>{
    if(e.target === modal || e.target.getAttribute('data-close') == '' ){
        closeModal(modalSelector);
    }
})

document.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape'){
        closeModal(modalSelector);
    }
})
}

function calc() {
    //___________-calc-_________________

const result = document.querySelector('#result');

let sex, height, weight, age, ratio;

if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else {
    sex = 'female'
    localStorage.setItem('sex', 'female')
}

if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('sex');
} else {
    ratio = 1.375
    localStorage.setItem('ratio', 1.375)
}

 function localShow(select, activeClass) {
     const elements = document.querySelectorAll(select);

     elements.forEach(elem =>{
        elem.classList.remove(activeClass)
        if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
        } 
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
        }
     });
 }
 localShow('#gender div', 'calculating__choose-item_active');
 localShow('.calculating__choose_big div', 'calculating__choose-item_active');
function calcTotal() {
    if(!sex || !height || !weight || !age || !ratio){
         result.textContent = ''
         return;
    }

    if (sex === 'female') {
        
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio) + ' калл';
    } else {
        
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio) + ' калл';
    }
}

calcTotal();

function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'))
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'))
                }
                    elements.forEach(elem => {
                        elem.classList.remove(activeClass);
                    });

                    e.target.classList.add(activeClass);
                    
                    calcTotal();
        });
    });
}

getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', ()=>{

        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red'
        } else {
            input.style.border = 'none'
        }

        switch (input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal();
    });
}
getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');

}

export {closeModal};
export {openModal}; 