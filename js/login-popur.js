let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let loginClose = document.querySelector('.login-close')
const pageFone = document.getElementById('page-modal');


loginButton.addEventListener('click', showPopup);
loginClose.addEventListener('click', closePopup);

function showPopup(evt) {
     evt.preventDefault();
     loginPopup.classList.toggle('show-popup');
	 pageFone.style.backgroundColor = "#C0C0C0";
	 pageFone.style.opacity = "0.5";
	 pageFone.style.display = "block";
	 }

function closePopup(evt) {
     evt.preventDefault();
     loginPopup.classList.toggle('show-popup');
	 pageFone.style.backgroundColor = "#ffffff";
	 pageFone.style.opacity = "1";
	 pageFone.style.display = "none";
 	}
	
	

