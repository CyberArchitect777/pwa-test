if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const result = document.getElementById('result');
const btn = document.getElementById('roll-btn');

function roll() {
  result.classList.add('rolling');
  btn.disabled = true;

  setTimeout(() => {
    result.textContent = Math.floor(Math.random() * 6) + 1;
    result.classList.remove('rolling');
    btn.disabled = false;
  }, 150);
}

btn.addEventListener('click', roll);
roll();
