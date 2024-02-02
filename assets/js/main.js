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

//Animation for Aboutus section heading
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

//Animation for Aboutus section images
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

//Animation for Aboutus section headers
document.addEventListener("DOMContentLoaded", function () {
	const storyTextElements = document.querySelectorAll(".story-text");

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

//Animation for Aboutus section heading
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

//Animation for cta section heading
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

//Animation for cta section content
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

//Animation for services section heading
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

//Animation for services section paragraph
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

//Animation for services section boxes
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
