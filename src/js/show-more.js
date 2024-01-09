const btnText = document.querySelector('.about-content__read-more')
const about = document.querySelector('.text-content')

if (window.innerWidth > 768) {
  btnText.addEventListener('click', () => {
    if (btnText.textContent === 'Читать далее') {
      about.style.height = 'auto'
      btnText.textContent = 'Свернуть'
      btnText.classList.add('read-more--close')
    } else {
      btnText.textContent = 'Читать далее'
      about.style.height = '158px'
      btnText.classList.remove('read-more--close')
    }
  })
}
if (window.innerWidth < 768) {
  btnText.addEventListener('click', () => {
    btnText.textContent === 'Читать далее'
      ? ((about.style.height = 'auto'), (btnText.textContent = 'Свернуть'))
      : ((btnText.textContent = 'Читать далее'), (about.style.height = '158px'))
  })
}
// __________________DEVICES____________________________
const equipment = document.querySelector('.equipment-container')
const btnShowMore = document.getElementById('deviceBtn')
btnShowMore.addEventListener('click', () => {
  if (btnShowMore.textContent === 'Показать всё') {
    equipment.style.height = 'auto'
    btnShowMore.textContent = 'Скрыть'
    btnShowMore.classList.add('read-more--close')
  } else {
    btnShowMore.textContent = 'Показать всё'
    equipment.style.height = '170px'
    btnShowMore.classList.remove('read-more--close')
  }
})
