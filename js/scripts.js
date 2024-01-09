// Selecionando os elementos do HTML
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resumebtn = document.querySelector("#resumebtn");
const resetbtn = document.querySelector("#resetbtn");

// Variáveis para controlar o tempo
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPause = false; // Flag para pausa

// Adicionando eventos aos botões
startbtn.addEventListener("click", startTimer);
pausebtn.addEventListener("click", pauseTimer);
resumebtn.addEventListener("click", resumeTimer);
resetbtn.addEventListener("click", resetTimer);

// Função para iniciar o cronômetro
function startTimer() {
  interval = setInterval(() => {
    if (!isPause) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      // Atualizando o tempo no HTML
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

  // Ajustando a exibição dos botões
  startbtn.style.display = "none";
  pausebtn.style.display = "block";
}

// Função para pausar o cronômetro
function pauseTimer() {
  isPause = true;
  pausebtn.style.display = "none";
  resumebtn.style.display = "block";
}

// Função para retomar o cronômetro
function resumeTimer() {
  isPause = false;
  pausebtn.style.display = "block";
  resumebtn.style.display = "none";
}

// Função para reiniciar o cronômetro
function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  // Resetando o tempo exibido no HTML
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  // Ajustando a exibição dos botões
  startbtn.style.display = "block";
  pausebtn.style.display = "none";
  resumebtn.style.display = "none";
}

// Funções auxiliares para formatar o tempo
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
