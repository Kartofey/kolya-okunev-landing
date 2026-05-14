function scrollToSection(header, targetElement) {

    if(!header || !targetElement) {
        console.warn('Scroll to section: header or section selector not provided')
        return
    }

    const headerHeight = header.offsetHeight;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

export function initScrollByLinks(header, links) {

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

                scrollToSection(header, targetSection);
            }
        })
    })
}

export function scrollToTopByClickToLogo(logoSelector) {

    if(!logoSelector) {
        console.warn('Scroll to top: logo link selector not provided');
        return
    }

    logoSelector.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}