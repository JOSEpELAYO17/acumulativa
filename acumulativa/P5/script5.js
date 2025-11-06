// Seleccionar todos los grupos de estadísticas
const stats = document.querySelectorAll('.stat');

stats.forEach(stat => {
    const minusBtn = stat.querySelector('.minus');
    const plusBtn = stat.querySelector('.plus');
    const valueDisplay = stat.querySelector('.value');

    // Convertir contenido a número
    let value = parseInt(valueDisplay.textContent);

    // Botón +
    plusBtn.addEventListener('click', () => {
        value++;
        valueDisplay.textContent = value;
    });

    // Botón -
    minusBtn.addEventListener('click', () => {
        if (value > 0) { // Evitar números negativos
            value--;
            valueDisplay.textContent = value;
        }
    });
});
