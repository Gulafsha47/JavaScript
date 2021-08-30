console.log('welcome to the javascript 18 event tutorial');
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);


function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks this is a double click event", e);
    e.preventDefault();
}