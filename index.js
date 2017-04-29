(function() {
  'use strict';

  let redLight = document.querySelector('#stopButton');
  let yellowLight = document.querySelector('#slowButton');
  let greenLight = document.querySelector('#goButton');
  let buttons = document.querySelectorAll('.button');

  redLight.addEventListener('click', function() {
    stopLight.classList.toggle('stop');
  });

  yellowLight.addEventListener('click', function() {
    slowLight.classList.toggle('slow');
  });

  greenLight.addEventListener('click', function() {
    goLight.classList.toggle('go');
  });

  buttons.forEach((button) => button.addEventListener('mouseenter', function() {
    console.log("One mouse enters the " + event.target.textContent + " button");
  }));

  buttons.forEach((button) => button.addEventListener('mouseleave', function() {
    console.log("One mouse leaves the " + event.target.textContent + " button");
  }));

})();
