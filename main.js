let alphabetLetters = ["a", "b", "c", "d", 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let secretKey = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
let previousSecretKey;

let keyPressed;

let contentCreate;


let div = document.querySelector("div");



document.body.addEventListener("keyup", function(event){
    
    keyPressed = event.key;
    
    if (keyPressed === secretKey) {
        //when you press the secret key
        contentCreate = document.createElement("h2");

        contentCreate.textContent = "You have fount the Secret Key!!! -----> " + secretKey;
        div.appendChild(contentCreate);

        //to notify that the game continues
        contentCreate = document.createElement("h1");

        contentCreate.textContent = "The Secret Key has changed! We need your help to find it!";
        div.appendChild(contentCreate);

        //to change the secret key
        previousSecretKey = secretKey;
        secretKey = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

        //to make the secret key different each time
        do {
            secretKey = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
        } while (previousSecretKey === secretKey);

    }
    else {
        contentCreate = document.createElement("h3");

        contentCreate.textContent = "You pressed \"" + keyPressed + "\", but unfortunately it wasn't the secret key...";
        div.appendChild(contentCreate);
    }
});

