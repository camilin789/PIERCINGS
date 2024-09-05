// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });
});
