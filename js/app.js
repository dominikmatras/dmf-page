const aboutMeBtn = document.querySelector('.about-me')
const galleryBtn = document.querySelector('.gallery')
const priceListBtn = document.querySelector('.price-list')
const contactBtn = document.querySelector('.contact')
const burgerNavBtn = document.querySelector('.burger-btn')
const headerNav = document.querySelector('.header__nav')
const closeNavBtn = document.querySelector('.nav__close')
const contactSubmitBtn = document.querySelector('.contact__submit')
const firstName = document.querySelector('#firstName')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

let errors = 0

const toAboutMeScroll = () => {
  const aboutMeDiv = document.querySelector('.about-me-wrapper')
  aboutMeDiv.scrollIntoView({ behavior: 'smooth' })
  closeNav()
}

const toGalleryScroll = () => {
  const galleryDiv = document.querySelector('.gallery-wrapper')
  galleryDiv.scrollIntoView({ behavior: 'smooth' })
  closeNav()
}

const toPriceListScroll = () => {
  const priceListDiv = document.querySelector('.price-wrapper')
  priceListDiv.scrollIntoView({ behavior: 'smooth' })
  closeNav()
}

const toContactScroll = () => {
  const contactDiv = document.querySelector('.contact-wrapper')
  contactDiv.scrollIntoView({ behavior: 'smooth' })
  closeNav()
}

const showNav = () => {
  headerNav.classList.toggle('nav-active')
  headerNav.classList.add('nav-show-animation')
}

const closeNav = () => {
  if (headerNav.classList.contains('nav-active')) {
    headerNav.classList.remove('nav-active')
    headerNav.classList.remove('nav-show-animation')
  }
}

const checkInput = input => {
  if (input.value !== '') {
  } else {
    errors += 1
  }
}

const emailValidation = email => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

  if (regEx.test(email.value)) {
  } else {
    errors += 1
  }
}

const showAlert = name => {
  if (errors === 0) {
    alert(`${name.value}, Twoja wiadomość została wysłana!`)
    firstName.value = ''
    email.value = ''
    message.value = ''
  } else {
    alert('W formularzu znajdują się błędy, popraw je i wyślij ponownie')
  }
}

aboutMeBtn.addEventListener('click', toAboutMeScroll)
galleryBtn.addEventListener('click', toGalleryScroll)
priceListBtn.addEventListener('click', toPriceListScroll)
contactBtn.addEventListener('click', toContactScroll)
burgerNavBtn.addEventListener('click', showNav)
closeNavBtn.addEventListener('click', closeNav)
contactSubmitBtn.addEventListener('click', e => {
  console.log('ok')

  e.preventDefault()

  checkInput(firstName)
  emailValidation(email)
  checkInput(message)

  showAlert(firstName)
})
