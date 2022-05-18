window.addEventListener('load', function () {
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

	const form = document.getElementById('sh-form')
	const username = document.getElementById('inputUsername')
	const email = document.getElementById('inputEmail')
	const phone = document.getElementById('inputPhone')
	// const password = document.getElementById('inputPassword')
	const confirmPassword = document.getElementById('inputConfirmPassword')

	form.addEventListener('submit', e => {
		e.preventDefault()
		runValidation()
	})

	function runValidation() {
		isRequired(username.value) ? markSuccess(username) : markError(username, 'Username is required.')
		!isRequired(email.value)
			? markError(email, 'Email is required.')
			: !emailPattern(email.value)
			? markError(email, 'Email is not valid.')
			: markSuccess(email)
		maxLength(phone.value, 11) ? markSuccess(phone) : markError(phone, 'Phone Number must be 11 digits.')
		isRequired(password.value) ? markSuccess(password) : markError(password, 'Password is required.')
		!isRequired(confirmPassword.value)
			? markError(confirmPassword, 'Password is required.')
			: password.value !== confirmPassword.value
			? markError(confirmPassword, 'Password does not match.')
			: markSuccess(confirmPassword)
	}
})

// Validations
function isRequired(value) {
	return value != null && value.trim().length > 0
}

function maxLength(value, max) {
	return isRequired(value) && value.trim().length === max
}

function emailPattern(value) {
	const pattern = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
	return isRequired(value) && pattern.test(value.trim())
}

// validation feedbacks

function markError(input, message) {
	const inputParent = input.parentElement

	const errorField = inputParent.nextElementSibling
	errorField.innerText = message

	errorField.style.display = 'block'

	input.className = 'form-control is-invalid'
}

function markSuccess(input) {
	const inputParent = input.parentElement

	const errorField = inputParent.nextElementSibling
	errorField.innerText = ''

	errorField.style.display = 'none'

	input.className = 'form-control is-valid'
}
