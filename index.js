function play() {
    // 1. Generate the random numbers
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    // 2. Select the images from your HTML
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    // 3. Update the source (fix the .src typo)
    image1.src = "Assets/dice" + randomNumber1 + ".png";
    image2.src = "Assets/dice" + randomNumber2 + ".png";

    // 4. THE FIX: Change the visibility from 'hidden' to 'visible'
    image1.style.visibility = "visible";
    image2.style.visibility = "visible";
    
    // 5. Update the text to show who won
    var title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        title.innerHTML = "Player 2 Wins! 🚩";
    } else {
        title.innerHTML = "Draw!";
    }
}