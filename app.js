var addButtons = document.querySelectorAll(".button")
var cartvalue = document.getElementById('cart-value');
let count = 0;
const array = [];
let rate = 0; 
let dollar;
let cents;
let decimalplaces = 2;

addButtons.forEach(item => {
    item.addEventListener('click', function () {
        count += 1;
        cartvalue.innerText = count;
    });
});

function getContentText(event) {
    const parentDiv = event.target.closest(".allbooks");
    if (parentDiv) {
        const p = parentDiv.closest("div").querySelector("p").textContent;
        pp = p.substr(1);
        rate = rate + Number(Math.round(pp * Math.pow(10, decimalplaces)) / Math.pow(10, decimalplaces));
        dollar = Math.floor(rate); 
        cents = (rate % 1).toFixed(2).substr(2);
    }
}

const addingButton = document.querySelectorAll(".allbooks");

addingButton.forEach(button => {
    button.addEventListener('click', getContentText);
});

var cartbutton = document.querySelector('#cart')

cartbutton.addEventListener('click', () => {
    array.forEach((item) => {
        console.log("Item name: " + item.name + "   " + "Quantity :- " + item.qty);
    });
    console.log("The total amount is $" + dollar + " and " + cents + " cents");
});

const books = document.querySelectorAll('.space-evenly');

books.forEach(function (alldivs) {
    alldivs.addEventListener('click', (element) => {
        let name2;
        if (element.target.id === "") {
            name2 = element.target.parentNode.parentNode.parentNode.children[0].children[1].innerText;
        } else if(element.target.class == "space-evenly"){
            name2 = element.target.parentNode.parentNode.parentNode.querySelector('h3').textContent;;
        }

        const existingBook = array.find((item) => item.name === name2);
        if (existingBook) {
            existingBook.qty += 1;
        } 
        else {
            array.push({ name: name2, qty: 1 });
        }
    }, true);
});
