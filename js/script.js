document.addEventListener('DOMContentLoaded', function(event) {
	

	// Burger Menu
	let burger = document.querySelector('.header__burger');
	let menu = document.querySelector('.header__menu');
	burger.onclick = function() {
		burger.classList.toggle('active');
		menu.classList.toggle('active');

	}

	// Smooth Scroll
	const anchors = document.querySelectorAll('a[href*="#"]');
	for(let anchor of anchors) {
		anchor.addEventListener('click', function(event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href');
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

	// Validator 

	const form = document.getElementById('track');

	const texts = form.querySelectorAll('[type="number"]');
	texts.forEach(text => {
		text.oninput = evt => validatePass(text);
	})

	const regForm = document.getElementById('news');

	const email = regForm.querySelector('[type="email"]');
	email.oninput = evt => validateText(email);

	function validateText(el) {
		if (el.value.length > 6 && el.value.indexOf('@') > -1 && !el.value.endsWith('@') ) {  // Check if el is greater than 6, contains the '@' and doesnt ends with '@'
			el.dataset.isValid = true;
			el.classList.remove('invalid');
			el.classList.add('valid')
		} else {
			el.dataset.isValid = false;
			el.classList.remove('valid');
			el.classList.add('invalid')
		}
	}
	function validatePass(el) {
		if(String(el.value).length > 10) {
			el.dataset.isValid = true;
			el.classList.remove('invalid');
			el.classList.add('valid')
		} else {
			el.dataset.isValid = false;
			el.classList.remove('valid');
			el.classList.add('invalid')
		}
	}

	// Counter 

	const counter = function(id, count, max) {
		let counted = 1;
		let block = document.getElementById(`${id}`);
		let interval = setInterval(inCounter, 10);

		function inCounter() {
			counted += count;
			block.innerHTML = counted;
			console.log(counted);
			if( counted > max ) {
				console.log('SU,,m');
				clearInterval( interval );
				block.innerHTML = `${max}+`;
			}
		}

		
	};

	// Works when element is visible on the screen
	
	let tick = false;
	function onEntry(entry) {
		entry.forEach(change => {
			if(tick == false) {
				if(change.isIntersecting) {
					counter('clients',205,36000);
					counter('miles',3255,760000); 
					counter('goods',850,170000);
					tick = true;
				};
			}
		});
	};
	let options = {
		threshold: [1] };
	let observer = new IntersectionObserver(onEntry, options);
	let element = document.querySelector('.policy__features');
	observer.observe(element);


	function onVisible(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				setTimeout(change.target.classList.add('visible'), 5);				
			};
		});
	};
	let settings = {
		threshold: [0.25] };
	let animater = new IntersectionObserver(onVisible, settings);
	let elements = document.querySelectorAll('.animated');

	for (let elm of elements) {
		animater.observe(elm);
	};

	let img = document.querySelector('.head__bg img');
	img.onload = function () {
		setTimeout(function () {
			let before = document.querySelector('.head');
			let promo = document.querySelector('.head__promo');
			let header = document.querySelector('.header');
			before.classList.add('active');
			promo.classList.add('active');
			header.classList.add('active');
		}, 250);
	};

	// Parallax Effect On Truck BG
	let bg = document.querySelector('.head__bg');
	let truck = document.querySelector('.call__image');
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    bg.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
	    truck.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)'
	});

})
