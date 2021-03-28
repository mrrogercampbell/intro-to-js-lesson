// Grab the button element from the html document
const grabButton = document.querySelector('#click-me')
// document is a class that grabs the html document
// to showcase this open your inspector and nav to the console and type "document" it will return your HTML


//create function that onclick replaces the text inside the h1 with a new string
function handleClick() {
    //Grab the h1 tag
    const grabNameH1 = document.querySelector('#name')
    const name = "Roger"

    // Here we are changing the space between the two html tags to our statement
    grabNameH1.innerHTML = "Hello " + name + "!"
}

// grabButton.addEventListener('click', handleClick)


//When the button is clicked we want to iterate over the array and display 1 name at a time.
// Create a counter that can store our place in the array 
let count = 0

// Then when the button is clicked again we want to display the next name in the array.

//Then be able to continue this until we hit the end of the array.
function handleClickLotsOfPeople() {
    //Grab the h1 tag
    const grabNameH1 = document.querySelector('#name')
    const people = ['Roger', 'Danny', 'Ben']
    if (count < people.length) {
        grabNameH1.innerHTML = "Hello " + people[count] + "!"
        count += 1
    } else {
        alert('no more names')
        alert('no more names')
        alert('no more names')
    }
}

grabButton.addEventListener('click', handleClickLotsOfPeople)


// Showcasing the different ways to write a function in JavaScript

// Function Deceleration
function add(a, b) {
    return a + b
}

// These are Function Expressions (ie: arrow functions)

// This is an explicit return meaning it will return a+b by default
// This is a way of short-handing your code and making it more readable
// const add = (a,b) => a+b

// The "{}" syntax allows you to write many lines of code and then specify the exact thing you would like to return
// const add = (a,b) => {
//     console.log(a+b)
//     return a+b
// }

// The "()" syntax allows you to return a parent element and all of its children.
// This syntax is mostly used in the React framework, we will look at this more when we get there
// const add = (a,b) => (
//     <div>
//         <h1>hello</h1>
//     </div>
// )


// Created a calls in js
// this allows us to make templates for code
// you can use this for a lot of different thing
class Dog {
    constructor(name, breed, color) {
        this.name = name
        this.breed = breed
        this.color = color
    }
    woof = () => console.log(this.name)
}

let dog1 = new Dog('Doc', 'Goldendoodle', 'Apricot Abstract')
let dog2 = new Dog('Colby', 'American Fox Hound', 'Cow')

function getData() {

}


// For Now only work with REST APIs
let URL = 'https://rickandmortyapi.com/api/character'

// This is a premade function that handles api call
// The URL arg is meant to be the URL where the data lives; you can find this in the APIs documentation
fetch(URL)
    // This is a promise; remember me asking you to get a cup of coffee
    // This tells your code to wait until the earlier function completes its work and RETURNS something
    // In this case the return is the data from the API call
    .then(res => {
        // console.log(res)
        // this promise is not necessary was just showing you how the URL encoded data comes in and we then need to convert it
        return res
    })
    // This is the first actually promise that is needed because it converts our data to a readable JSON object and RETURNS it!!!
    .then(res => res.json())
    // Here we now have JSON readable data and can interact with it
    .then(convertedData => {

        // console.log(convertedData)
        // let data = convertedData.results

        // We are deconstructing the results and info properties from within the convertedData object
        let { results, info } = convertedData
        console.log(results)
        console.log(info)

        // We are using DOM manipulation to select the div tag in our html with the class name of char-container
        let grabCharContainer = document.querySelector('#char-container')

        // We created a for loop to iterate over the coverted data and for each object withing the array we:
        // 1. Create three tags
        // 2. Added the sauce (AKA the data) to empty tags
        // 3. We appended the created tags to the selected div
        for (let i = 0; i < results.length; i++) {
            const { name, image, species, status } = results[i]
            let createImg = document.createElement('img')
            let createParaTag = document.createElement('p')
            let createH1Tag = document.createElement('h1')


            createH1Tag.innerHTML = name
            createParaTag.innerHTML = `${name} is a ${species} who is ${status}`
            createImg.setAttribute('src', image)



            grabCharContainer.appendChild(createH1Tag)
            grabCharContainer.appendChild(createParaTag)
            grabCharContainer.appendChild(createImg)
        }
    })