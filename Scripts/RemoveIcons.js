const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener("DOMContentLoaded",() => {
   
    const Icons = document.querySelectorAll(".LinkButtons");
    const Buttons = document.getElementById("RemoveButton");

    console.log(Icons);
    async function Toggle(){
        console.log("Toggle Elements");
        for (const icon of Icons) {
            icon.classList.toggle("MoveUp");
            await delay(40)
    };
};
    Buttons.addEventListener("click", Toggle);
});