const launchDate = new Date();
launchDate.setMonth(launchDate.getMonth() + 1);
launchDate.setDate(launchDate.getDate() + 15);

function updateCountdown() {
const now = new Date();
const timeLeft = launchDate - now;

if (timeLeft <= 0) {
    document.getElementById('timer').textContent = "Já está no ar!";
    clearInterval(countdownInterval);
    return;
}

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
const seconds = Math.floor((timeLeft / 1000) % 60);

document.getElementById('timer').textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();