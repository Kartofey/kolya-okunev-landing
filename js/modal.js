export function openModal(modalSelector) {
    
    if(!modalSelector) {
        console.warn('Open modal: modal selector not provided')
        return
    }

    modalSelector.classList.add('active');
}

export function closeModal(modalSelector) {

    if(!modalSelector) {
        console.warn('Close modal: modal selector not provided')
        return
    }

    modalSelector.classList.remove('active')
}
