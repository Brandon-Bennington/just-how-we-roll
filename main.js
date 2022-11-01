/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/


//reset button
let resetButton = document.querySelector('#reset-button');

//d6-roll 
let imageD6 = document.querySelector('#d6-roll');
let imageDoubleD6 = document.querySelector('#double-d6-roll-1');
let imageSecondDoubleD6 = document.querySelector('#double-d6-roll-2');
let imageD12 = document.querySelector('#d12-roll');
let imageD20 = document.querySelector('#d20-roll');

let meanD6 = document.querySelector('#d6-rolls-mean');
let meanD12 = document.querySelector('#d12-rolls-mean');
let meanD20 = document.querySelector('#d20-rolls-mean');
let meanDoubleSixes = document.querySelector('#double-d6-rolls-mean');

let medianD6 =document.querySelector('#d6-rolls-median')
let medianDoubleD6 =document.querySelector('#double-d6-rolls-median')
let medianD12 =document.querySelector('#d12-rolls-median')
let medianD20 =document.querySelector('#d20-rolls-median')

/*******************
 * EVENT LISTENERS *
 *******************/
imageD6.addEventListener('click', function(){
    console.log('D6 clicked!');d6RollFunction();
})

imageDoubleD6.addEventListener('click', function(){
    console.log('DoubleSixes clicked!'); doubleSixesRollFunction();
})

imageSecondDoubleD6.addEventListener('click', function(){
    console.log('DoubleSixes clicked!'); doubleSixesRollFunction();
})

imageD12.addEventListener('click', function(){
    console.log('D12 clicked!');d12RollFunction();
})

imageD20.addEventListener('click', function(){
    console.log('D20 clicked!');d20RollFunction();
})
resetButton.addEventListener('click', function(){
    console.log('Reset clicked!');
    reset()
})
/******************
 * RESET FUNCTION *
 ******************/
function reset(){
    //empty global arrays
    sixes = []
    doubleSixes = []
    twelves = []
    twenties = []
    //reset images
    //images/start/d6.png
    imageD6.src = "./images/start/d6.png"
    imageDoubleD6.src = "./images/start/d6.png"
    imageSecondDoubleD6.src = "./images/start/d6.png"
    imageD12.src = "./images/start/d12.jpeg"
    imageD20.src = "./images/start/d20.jpg"

    //change text
    meanD6.innerText = "N/A"
    meanD12.innerText = "N/A"
    meanD20.innerText = "N/A"
    meanDoubleSixes.innerText = "N/A" 
    medianD6.innerText = "N/A"
    medianDoubleD6.innerText = "N/A"
    medianD12.innerText = "N/A"
    medianD20.innerText = "N/A"
}
reset();


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){

    let result = getRandomNumber(6);
    console.log(result);

    imageD6.src =`./images/d6/${result}.png`

    sixes.push(result);

    console.log(sixes);

    meanD6.innerText = getMean(sixes);

    medianD6.innerText = findMedian(sixes);
}

function doubleSixesRollFunction(){

    let result = getRandomNumber(6);
    let result2 = getRandomNumber(6)
    let finalResult = result + result2 
    console.log(finalResult);

    imageDoubleD6.src = `./images/d6/${result}.png`
    imageSecondDoubleD6.src = `./images/d6/${result2}.png`

    doubleSixes.push(finalResult)

    console.log(doubleSixes)

    meanDoubleSixes.innerText = getMean(doubleSixes)

    medianDoubleD6.innerText = findMedian(doubleSixes);
    
}


function d12RollFunction(){

    let result = getRandomNumber(12);
    console.log(result);

    imageD12.src = `./images/numbers/${result}.png`

    twelves.push(result)

    console.log(twelves)

    meanD12.innerText = getMean(twelves);

    medianD12.innerText = findMedian(twelves);
}

function d20RollFunction(){

    let result = getRandomNumber(20);
    console.log(result);

    imageD20.src = `./images/numbers/${result}.png`

    twenties.push(result)

    console.log(twenties)
    
    meanD20.innerText = getMean(twenties);

    medianD20.innerText = findMedian(twenties);

    
}
/****************
 * MATH SECTION *
 ****************/

function getMean(array){
let total = 0
    for(let i = 0; i < array.length; i++){
        total = total + array[i];

    }
    return total/array.length; 
}

function getSortedArray(arr){
	return arr.slice().sort((a, b) => a - b);
}
function findMedian(inputArray) {
	let sortedArr = getSortedArray(inputArray);
	let inputLength = inputArray.length;
	let middleIndex = Math.floor(inputLength / 2);
	let oddLength = inputLength % 2 != 0;
	let median;
	if(oddLength) { // if array length is odd -> return element at middleIndex
		median = sortedArr[middleIndex];
	} else {
		median = (sortedArr[middleIndex] + sortedArr[middleIndex - 1]) / 2;
	}
	return median;
}
