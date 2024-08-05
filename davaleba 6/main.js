
// davaleba 1
function modalfun() {
    const mainmodal = document.getElementById('modalid');
    if (mainmodal.style.display === "block") {
        mainmodal.style.display = "none";
    } else {
        mainmodal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == mainmodal) {
            mainmodal.style.display = "none";
        }
    }
}

//  davaleba 2
let btn = document.getElementById('button');

function changeBC() {
    const colorInput = document.getElementById('colorInput').value.toLowerCase();
    const validColors = ['red', 'blue', 'green', 'black', 'white'];

    if (validColors.includes(colorInput)) {
        document.body.style.backgroundColor = colorInput;
    } else {
        alert('araa dzamia agi feri');
    }
}

btn.addEventListener('click', changeBC);


// davaleba 3
// let calbutton = document.getElementById('calbutton');
// let result    = document.getElementById('result');

// calbutton.addEventListener('click' ,calaverage);

// function calaverage(){
// const numberInput = document.getElementById('numberInput').value;
// const numberArray = numberInput.split(':').map(Number);


// if (numberArray.length ===0) {
//     result.textContent= 'No nubers.';
//     return;
// }
// const sum = numberArray.reduce((total, num)=> total+num,0);
// const average = sum / numberArray.length;
// result.textContent = `Average: ${average.toFixed(2)}`;
// }


let calbutton = document.getElementById('calbutton');
let result = document.getElementById('result');

calbutton.addEventListener('click', calaverage);

function calaverage() {
    const numberInput = document.getElementById('numberInput').value;
    const numberArray = numberInput.split(':').map(Number);

    if (numberArray.length === 0 || numberArray.includes(NaN)) {
        result.value = 'Invalid input.';
        return;
    }

    const sum = numberArray.reduce((total, num) => total + num, 0);
    const average = sum / numberArray.length;
    result.value = `Average: ${average.toFixed(2)}`;
}

// let calbutton = document.getElementById('calbutton');
// let result = document.getElementById('result');

// calbutton.addEventListener('click', calaverage);

// function calaverage() {
//     const numberInput = document.getElementById('numberInput').value;
//     const numberArray = numberInput.split(':').map(Number);

   
//     if (numberArray.length === 0 || numberArray.some(isNaN)) {
//         result.value = 'Invalid input.';
//         return;
//     }

//     const sum = numberArray.reduce((total, num) => total + num, 0);
//     const average = sum / numberArray.length;
//     result.value = `Average: ${average.toFixed(2)}`;
// }
