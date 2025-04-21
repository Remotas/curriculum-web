/**
 * Script principal del CV
 * Funcionalidades básicas de interacción
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // ========== SCROLL SUAVE PARA ENLACES INTERNOS ==========
    // Seleccionar todos los enlaces que comienzan con #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Añadir evento click a cada enlace
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir comportamiento por defecto

            // Hacer scroll suave hasta el elemento objetivo
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Efecto de scroll suave
            });
        });
    });

    // ========== MANEJO DE ENLACES EXTERNOS ==========
    // Seleccionar todos los enlaces de la página
    document.querySelectorAll('a').forEach(link => {
        // Verificar si el enlace es externo (no es mailto ni tel)
        if (link.hostname !== window.location.hostname &&
            !link.getAttribute('href').startsWith('mailto') &&
            !link.getAttribute('href').startsWith('tel')) {

            // Añadir atributos para abrir en nueva pestaña de forma segura
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});