const area = document.querySelector('.area');
const btn = document.querySelector('.btn');

area.value = localStorage.getItem('area');

area.addEventListener('input', (evt) => {
  localStorage.setItem('area', evt.target.value);
})

btn.addEventListener('click', () => {
  localStorage.removeItem('area');
  area.value = '';
})
