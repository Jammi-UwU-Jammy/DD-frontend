// import logo from './logo.svg';
// import './App.css';
import emailjs from '@emailjs/browser';

/* ============ SHOW MENU ============ */
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ============ HIDE MENU ============ */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ============ REMOVE ON MENU CLICK ============ */
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ============ REMOVE ON MENU CLICK ============ */
const shadowHeader = () =>{
  const header = document.getElementById('header')
  window.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/* ============ EMAILJS ============ */
const contactForm = document.getElementById('contact-form'),
      contactMessage =document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  /* serviceID- templateID - #form - publickey */
  emailjs.sendForm('service_emailjsi2jh0ew','template_osjdfvj','#contact-form','0no3PwVVGchuQjK0m')
  .then(() => {
    contactMessage.textContent = 'Message sent successfully.'
    setTimeout( () =>{
      contactMessage.textContent = ''
    }, 5000)
    contactForm.reset()
  }, () =>{
    contactMessage.textContent = "Message not sent (service down)"
  })
}
contactForm.addEventListener('submit', sendEmail)


/* ============ SHOW SCROLL UP ============ */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ============ SHOW SECTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll('section[id]')
console.log(sections)
const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop  - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)

/*============ LIGHT & DARK THEME ============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-contrast-2-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-contrast-2-fill' : 'ri-contrast-2-line'

if (selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-contrast-2-fill' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})



/* ======================== App ======================== */

function App() {
  return (
    <p>
      Root
    </p>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
