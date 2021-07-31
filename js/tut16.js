console.log('this is javascript');
let element = document.createElement('li');

let text = document.createTextNode('I am a text node');
element.appendChild(text)
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
 //element.innerText = '<b>this is created by harry</b>';
//element.innerHTML = '<b>Hello this is created for the javascript</b>';

let ul = document.querySelector('ul.this');
//console.log('ul');
//console.log(element)

//replace with
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
let tnode = document.createTextNode('this is created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2)
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))

//let pr = elem2.getAttribute('class');
let pr = elem2.hasAttribute('class');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');

console.log(elem2,pr)
