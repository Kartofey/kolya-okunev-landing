import { headerLinks, btns } from './dom-elements.js'
import { initScrollToSectionByLinks, scrollToTopByLogo } from './headerLinks.js'

document.addEventListener('DOMContentLoaded', () => {

    // Header links actions
    scrollToTopByLogo(headerLinks.logo)
    initScrollToSectionByLinks(headerLinks.header, headerLinks.headerLinks);
    initScrollToSectionByLinks(headerLinks.header, headerLinks.headerLinksMobile);

    // Modal and popup acions
    
})