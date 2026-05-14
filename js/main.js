import { headerLinks } from './dom-elements.js'
import { initScrollByLinks, scrollToTopByClickToLogo } from './headerLinksScroll.js'

document.addEventListener('DOMContentLoaded', () => {

    scrollToTopByClickToLogo(headerLinks.logo)
    initScrollByLinks(headerLinks.header, headerLinks.headerLinks);
    initScrollByLinks(headerLinks.header, headerLinks.headerLinksMobile);
})