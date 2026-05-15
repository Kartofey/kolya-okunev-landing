// Header links
export const headerLinks = {
    header: document.querySelector('header'),
    headerLinks: document.querySelectorAll('.header_links a'),
    headerLinksMobile: document.querySelectorAll('.modal_links__list a'),
    logo: document.querySelector('.logo')
}

export const btns = {
    contactBtn: document.querySelectorAll('.contact'),
    burgerBtn: document.querySelector('#burger_btn'),
    formBtn: document.querySelector('#form_btn')
}

export const modal = {
    modalByBurgerMenu: document.querySelector('.modal_links'),
    closeModalBtn: document.querySelector('.modal_close'),
    popupForm: document.querySelector('.popup_form'),
    popupFormSubmitBtn: document.querySelector('.popup_form .form_btn'),
    popupFormCloseBtn: document.querySelector('.popup_form .popup_form__close'),
    popupSuccessMsg: document.querySelector('.popup_success'),
    popupSuccessCloseBtn: document.querySelector('.popup_success_btn'),
    popupSuccessCloseCrossBtn: document.querySelector('.popup_success .popup_form__close')
}