const mensaje =
    "Hola, soy clix . Bienvenido en que has pensado hacer hoy. Estoy listo para trabajar contigo.";

const avatar = document.getElementById("avatar");
const texto = document.getElementById("texto");
const voiceButton = document.getElementById("voiceButton");

function hablar() {

    if (!("speechSynthesis" in window)) {
        texto.textContent =
            "Tu navegador no soporta la función de voz.";
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

    voiceButton.textContent = "🔴 Hablando...";

    voz.onend = () => {
        avatar.classList.remove("speaking");
        voiceButton.textContent = "🔊 Hablar";
    };

    voz.onerror = () => {
        avatar.classList.remove("speaking");
        voiceButton.textContent = "🔊 Hablar";
    };

    speechSynthesis.speak(voz);
}

voiceButton.addEventListener("click", hablar);
