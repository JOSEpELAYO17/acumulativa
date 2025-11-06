// Lista personalizable (ya adaptada a planetas)
const datos = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Neptuno",
    "Plutón",
    "Luna"
];

const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const resultList = document.getElementById("resultList");

button.addEventListener("click", () => {
    const texto = input.value.toLowerCase();
    resultList.innerHTML = ""; // Limpiar resultados

    const resultados = datos.filter(item => item.toLowerCase().includes(texto));

    if (resultados.length === 0) {
        resultList.innerHTML = "<li>No se encontraron resultados</li>";
        return;
    }

    resultados.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultList.appendChild(li);
    });
});
