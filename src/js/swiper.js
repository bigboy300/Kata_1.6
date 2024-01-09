const toggleButton = document.getElementById('toggleButton')

const lastThreeContainers = Array.from(
  document.getElementsByClassName('block')
).slice(8, 11)
const lastFiveContainers = Array.from(
  document.getElementsByClassName('block')
).slice(6, 11)

let isElementVisible = false
if (window.innerWidth < 1120) {
  toggleButton.addEventListener('click', () => {
    if (isElementVisible) {
      lastFiveContainers.forEach((el) => {
        el.style.display = 'none'
      })
      toggleButton.textContent = 'Показать всё'
      toggleButton.classList.remove('read-more--close')

      isElementVisible = false
    } else {
      lastFiveContainers.forEach((el) => {
        el.style.display = 'block'
      })
      toggleButton.textContent = 'Скрыть'
      toggleButton.classList.add('read-more--close')
      isElementVisible = true
    }
  })
}
if (window.innerWidth > 1120) {
  toggleButton.addEventListener('click', () => {
    if (isElementVisible) {
      lastThreeContainers.forEach((el) => {
        el.style.display = 'none'
      })
      toggleButton.textContent = 'Показать всё'
      toggleButton.classList.remove('read-more--close')
      isElementVisible = false
    } else {
      lastThreeContainers.forEach((el) => {
        el.style.display = 'block'
      })
      toggleButton.textContent = 'Скрыть'
      toggleButton.classList.add('read-more--close')
      isElementVisible = true
    }
  })
}

const swiper = new Swiper('.swiper', {
  autoHeight: true,
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 16
})
