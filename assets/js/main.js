/**
 * Script principal del CV
 * Funcionalidades básicas de interacción
 */

// Función para configurar el viewport en móviles - NUEVO
function setViewportForMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Configurar viewport para móviles - NUEVO
    setViewportForMobile();

    // ========== SCROLL SUAVE PARA ENLACES INTERNOS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ========== MANEJO DE ENLACES EXTERNOS ==========
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname &&
            !link.getAttribute('href').startsWith('mailto') &&
            !link.getAttribute('href').startsWith('tel')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
