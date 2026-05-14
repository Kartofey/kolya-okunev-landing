import { headerLinks } from './dom-elements.js'
import { initScrollByLink } from './headerLinksScroll.js'

document.addEventListener('DOMContentLoaded', () => {

    initScrollByLink(headerLinks.header, headerLinks.headerLinks);
    initScrollByLink(headerLinks.header, headerLinks.headerLinksMobile);
})