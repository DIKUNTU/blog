/**
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

*/


/**
 * @file
 * A JavaScript file for cookie consent.
 */

(function () {

  'use strict';

  const cookiebanner = document.querySelector('.cookieconsent');
  const cookieconsent = localStorage.getItem('cookieconsent');

  if (cookiebanner && !cookieconsent) {
    cookiebanner.classList.remove('hidden');
    cookiebanner.classList.add('js-cookieconsent-open');
  }

  const cookie_buttons = document.querySelectorAll('button[data-consent]');
  cookie_buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.getAttribute('data-consent') === 'true') {
        localStorage.setItem('cookieconsent', 'accept');
		 cookiebanner.classList.remove('js-cookieconsent-open');
      cookiebanner.classList.add('hidden');
      }
      else {
        localStorage.setItem('cookieconsent', 'decline');
		 cookiebanner.classList.remove('js-cookieconsent-open');
      cookiebanner.classList.add('hidden');
      }
     
    });
  });

})();