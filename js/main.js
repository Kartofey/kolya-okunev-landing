import { headerLinks, btns, modal } from './dom-elements.js'
import { scrollToSectionByHeaderLinks, scrollToTopByLogo, scrollToSectionFromBurgerMenu } from './headerLinks.js'
import { openBurgerMenu, openContactForm, closeContactForm, closeBurgerMenu } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {

    // Header links actions
    scrollToTopByLogo(headerLinks.logo)
    scrollToSectionByHeaderLinks(headerLinks.header, headerLinks.headerLinks);
    scrollToSectionFromBurgerMenu(headerLinks.header, headerLinks.headerLinksMobile, modal.burgerMenuModal);

    // Modal and popup acions
    openContactForm(btns.popupFormBtns, modal.popupForm);
    closeContactForm(btns.popupFormCloseBtns, modal.popupForm);
    openBurgerMenu(btns.burgerMenuBtn, modal.burgerMenuModal);
    closeBurgerMenu(btns.burgerMenuCloseBtn, modal.burgerMenuModal);
})