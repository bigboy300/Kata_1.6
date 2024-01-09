const burgerBtn = document.querySelector('.circle-btn--burger')
const mobileMenu = document.querySelector('.mobile-menu-block')
const closeBtn = document.querySelector('.circle-btn--close-burger')
const muteArea = document.querySelector('.mute-area')

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu-block--hidden')
  burgerBtn.style.display = 'none'
})
function hideMenu() {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  burgerBtn.style.display = 'block'
}
closeBtn.addEventListener('click', hideMenu)
muteArea.addEventListener('click', hideMenu)

// _______________Call Aside_____________
const callBtn = document.querySelector('.circle-btn--contact')
const headerCallBtn = document.querySelector('.user-panel__circle-btn--contact')
const callMenu = document.querySelector('.call')
const callCloseBtn = document.querySelector('.call__close-button')
const callMuteArea = callMenu.querySelector('.mute-area')

function closeCall() {
  callMenu.classList.add('call-block--hidden')
}
function openCall() {
  callMenu.classList.remove('call-block--hidden')
}
callBtn.addEventListener('click', openCall)
headerCallBtn.addEventListener('click', openCall)
callCloseBtn.addEventListener('click', closeCall)
callMuteArea.addEventListener('click', closeCall)
// _______________FeedBack_____
const feedbackBtn = document.querySelector('.circle-btn--chat')
const headerFeedbackBtn = document.querySelector('.wrapper__circle-btn--chat')
const feedbackMenu = document.querySelector('.feedback')
const feedbackCloseBtn = document.querySelector('.feedback__close-button')
const feedbackMuteArea = feedbackMenu.querySelector('.mute-area')

function openFeedback() {
  feedbackMenu.classList.remove('feedback--hidden')
}
feedbackBtn.addEventListener('click', openFeedback)
headerFeedbackBtn.addEventListener('click', openFeedback)
function closeFeedback() {
  feedbackMenu.classList.add('feedback--hidden')
}
feedbackCloseBtn.addEventListener('click', closeFeedback)
feedbackMuteArea.addEventListener('click', closeFeedback)
