"use strict";

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

document.addEventListener("DOMContentLoaded", function () {
	// ... (your existing code)

	// Update the selector to match the "Services" link
	const servicesLink = document.querySelector(
		'.nav__link[href="#services-section"]'
	);

	// Add a click event listener to the "Services" link
	servicesLink.addEventListener("click", function (e) {
		e.preventDefault();

		// Scroll to the "Services" section smoothly
		document.querySelector("#services-section").scrollIntoView({
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
	const ctaHeading = document.querySelector(".cta-heading-tertiary");

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
	const ctaTextElements = document.querySelectorAll(".el-cta-text");

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

document.addEventListener("DOMContentLoaded", function () {
	const servicesHeading = document.querySelector(".services_primary_heading");

	const observer = new IntersectionObserver(
		function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					servicesHeading.classList.add("show");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	observer.observe(servicesHeading);
});

document.addEventListener("DOMContentLoaded", function () {
	const servicesPara = document.querySelectorAll(".services-para");

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

	servicesPara.forEach(function (textElement) {
		observer.observe(textElement);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const servicesBox = document.querySelectorAll(".services_box-wrapper");

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

	servicesBox.forEach(function (textElement) {
		observer.observe(textElement);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const btnNav = document.getElementById("btn_nav");
	const navBar = document.querySelector(".nav-bar");

	btnNav.addEventListener("click", function () {
		navBar.style.display =
			navBar.style.display === "flex" || navBar.style.display === ""
				? "none"
				: "flex";
	});
});
