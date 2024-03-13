const myTags = document. getElementsByTagName('li');
for(let i = 0; i < myTags.length; i++){
    let element = myTags[i];
    //console.log(element.innerText);
}//id unique
const heads = document.getElementById('heading');
//console.log(heads);

//class name method array callection
const items = document.getElementsByClassName('item');
for(let item of items){
    //console.log(item);
    item.style.color = 'blue';
}

//query selector class name .item onk class thakle o fast ta return kore
/*const li = document.querySelector('.item');
console.log(li);*/

//query selectorAll class name .item onk class thakle sob class element return kore
const li = document.querySelectorAll('.item');
//console.log(li);
for(let item of li){
    //console.log(item);
}

//const h1 = document.querySelectorAll('h1');
//console.log(h1);

//node children
/*const parent = document.querySelector('.grand-parent');
console.log(parent);*/

/*const parent = document.querySelector('.grand-parent');
const children = parent.children;
console.log(children[1].children);*/

/*const parent = document.querySelector('.grand-parent');
console.log(parent.children[1]);*/

/*const gp = document.querySelector('grand-parent');
const children = gp.querySelectorAll(".item");
console.log(children);*/

/*const parent = document.getElementsByClassName('grand-parent');
console.log(parent[0]);*/

/*const parent = document.getElementById('#grand-parent');
console.log(parent);*/

/*const children = document.querySelector('.item');
const parent = children.parentElement.parentElement;*/

//children to grand parent
/*const children = document.querySelector('.item');
const gp = children.closest(".grand-parent");
console.log(gp);*/

/*const parent1 = document.getElementById('heading');
const parentTwo = parent1.nextElementSibling;
console.log(parentTwo);*/

const parent2 = document.getElementById('parent-two');
console.log(parent2.previousElementSibling);

//insertBefore()
const container = document.querySelector('.grand-parent');
const div = document.createElement('div');
div.innerHTML = `
<h1> Hello </h1>
<h2> Hello </h2>
<h3> Hello </h3>
`
let h1 = document.getElementById('heading');
container.insertBefore(div, h1);
