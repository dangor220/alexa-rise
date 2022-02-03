const button = document.querySelectorAll('.bubbly-button');
const main = document.querySelector('main');

button.forEach(item => {
  item.addEventListener('click', function (e) {

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = Math.random() * 100 + 'px'
  circle.style.left = Math.random() * 200 + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
})
})