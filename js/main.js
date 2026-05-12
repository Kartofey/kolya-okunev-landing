import { headerLinks } from './dom-elements.js'
import { initScrollByLinks } from './headerLinksScroll.js'

document.addEventListener('DOMContentLoaded', () => {

    initScrollByLinks(headerLinks.header, headerLinks.headerLinks);
    initScrollByLinks(headerLinks.header, headerLinks.headerLinksMobile);
})