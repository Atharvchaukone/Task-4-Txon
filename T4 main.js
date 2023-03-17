const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	mobileNav.classList.toggle('open');
});

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
		alert('Please fill out all fields.');
	} else {
		alert('Message sent successfully!');
		form.reset();
	}
});