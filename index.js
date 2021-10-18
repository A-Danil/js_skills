/* START TASK 1: Your code goes here */
const table = document.querySelector('#table')

table.onclick = function(e) {
  let td = e.target.closest('td')

  if (!td || !table.contains(td)) {
    return
  }

  highlight(td)
};

function highlight(td) {
  if (!td.classList.contains('first') && !td.classList.contains('special')){
    td.classList.toggle('yellow');
  }

  if(td.classList.contains('first')) {
    let tr = td.closest('tr')
    tr.classList.toggle('blue')
  }

  if(td.classList.contains('special')){
    table.classList.toggle('green')
  }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const reg = /^\+380\d{9}$/
const input = document.querySelector('input')
const invalid = document.querySelector('.invalid')
const valid = document.querySelector('.valid')
const btn = document.querySelector('button')


input.addEventListener('input', validation)
btn.addEventListener('click', sendForm)

function validation(e) {
  let value = e.target.value

  if(!reg.test(value)) {
    input.style.border = '2px solid red'
    invalid.style.display = 'block'
    btn.disabled = true
  } else {
    input.style.border = '1px solid black'
    invalid.style.display = 'none'
    btn.disabled = false
  }
}

function sendForm() {
  valid.style.display = 'block'
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const court = document.querySelector('#court')
const ball = document.querySelector('#ball')
const zoneA = document.querySelector('#zone-A')
const zoneB = document.querySelector('#zone-B')
const scoreA = document.querySelector('#score-A')
const scoreB = document.querySelector('#score-B')
const teams = document.querySelector('#task3')

court.onclick = function(e) {
    ball.style.transform = 'none'

    let courtCoords = this.getBoundingClientRect();
    let ballCoords = {
      top: e.clientY - courtCoords.top - court.clientTop - ball.clientHeight / 2,
      left: e.clientX - courtCoords.left - court.clientLeft - ball.clientWidth / 2
    }

    if (ballCoords.top < 0) {
      ballCoords.top = 0
    }

    if (ballCoords.left < 0) {
      ballCoords.left = 0
    }

    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
      ballCoords.left = court.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
      ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

zoneA.addEventListener('click', goalTeamA)
zoneB.addEventListener('click', goalTeamB)

let goalsA = 0
let goalsB = 0

function goalTeamA() {
  ball.style.transform = 'translate(50%, -50%)'
  ball.style.top = '50%'
  ball.style.left = '520px'
  ball.style.right = '40px'

  goalsA++
  scoreA.innerHTML = `Team A: ${goalsA}`

  let p = document.createElement('p')
  p.setAttribute('class', 'scoreA')
  p.innerText = `Team A score!`
  teams.append(p)

  setTimeout(function() {
    p.parentElement.removeChild(p)
    ball.style.left = '50%'
    ball.style.right = '50%'
    ball.style.transform = 'translate(-50%, -50%)'
  }, 3000);
}

function goalTeamB() {
  ball.style.transform = 'translate(50%, -50%)'
  ball.style.top = '50%'
  ball.style.left = '0'

  goalsB++
  scoreB.innerHTML = `Team B: ${goalsB}`

  let p = document.createElement('p')
  p.setAttribute('class', 'scoreB')
  p.innerText = `Team B score!`
  teams.append(p)

  setTimeout(function() {
    p.parentElement.removeChild(p)
    ball.style.left = '50%'
    ball.style.right = '50%'
    ball.style.transform = 'translate(-50%, -50%)'
  }, 3000);
}
/* END TASK 3 */
