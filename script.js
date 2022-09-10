const containerEl = document.querySelector(".container");

for (let index = 0; index < 100; index++) {
    const colorContainerEl = document.createElement("div")

    colorContainerEl.classList.add("color-container")

    containerEl.appendChild(colorContainerEl)
    
}

const colorContainerEls = document.querySelectorAll(".color-container")
console.log(colorContainerEls)

function generateColors(){
    colorContainerEls.forEach((colorContainerEls)=>{
        const newColorCode = randomColor();

        colorContainerEl.style.getElementsByClassName.backgroundColor = "#" + newColorCode

        colorContainerEl.innerText = "#"+ newColorCode

    })
}


function randomColor(){
    const chars = "0123456789abcdefgh" ;
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum, randomNum + 1);

        
        
    }
    
    return colorCode;
}