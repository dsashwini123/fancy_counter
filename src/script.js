const counterE1 = document.querySelector('.counter');
const increaseButtonE1 = document.querySelector('.counter__button--increase');
const decreaseButtonE1 = document.querySelector('.counter__button--decrease');
const resetButtonE1 = document.querySelector('.counter__reset-button');
const counterValueE1 = document.querySelector('.counter__value');
const counterTitleE1 = document.querySelector('.counter__title');

/*console.log(increaseButtonE1);*/

// since we are same useing fun is all the, lets just put it in one single fun and call when needed.
function incrementCounter() {
    // get current value of counter
const currentValue = counterValueE1.textContent;

    // convert value to number type
const currentValueAsNumber = +currentValue;

    // increment by 1
let newValue = currentValueAsNumber + 1;

    // check if new value is greater than 5
if (newValue > 5) {
    // if it is, force it to be 5 instead.
    newValue = 5;

    // give visual indicator that limit has been reached. .counter--limit is added in css, no "." in counter--limit here coz its a classList.
counterE1.classList.add('counter--limit');

   // update counter title saying limit has been reached.
counterTitleE1.innerHTML = 'Reached Limit! Buy <b>Pro </b>for to use more than 5';

   // disable both increase decrease buttons ince reached 5.
increaseButtonE1.disabled = true;
decreaseButtonE1.disabled = true;
//resetButtonE1.disabled = true;

// unfocus (blur) increase button
increaseButtonE1.blur();

}   

    // set counter element with new value
    counterValueE1.textContent = newValue;
} 

// increase button
increaseButtonE1.addEventListener('click', incrementCounter);

// decrease button
decreaseButtonE1.addEventListener('click', function() {
    // get current value of counter
const currentValue = counterValueE1.textContent;

    // convert value to number type
const currentValueAsNumber = +currentValue;

    // decrement by 1
let newValue = currentValueAsNumber - 1;

   // check if new value is less than 0
if (newValue < 0){
    // this woundn't work until u change the const keyword newValue declared in previous step to "let" keyword, but const worked in this ex, still changed.
newValue = 0;

}
    // set counter element with new value
counterValueE1.textContent = newValue;

   // unfocus (blur) decrease button
   decreaseButtonE1.blur();

});

// reset button
resetButtonE1.addEventListener('click', function() {
    // set counter value to zero
    counterValueE1.textContent = 0;

    //reset bg color after reached 5
counterE1.classList.remove('counter--limit');

    //reset counter title
counterTitleE1.textContent = 'Fancy Counter';

    // enable increase and decrease buttons 
increaseButtonE1.disabled = flase;
decreaseButtonE1.disabled = flase;

   // unfocus (blur) reset button
resetButtonE1.blur();
});

// press any key the counter is gonna count
document.addEventListener('keydown', incrementCounter);