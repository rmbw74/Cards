//This Generator Function will create a unique id that can be appended to any created dom element 
const uniqueID = function*(){
    let idNum = 1;
    while (true){
        yield idNum;
        idNum++
    }
}
//Initialize generator function using the variable id
let id = uniqueID();

//add event listener to body of webpage
document.querySelector("body").addEventListener("click", handleClickEvent)

//select DOM element where cards will be created. 
const cardHolder = document.getElementById("cards")

//select DOM element where text input is entered by user. 
// const inputText = document.getElementById("input-text")

//handleClickEvent function to handle all relevent events clicked on in the browser
function handleClickEvent(event){
    console.log(event);
    //set the id of the item clicked on to targetELid
    let targetElid = event.target.id;
    //set the class name of the item clicked to targetELClass
    let targetElClass=event.target.className;
    console.log(targetElid)
    //if the user clicks on the create button 
    if (targetElid === "create-card-Button"){
        //call the createCard function
        createCard();
        // if the user clicks on a delete button
    }else if (targetElClass === "delete-button") {
        //call the removeCard function and pass it the target id
        removeCard(targetElid)
        
    }
}
//this function creates a new card and inserts it into the DOM when the create button is clicked. 
function createCard(){
    //grab a new id to use for the card 
    let newId = id.next().value;
    //grab the text the user input into the text area 
    let content = document.getElementById("input-text")
    //create the card and insert into the DOM
    cardHolder.innerHTML += `<article class="card" id="Card-${newId}"><p class="card-content">${content.value}<br><button class="delete-button" id="Button-${newId}">Delete Card</button>` ;
    //clear the text-input in anticipation of next entry
    content.value = ""
    

}
//this fucnction will remove the appropriate card when the delete button is clicked
function removeCard(targetElid){
    //read the target element id and split it into an array, grab the number (item 1 in the array)
    let buttonId = targetElid.split("-")[1];
    //create the appropriate removal target by appending the button id to the card id. 
    let cardToRemove = document.getElementById("Card-" + buttonId)
    //use removechild method, passing it the appropriate dom target
    cardHolder.removeChild(cardToRemove)

}