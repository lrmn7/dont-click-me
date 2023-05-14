const btn = document.querySelector('button');
const btnBg = btn.querySelector('.button-bg');
const btnSpan = btn.querySelector('span');
let btnChanging = false;

const t = [
  'I said don\'t click me',
  'Hey, no more clicks, please?',
  'Ok, you can stop now',
  'I\'m not a real button',
  'Too many clicks are bad for you',
  'Quit poking me, that tickles',
  'But seriously, stop it',
  'I\'m not worth clicking',
  'What if I grant you 3 wishes?',
  'You know, there are better things to do',
  'Enough!',
  'Here, your preventDefault() and return;',
  'Don\'t make me call the authorities',
  'This is basically DEFCON 2!',
  'Please, think of the pixels!',
  'Cyberpolice, HELP!',
  'Have mercy',
  'I\'m warning you...',
  'I\'s over',
];

btn.onclick = () => {
  if (btnChanging) return;
  btnChanging = true;
  if (!t.length) {
    btnSpan.innerText = '';
    document.querySelectorAll('.button-glitch').forEach((el, i) => {
      el.style.transition = `0.32s ${(i * 0.11) + 0.25}s`;
      el.style.opacity = `0`;
      el.style.filter = 'blur(3px)';
      el.style.pointerEvents = 'none';
    })
    btn.classList.remove('trembling');
    btn.classList.add('end');
    btnBg.style.width = null;
    setTimeout(() => {
      btnBg.style.transform = 'scale(0)';
      btn.style.pointerEvents = 'none';
    }, 240)
    document.querySelector('.itsOver').classList.add('show');
    return
  }
  btn.classList.add('changing', 'trembling');
  setTimeout(() => {
    btn.classList.remove('changing');
    btnSpan.innerText = t[0];
    t.shift();
    const width = btn.getClientRects()[0].width;
    btnBg.style.width = width + 'px';
    const glitch = document.createElement('div');
    glitch.classList.add('button-glitch');
    glitch.style.opacity = '0'
    glitch.style.width = width + 10 + 'px';
    btn.insertBefore(glitch, btnBg);
    setTimeout(() => {
      glitch.style.opacity = '1';
    }, 50)
    if (t.length === 3) {
      btnSpan.style.filter = 'blur(0.5px)';
    } else if (t.length === 1) {
      btnSpan.style.filter = 'blur(1px)';
    } else if (!t.length) {
      document.body.style.background = 'black';
      btnSpan.style.filter = 'blur(1.5px)';
    }
  }, 300);
  setTimeout(() => {
    btnChanging = false;
  }, 820)
};

window.onload = (() => {
  btnBg.style.width = btn.getClientRects()[0].width + 'px';
  document.querySelector('.container').classList.add('show');
})