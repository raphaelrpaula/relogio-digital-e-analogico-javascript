const hourElement = document.querySelector('.hr');
const minuteElement = document.querySelector('.mn');
const secondElement = document.querySelector('.sc');
const digital = document.querySelector('.digital');
const relogio = document.querySelector('.relogio');

const switchButton = document.querySelector('.switch');
const html = document.documentElement;

switchButton.addEventListener('change', () => {
  html.classList.toggle('white-mode');
});

function changeTime() {
  let time = new Date();
  time.getUTCHours() - 3;
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  digital.innerHTML = `
    <span class="hora">${fixZero(hour)}</span> : <span class="minuto">${fixZero(
    minute,
  )}</span> : <span class="segundo">${fixZero(second)}</span>
  `;

  let hDeg = (360 / 12) * hour;
  let mDeg = (360 / 60) * minute;
  let sDeg = (360 / 60) * second;

  hourElement.style.transform = `rotate(${hDeg}deg)`;
  minuteElement.style.transform = `rotate(${mDeg}deg)`;
  secondElement.style.transform = `rotate(${sDeg}deg)`;
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(changeTime, 1000);
changeTime();
