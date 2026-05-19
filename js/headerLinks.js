function scrollToPosition(targetPosition) {

    if(!targetPosition && targetPosition != 0) {
        console.warn('Scroll to position: position value not provided')
        return
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

export function initScrollToSectionByLinks(header, links) {

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
                scrollToPosition(targetPosition);
            }
        })
    })
}

export function scrollToTopByLogo(logoSelector) {

    if(!logoSelector) {
        console.warn('Scroll to top: logo link selector not provided');
        return
    }

    logoSelector.addEventListener('click', (e) => {
        e.preventDefault();

        scrollToPosition(0);
    })
}