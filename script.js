const capcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector(".input-area input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-text");


let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha(){
    for (let i = 0; i < 6; i++) {
        //console.log(Math.random()* allCharacters.length);
       const randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
       //console.log(randomChar);
       capcha.innerText += ` ${randomChar}`;
        
    }

}
getCaptcha();

reloadBtn.addEventListener("click", ()=>{
    capcha.innerText = "";
    getCaptcha();
});

checkBtn.addEventListener("click", e =>{
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputValue = inputField.value.split('').join(" ");
    if(inputValue == capcha.innerText)
    {
         statusTxt.style.color = "green";
         statusTxt.innerText = "Nice! You don't appear to be a robot.";
         setTimeout(()=>{
           removeAll(); 
           getCaptcha();
         }, 2000);
    }
    else
    {
        statusTxt.style.color = "red";
        statusTxt.innerText = "Captcha not matched. Please try again!";
    }
});

function removeAll()
{
    inputField.value = "";
    capcha.innerText = "";
    statusTxt.style.display = "none"
}

  



