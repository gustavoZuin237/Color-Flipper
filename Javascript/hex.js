const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",]

let displayColor = document.getElementById("color")

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length)
}

function changeColor() {
    let color = "#";

    for(let i = 0; i<6; i++) {
        hexDigit = hex[getRandomNumber()];
        color += hexDigit;
    }
    
    displayColor.textContent = color;
    displayColor.style.color = color;
    document.body.style.backgroundColor = color;
}