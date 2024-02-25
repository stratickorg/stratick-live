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

// Animation for REFERRAL heading
document.addEventListener("DOMContentLoaded", function () {
	const referral = document.querySelector(".referral-heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					referral.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(referral);
});

// Animation for P-Headings
document.addEventListener("DOMContentLoaded", function () {
	const pHeadings = document.querySelectorAll(".p-headings");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	// Use forEach to iterate over each element in pHeadings
	pHeadings.forEach(function (element) {
		observer.observe(element);
	});
});

// // Animation for body-container
document.addEventListener("DOMContentLoaded", function () {
	const bodyContainers = document.querySelectorAll(".body-container");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	// Use forEach to iterate over each element in bodyContainers
	bodyContainers.forEach(function (element) {
		observer.observe(element);
	});
});
