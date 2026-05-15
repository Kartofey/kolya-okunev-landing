import { headerLinks, btns } from './dom-elements.js'
import { initScrollByLinks, scrollToTopByClickToLogo } from './headerLinksScroll.js'

document.addEventListener('DOMContentLoaded', () => {

    // Header links actions
    scrollToTopByClickToLogo(headerLinks.logo)
    initScrollByLinks(headerLinks.header, headerLinks.headerLinks);
    initScrollByLinks(headerLinks.header, headerLinks.headerLinksMobile);

    // Modal and popup acions
    
})