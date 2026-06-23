import { closeModal } from './modal.js'

export function scrollToTopByLogo(logoSelector) {

    if(!logoSelector) {
        console.warn('Scroll to top: logo link selector not provided');
        return
    }

    logoSelector.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({ top: 0 });
    })
}

export function scrollToSectionByHeaderLinks(header, links) {

    if(!header || !links) {
        console.warn('Scroll to section: header or links selector not provided')
        return
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {

            const targetId = link.getAttribute('href');

            if(!targetId || targetId == '#') return;

            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({ top: targetPosition });
            }
        })
    })
}

export function scrollToSectionFromBurgerMenu(header, links, modal) {

    if(!header || !links || !modal) {
        console.warn('Scroll to section: header, links or modal selector not provided')
        return
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(link)
            const targetId = link.getAttribute('href');

            if(!targetId || targetId == '#') return;

            const targetSection = document.querySelector(targetId);

            if(targetSection) {
                e.preventDefault();

                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({ top: targetPosition });
                
                closeModal(modal);
            }
        })
    })
}