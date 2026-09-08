//Sets a Set Amount of time that the site will wait between each action
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//Starts Working when the site is fully parsed 
document.addEventListener("DOMContentLoaded",() => {
   
    //Finds all of the icon Buttons and puts them in a list, also finds the remove icon button
    const Icons = document.querySelectorAll(".LinkButtons");
    const Buttons = document.getElementById("RemoveButton");
    
    //Function - Moves all of the icons either off or on screen Depending on their current State
    async function Toggle(){
        // For Every Icon that is on the Page so it will effect all icons one after another
        for (const icon of Icons) {
            // Toggle a css Class that will Move the Icon when given, Transitions will handle the movement between the 2 points
            icon.classList.toggle("MoveUp");
            //Waits Before giving the next icon the MoveUp Class
            await delay(40)
    };
};
    //If the Remove Button is clicked run the Toggle Function
    Buttons.addEventListener("click", Toggle);
});