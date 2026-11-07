/* =========================================
   Lógica del Modal (Caso de Estudio)
   ========================================= */
const modal = document.getElementById('case-study-modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

if (modal && openModalBtn && closeModalBtn) {
    // Abrir modal
    openModalBtn.addEventListener('click', () => {
        modal.showModal();
        document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
    });

    // Cerrar modal con la "X"
    closeModalBtn.addEventListener('click', () => {
        modal.close();
    });

    // Cerrar modal al hacer clic afuera (en el ::backdrop)
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });

    // Restaurar el scroll al cerrar (se ejecuta también si cierran con ESC)
    modal.addEventListener('close', () => {
        document.body.style.overflow = 'auto';
    });
}