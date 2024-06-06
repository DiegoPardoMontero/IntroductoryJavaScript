//Go and run it in https://example.com/

//This is just some code to create an input
//and give the user the opportunity to create 
//his name so it gets on the webpage

//Create some instructions in an h1
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

//Create an input element
var input = document.createElement('input')
input.setAttribute('type', 'text')

//Get the elements into the DOM
document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

//When hits ENTER, the h1 content change to the input value
input.addEventListener('change', function() {
    h1.innerText = input.value
})