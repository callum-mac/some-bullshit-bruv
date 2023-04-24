const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.site-nav ul');
const links = document.querySelectorAll('.site-nav li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach(link => {
		link.classList.toggle('fade');
	});
});

links.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		links.forEach(link => {
			link.classList.remove('fade');
		});
	});
});
