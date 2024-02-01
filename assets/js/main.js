"use strict";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

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

document.addEventListener("DOMContentLoaded", function () {
	const abtImages = document.querySelectorAll(".abt-img");

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

	abtImages.forEach(function (img) {
		observer.observe(img);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const storyTextElements = document.querySelectorAll(".story-text");
	const missionTextElements = document.querySelectorAll(".mission-text");

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

	storyTextElements.forEach(function (textElement) {
		observer.observe(textElement);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const missionTextElements = document.querySelectorAll(".mission-text");

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

	missionTextElements.forEach(function (textElement) {
		observer.observe(textElement);
	});
});

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

document.addEventListener("DOMContentLoaded", function () {
	const ctaTextElements = document.querySelectorAll(".cta-text-box");

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

	ctaTextElements.forEach(function (textElement) {
		observer.observe(textElement);
	});
});
