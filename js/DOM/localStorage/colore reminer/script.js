let body = document.querySelector('body');
let color = localStorage.getItem("color");

//create a function to change the colore
function colorChange(color) {
    if (color == 'white') {
        body.style.backgroundColor = "#f7f7f5";
    } else {
        body.style.backgroundColor = "black";
    }
}

//1. SetLocally is it is availavle in the local
if (color != null) {
    //what is available inside the local
    colorChange(color);
}

body.addEventListener('click', (event) => {
    let targ = event.target;

    //checking that localStorage is empty or not
    if (targ.id === 'white') {
        colorChange('white');
        localStorage.setItem("color", targ.id);
    } else {
        if (targ.id === 'black') {
            colorChange('black');
            localStorage.setItem("color", targ.id);
        }
    }
})

