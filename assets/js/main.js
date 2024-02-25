"use strict";

// NAVIGATION (MEDIA QUERY)
const mobileNavBtn = document.querySelector(".mobile-nav__toggle-btn");
const nav = document.querySelector(".nav");

mobileNavBtn.addEventListener("click", () => {
	nav.classList.toggle("nav-open");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

//NAV ELEMENT SMOOTH BEHAVIOR
document.addEventListener("DOMContentLoaded", function () {
	const servicesLink = document.querySelector(
		'.nav__link[href="#services-section"]'
	);

	servicesLink.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector("#services-section").scrollIntoView({
			behavior: "smooth",
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const contactLink = document.querySelector(
		'.nav__link[href="#cta-section"]'
	);

	contactLink.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector("#cta-section").scrollIntoView({
			behavior: "smooth",
		});
	});
});

//HEADING ANIMATIONS

//Animation for ABOUTUS section heading
document.addEventListener("DOMContentLoaded", function () {
	const aboutHeading = document.querySelector(".about-heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					aboutHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(aboutHeading);
});

//Animation for WHYCHOOSEUS section heading
document.addEventListener("DOMContentLoaded", function () {
	const whyChooseHeading = document.querySelector(".why-choose");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					whyChooseHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(whyChooseHeading);
});

//Animation for TESTIMONIALS section heading
document.addEventListener("DOMContentLoaded", function () {
	const testimonialsHeading = document.querySelector(".testimonials-heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					testimonialsHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(testimonialsHeading);
});

//Animation for CTA section heading
document.addEventListener("DOMContentLoaded", function () {
	const ctaHeading = document.querySelector(".cta-heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					ctaHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(ctaHeading);
});

//Animation for CTA section heading
document.addEventListener("DOMContentLoaded", function () {
	const portfolioHeading = document.querySelector(".portfolio-heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					portfolioHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(portfolioHeading);
});

//CONTENT

document.addEventListener("DOMContentLoaded", function () {
	const ctaButton = document.querySelector(".nav__cta");
	const heroButton = document.querySelector(".hero__cta");
	const ctaSection = document.querySelector("#cta-section");

	ctaButton.addEventListener("click", function (e) {
		e.preventDefault();

		ctaSection.scrollIntoView({
			behavior: "smooth",
		});
	});

	heroButton.addEventListener("click", function (e) {
		e.preventDefault();

		ctaSection.scrollIntoView({
			behavior: "smooth",
		});
	});
});

// TESTIMONIAL SECTION //
document.addEventListener("DOMContentLoaded", function () {
	const testimonialSlider = document.getElementById("testimonial-slider");
	const testimonial1 = document.getElementById("testimonial1");
	const testimonial2 = document.getElementById("testimonial2");
	const prevBtn = document.querySelector(".prevBtn");
	const nextBtn = document.querySelector(".nextBtn");

	// Initially hide the second testimonial card
	testimonial2.style.display = "none";

	// Function to show next testimonial after a set time
	function showNextTestimonial() {
		testimonial1.style.display = "none";
		testimonial2.style.display = "flex";

		// Reset after 7 seconds (adjust the time as needed)
		setTimeout(function () {
			testimonial1.style.display = "flex";
			testimonial2.style.display = "none";
		}, 7000);
	}

	// Event listeners for navigation buttons
	prevBtn.addEventListener("click", function () {
		testimonial1.style.display = "flex";
		testimonial2.style.display = "none";
	});

	nextBtn.addEventListener("click", function () {
		showNextTestimonial();
	});

	// Automatically show the next testimonial after a set time
	setInterval(function () {
		showNextTestimonial();
	}, 7000);
});
