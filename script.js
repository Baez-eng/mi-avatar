const mensaje = "Hola, soy Saimon. Bienvenido a mi espacio de programación. Estoy listo para trabajar contigo.";
const avatar = document.querySelector(".avatar");
const texto = document.getElementById("texto");
const voiceButton = document.getElementById("voiceButton");

function hablar() {
    if (!("speechSynthesis" in window)) {
        texto.textContent = "Tu navegador no soporta síntesis de voz.";
        return;
    }
    speechSynthesis.cancel();
    const voz = new SpeechSynthesisUtterance(mensaje);
    voz.lang = "es-ES";
    voz.rate = 1;
    voz.pitch = 1;
    voz.volume = 1;
    texto.textContent = mensaje;
    avatar.classList.add("speaking");
    voz.onend = () => avatar.classList.remove("speaking");
    voz.onerror = () => {
        avatar.classList.remove("speaking");
        texto.textContent = "Pulsa el botón para activar la voz.";
    };
    speechSynthesis.speak(voz);
}
voiceButton.addEventListener("click", hablar);
window.addEventListener("load", () => setTimeout(hablar, 1200));