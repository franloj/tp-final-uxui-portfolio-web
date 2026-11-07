/* =========================================
   Navegación Mobile (Menú Hamburguesa)
   ========================================= */
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link, .btn-primary');

if (menuToggle && mainNav) {
    // Abrir/cerrar menú al tocar el botón
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al tocar un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
        });
    });
}

/* =========================================
   Footer: Año Dinámico
   ========================================= */
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

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