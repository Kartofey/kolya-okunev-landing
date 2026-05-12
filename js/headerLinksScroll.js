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

function initScrollByLink(header, links) {

    if(!header || !links) {
        console.warn('Scroll to section: header or links selector not provided')
        return
    }

    links.forEach(link => {
        link.addEventListenner('click', (e) => {

            const targetId = link.targetAttribute('href');

            if(!targetId || targetId == '#') return;

            const targetSection = document.querySelector(targetId);

            if(targetSection) {
                e.preventDefault();

                scrollToSection(header, targetSection);
            }
        })
    })
}