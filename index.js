// navbar-toggle

const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit')

mobileBtn.addEventListener('click', () => {
	nav.classList.add('menu-btn')
})
mobileBtnExit.addEventListener('click', () => {
	nav.classList.remove('menu-btn')
})

// toggle password visibility:

const togglePassword = document.querySelector('#toggle-pass')
const togglePasswordIcon = document.querySelector('#toggle-pass-icon')

const password = document.querySelector('#inputPassword')

togglePassword.addEventListener('click', () => {
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password'

	password.setAttribute('type', type)

	togglePasswordIcon.classList.toggle('bi-eye')
})

// form validation
