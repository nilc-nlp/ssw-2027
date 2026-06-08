// Define a data de destino (6 de Setembro de 2027 às 00:00:00)
const eventDate = new Date("September 6, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    // Seleciona os elementos HTML pelos IDs
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Verifica se os elementos existem na página antes de tentar atualizar
    // (Boa prática para evitar erros caso mude de página no futuro)
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;

    if (difference > 0) {
        // Cálculos matemáticos para converter milissegundos em Dias, Horas, Minutos e Segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Injeta os valores formatados no HTML
        daysElement.innerText = days;
        hoursElement.innerText = hours < 10 ? "0" + hours : hours;
        minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;
    } else {
        // Caso a data já tenha passado, zera o cronômetro
        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
        clearInterval(countdownInterval);
    }
}

// Executa a função imediatamente ao carregar e define o intervalo para rodar a cada 1 segundo (1000ms)
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
