const buttonElement = document.getElementById("button");    //Get the button element

buttonElement.addEventListener("mouseover", (e)=>{      //Add a event listener in order to track the mouse enter on the button element
    let y = e.pageX - buttonElement.offsetLeft;     //Subtract the button element offset both vertically and horizontally in order to get the actual mouse entry position on the button
    let x = e.pageY - buttonElement.offsetTop;
    buttonElement.style.setProperty("--positionTop", x + "px");     //Set the property of the pseudo element height and width respectively
    buttonElement.style.setProperty("--positionLeft", y + "px");
});