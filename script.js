// year
document.getElementById('year').textContent = new Date().getFullYear();

// micro-demo interactions
const result = document.getElementById('resultReadout');
const toggleBtn = document.getElementById('toggleResult');
const cycleBtn = document.getElementById('cyclePriority');
const priorityBadge = document.querySelector('[data-priority]');

let state = 'notrun'; // 'pass' | 'fail'
let prio = 'high'; // 'high' | 'medium' | 'low'

function renderResult(){
  result.classList.remove('pass','fail');
  if(state === 'pass'){
    result.textContent = 'Result: Pass';
    result.classList.add('pass');
  } else if(state === 'fail'){
    result.textContent = 'Result: Fail';
    result.classList.add('fail');
  } else {
    result.textContent = 'Result: Not run';
  }
}

toggleBtn.addEventListener('click', () => {
  if(state === 'notrun') state = 'pass';
  else if(state === 'pass') state = 'fail';
  else state = 'pass';
  const pressed = toggleBtn.getAttribute('aria-pressed') === 'true';
  toggleBtn.setAttribute('aria-pressed', String(!pressed));
  renderResult();
});

function renderPriority(){
  priorityBadge.classList.remove('high','medium','low');
  priorityBadge.classList.add(prio);
  const label = prio.charAt(0).toUpperCase() + prio.slice(1);
  priorityBadge.textContent = `Priority: ${label}`;
}

cycleBtn.addEventListener('click', () => {
  prio = prio === 'high' ? 'medium' : prio === 'medium' ? 'low' : 'high';
  renderPriority();
});

// initial paint
renderResult();
renderPriority();
