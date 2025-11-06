const images = document.querySelectorAll('.gallery img');
const selectedList = document.getElementById('selectedList');

images.forEach(img => {
    img.addEventListener('click', () => {
        const name = img.dataset.name;

        // Crear un <li>
        const item = document.createElement('li');
        item.textContent = name;

        // Al hacer clic en el elemento de la lista → eliminar
        item.addEventListener('click', () => {
            item.remove();
        });

        selectedList.appendChild(item);
    });
});
