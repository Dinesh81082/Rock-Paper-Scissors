let userscore = 0;
let compscore = 0;

let rock = document.getElementById("rock") 
let paper= document.getElementById("paper")
let scissor= document.getElementById("scissor")
let msg = document.getElementById("msg");
let us = document.getElementById("uS");
let cs= document.getElementById("cS");
let res = document.getElementById("reset");

let choices = document.querySelectorAll(".choice");

let compPlay = () =>{
    let arr=["rock","paper","scissor"];
    let random = Math.floor(Math.random()*3)
    // console.log(arr[random])
    return arr[random];
}

const showWinner=(e)=>{
   if(e == true){
    userscore++;
     msg.style.backgroundColor="green"
     us.innerText = userscore
     msg.innerText=`You win! `
   }
   else if(e != true){
    compscore++;
    msg.style.backgroundColor="red"
    cs.innerText = compscore;
     msg.innerText=`You lose! `
   }
}

const drawgame = ()=>{
    msg.innerText=`Draw`;
    msg.style.backgroundColor="white"
    msg.style.color="black"
}

const playgame=(userPlay)=>{
    console.log("user = ",userPlay)
    let comp = compPlay()
    console.log("comp = ",comp);
    if(userPlay == comp){
        drawgame();
    }
    else{
        let userwin = true;
       if(userPlay == "rock"){
        userwin= comp == "paper" ? false : true; 
       }else if(userPlay == "paper"){
        userwin = comp =="scissor" ? false : true;
       } else{
        userwin = comp == "rock" ? false : true;
       }
        showWinner(userwin);
       }
    }



choices.forEach(a => {
    a.addEventListener("click",()=>{
       let userPlay = a.getAttribute("id");
    //    console.log(userPlay);
       playgame(userPlay)
    })
});

res.addEventListener("click",()=>{
    let d = document.createElement("div")
    if(userscore > compscore){
        d.style.color="green"
        d.innerText=`You-${userscore} , Ai-${compscore}`
        document.getElementById("p").append(d)
    }
    else if(compscore > userscore){
        d.style.color="red"
        d.innerText=`You-${userscore} , Ai-${compscore}`
        document.getElementById("p").append(d)
    }
    else{
        d.style.color="white"
        d.innerText=`You-${userscore} , Ai-${compscore}`
        document.getElementById("p").append(d)
    }
      
        us.innerText="0";
        cs.innerText="0";
        userscore=0;
        compscore=0; 
        // document.getElementById("p").classList.remove("hide")
})



