if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

const result = document.getElementById('result');
const btn = document.getElementById('roll-btn');

btn.addEventListener('click', () => {
  result.classList.add('rolling');
  btn.disabled = true;

  setTimeout(() => {
    result.textContent = Math.floor(Math.random() * 6) + 1;
    result.classList.remove('rolling');
    btn.disabled = false;
  }, 150);
});
