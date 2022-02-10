//https://codepen.io/Mohamed-N/pen/xxXWEGW?editors=0100

const next = document.querySelector('.right-arrow');
const back = document.querySelector('.left-arrow');
const imgPreview = document.querySelector('.img-preview');

let currentIndex = 1;

const animate = () => {
	// Get the old image
	const prevImage = imgPreview.firstElementChild;
	// Get the old image container
	const containerClass = prevImage.getAttribute('data-img');
	const oldImgContainer = document.querySelector(
		`.carousel-img${containerClass}`,
	);
	// Get the selected image
	const selectedImage = document.querySelector(`.img${currentIndex}`);
	// Get the flip state
	const state = Flip.getState([prevImage, selectedImage]);

	// Append the new image to the preview container
	imgPreview.appendChild(selectedImage);

	// Remove the old image from the preview container
	removed = imgPreview.removeChild(imgPreview.firstElementChild);

	// Append the removed image to its respective container
	oldImgContainer.appendChild(removed);

	Flip.from(state, { duration: 0.4, ease: 'power1.inOut' });
};

next.addEventListener('click', () => {
	currentIndex = ++currentIndex % 5 || 5;
	animate('next');
});
back.addEventListener('click', () => {
	currentIndex = --currentIndex % 5 || 5;
	animate('back');
});
