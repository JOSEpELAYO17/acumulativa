const btn = document.getElementById('modeBtn');

function applyMode(dark){
  document.documentElement.classList.toggle('dark', dark);
  btn.textContent = dark ? 'Modo Claro' : 'Modo Oscuro';
}

// Cargar preferencia guardada
const saved = localStorage.getItem('temaOscuro') === 'true';
applyMode(saved);

// Evento del botón
btn.addEventListener('click', ()=>{
  const isDark = !document.documentElement.classList.contains('dark');
  applyMode(isDark);
  localStorage.setItem('temaOscuro', isDark);
});
