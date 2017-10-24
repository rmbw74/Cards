/* Create an HTML page that contains a text area and a button labeled Create.
When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM. */

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