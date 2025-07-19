document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
           ocultarElementoDoHeader();
        }else{
            revomeElementoDoHeader();
        }
    })

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click' , function(e) {
            const abaAlvo = e.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            e.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaRespasta);
    }
})

function ocultarElementoDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function revomeElementoDoHeader() {
     const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaRespasta(element) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = element.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}



