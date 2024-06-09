let imgs = document.querySelectorAll(".imgs");
let p = document.querySelector("#msg-container");
let user_score = 0;
let comp_score = 0;


let comp = document.querySelector("#comp-0");
let user = document.querySelector("#user-0");
let restart_btn = document.querySelector("#btn");


const genComp = ()=>{
    let choices = ["stone","paper","scissor"];
    let i = Math.floor(Math.random() * 3)
    return choices[i];
    
}

const playGame = (id)=>{
    console.log("id is : ",id)
    const compChoice = genComp()
  console.log(compChoice);
if(id == "stone" && compChoice == "stone" || 
id == "paper" && compChoice=="paper"||
id == "scissor" && compChoice=="scissor"
){
    p.innerText = `You and Comp generates ${id}`
    p.style.width = "230px"
    p.style.height = "50px"
    p.style.backgroundColor = "yellow"
    p.style.color = "red";
    p.style.fontWeight = "bold"

}else if(id == "stone" && compChoice == "paper" ||
    id == "scissor" && compChoice == "stone" ||
    id == "paper" && compChoice == "scissor"
 ){
    p.innerText = `You lost , Comp creates ${compChoice}` 
    p.style.width = "215px"
    p.style.height = "50px"
    p.style.backgroundColor = "red";
    p.style.color = "white";
    p.style.fontWeight = "bold"
    comp_score++
    comp.innerText = comp_score;

 }else{
    p.innerText = `You win , Comp creates ${compChoice}`;
    p.style.width = "215px"
    p.style.height = "50px"
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontWeight = "bold"
    user_score++
    user.innerText = user_score;

 }
 
 if(comp_score == 10 ){
    p.innerHTML = "<h2>Oops You Lost The Game..</h2>"
    p.style.width = "280px"
     p.style.height = "50px"
    

restart_btn.addEventListener("click",()=>{
       user.innerText = "0";
       comp.innerText="0";
       p.innerText = "Start again";
       p.style.backgroundColor = "blue";
       p.style.color = "white"
       p.style.height = "50px";
       p.style.width = "230px"
      

})
 } else if(user_score == 10){
    p.innerText ="Hurree..You win!"
        p.style.width = "380px"
        p.style.height = "50px";
        p.style.fontSize = "42px";


    restart_btn.addEventListener("click",()=>{
        user.innerText = "0";
        comp.innerText="0";
        p.innerText = "Start Again"
        p.style.backgroundColor = "blue";
        p.style.color = "white";
       })
}
}


imgs.forEach((img) => {
    img.addEventListener(("click"),()=>{
        const id = img.getAttribute("id")
        playGame(id)
         })
});
restart_btn.addEventListener("click",()=>{
    user.innerText = "0";
    comp.innerText="0";
    p.innerText = "Start again";
    p.style.backgroundColor = "blue";
    p.style.color = "white"
    p.style.height = "50px";
    p.style.width = "230px"
   })












