const downloadBtn = document.getElementById("downloadBtn");
const backBtn = document.getElementById("backBtn");

// Botón Descargar → Genera PDF simple
downloadBtn.addEventListener("click", () => {
    const contenido = `
        COMPROBANTE DE CONFIRMACIÓN
        -------------------------------------
        Acción realizada correctamente.
        Fecha y hora: ${new Date().toLocaleString()}
    `;

    const blob = new Blob([contenido], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "comprobante.pdf";
    a.click();

    URL.revokeObjectURL(url);
});

// Botón Volver → Regresar a la página anterior
backBtn.addEventListener("click", () => {
    history.back();
});
