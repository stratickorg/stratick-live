const contentContainer = document.querySelector(".about-us-content");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	const triggerPoint = contentContainer.offsetTop - window.innerHeight / 2; // Adjust trigger point based on your needs

	if (scrollTop >= triggerPoint) {
		contentContainer.classList.add("show-content"); // Class with animation styles applied
	}
});
