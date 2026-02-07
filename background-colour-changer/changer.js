//dom
//event
//loop

// Grab the body once
const body = document.querySelector('body');

// Select each button individually by its ID (# means ID)
const redBtn = document.querySelector('#get-red');
const blueBtn = document.querySelector('#get-blue');
const greenBtn = document.querySelector('#get-green');
const orangeBtn = document.querySelector('#get-orange');
const voiletBtn = document.querySelector('#get-voilet');
const indigoBtn = document.querySelector('#get-indigo');
const yellowBtn = document.querySelector('#get-yellow');

// You have to add a separate listener for EVERY button
redBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'red';
});

blueBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
});
greenBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'green';
});
orangeBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'orange';
});
voiletBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'violet';
});
indigoBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'indigo';
});
yellowBtn.addEventListener('click', function() {
    body.style.backgroundColor = 'yellow';
});