const openBtn=document.getElementsByClassName("openModel");
const closeBtn=document.getElementsByClassName("closeModel");
const modal=document.getElementById("modal");
let pScore=0;
let cScore=0;

openBtn.onclick=function(){
    modal.style.display="block";
    console.log("asawari");
}
closeBtn.onclick=function(){
    modal.style.display="none";
}

document.addEventListener("DOMContentLoaded",()=>{
    const choices = ["Rock", "Paper", "Scissors"];
    const option = document.querySelectorAll("img");
    const playerResult=document.getElementsByClassName("result-img");

    option.forEach((img)=>{
        img.addEventListener("click",(e)=>{
            const userChoice = e.target.id;
            console.log(userChoice);
            const playerchoice=e.target.img;
            const computerChoice = choices[Math.floor(Math.random() * 3)].toLowerCase();
            console.log(computerChoice);

            if(userChoice===computerChoice){
                console.log("asawari");
                window.location.assign("page4.html");

            }else if((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")){
                window.location.assign("page2.html")
                //playerResult=playerchoice; 
                pScore++;
                document.getElementsByClassName("your-score").textContent = pScore;  
            }
            else{
                window.location.assign("page3.html");
                cScore++;
                document.getElementsByClassName("computer-score").textContent = cScore;
            }
        })
    })
})




