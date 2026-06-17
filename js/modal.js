export function openModal(modal) {
    
    if(!modal) {
        console.warn('Open modal: modal selector not provided')
        return
    }

    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

export function closeModal(modal) {

    if(!modal) {
        console.warn('Close modal: modal selector not provided')
        return
    }

    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

export function openContactForm(btns, modal) {

    if(!btns || !modal) {
        console.warn('Open modal: btns or modal selector not provided')
        return
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            openModal(modal);
        })
    });
}

export function closeContactForm(btns, modal) {

    if(!btns || !modal) {
        console.warn('Close modal: btns or modal selector not provided')
        return
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
    
            closeModal(modal)
        })
    })
}

export function openBurgerMenu(btn, modal) {

    if(!btn || !modal) {
        console.warn('Open modal: btn or modal selector not provided')
        return
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        openModal(modal);
    })
}

export function closeBurgerMenu(btn, modal) {

    if(!btn || !modal) {
        console.warn('Close modal: btn or modal selector not provided')
        return
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        closeModal(modal);
    })
}
