// Archivo JavaScript principal
console.log('¡Proyecto cargado correctamente!');

// Agregar interactividad básica
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('click', function() {
            const text = this.querySelector('.feature-text').textContent;
            alert(`Has seleccionado: ${text}`);
        });
    });
    
    // Animación de entrada
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});