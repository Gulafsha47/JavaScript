console.log('Welcome to the event and event object');
document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have click on the heading');
    //location.href='//codewithharry.com'
    variable = e.target;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    console.log(variable);
});
