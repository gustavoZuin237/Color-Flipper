const colors = ["Red", "Green", "Orange", "Pink", "rgb(66, 214, 202)", "rgb(76, 144, 52)", "rgb(36, 44, 152)", "rgb(96, 244, 12)"]

let displayColor = document.getElementById("color")

function changeColor() {
    let randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber]
    displayColor.textContent = colors[randomNumber];
    displayColor.style.color = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}