import { headerLinks, btns } from './dom-elements.js'
import { scrollToSectionByHeaderLinks, scrollToTopByLogo, scrollToSectionFromBurgerMenu } from './headerLinks.js'

document.addEventListener('DOMContentLoaded', () => {

    // Header links actions
    scrollToTopByLogo(headerLinks.logo)
    scrollToSectionByHeaderLinks(headerLinks.header, headerLinks.headerLinks);
    scrollToSectionFromBurgerMenu(headerLinks.header, headerLinks.headerLinksMobile);

    // Modal and popup acions
    
})