let r=10,human=0,computer=0,p2;

/////////////////////// Each Iteration Logic /////////////////////////////////////
function xyz(p1){
    let num=Math.ceil(Math.random()*3)
    if(num==1){
        p2=document.getElementsByClassName("c")[0].innerHTML="✊";
    }
    else if(num==2){
        p2=document.getElementsByClassName("c")[0].innerHTML="✋";
    }
    else{
        p2=document.getElementsByClassName("c")[0].innerHTML="✌";
    }

    if(p1!=p2){
        if(p1=='✊' &&  p2=='✌'){
            human++;
            document.getElementsByClassName("s1")[0].innerHTML=human
        }
        else if(p1=='✊' && p2=='✋'){
            computer++;
            document.getElementsByClassName("s2")[0].innerHTML=computer
        }
        else if(p1=='✋' && p2=='✊'){
            human++;
            document.getElementsByClassName("s1")[0].innerHTML=human
        }
        else if(p1=='✋' && p2=='✌'){
            computer++;
            document.getElementsByClassName("s2")[0].innerHTML=computer
        }
        else if(p1=='✌' && p2=='✋'){
            human++;
            document.getElementsByClassName("s1")[0].innerHTML=human
        }
        else{
            computer++;
            document.getElementsByClassName("s2")[0].innerHTML=computer
        }
    }

    
}

////////////////////////| Stone/Paper/Scissor Logic |/////////////////////////////
function disp(x){
    console.log(r)
    let p1=document.getElementsByClassName("h")[0].innerHTML=x
    r--
    if(r>0){
        document.getElementsByClassName("text")[0].innerHTML="Chances Left: "+r
        // Function call for comparison (written above)
        xyz(p1)
    }
    else{
        document.getElementsByClassName("b1")[0].disabled=true
        document.getElementsByClassName("b2")[0].disabled=true
        document.getElementsByClassName("b3")[0].disabled=true
        document.getElementById("again").style.display="block"
        if(human>computer){
            document.getElementsByClassName("text")[0].innerHTML="You WIN :)"
        }
        else if(computer>human){
            document.getElementsByClassName("text")[0].innerHTML="You LOSE :("
        }
        else{
            document.getElementsByClassName("text")[0].innerHTML="TIE :|"
        }
        r=0
        human=0
        computer=0
    }
}

/////////////////////////////// Play Again Logic /////////////////////////////////
function reset(){
    r=10
    document.getElementsByClassName("text")[0].innerHTML="Chances Left: 10"
    document.getElementsByClassName("h")[0].innerHTML="👦"
    document.getElementsByClassName("c")[0].innerHTML="🤖"
    document.getElementsByClassName("s1")[0].innerHTML="0"
    document.getElementsByClassName("s2")[0].innerHTML="0"
    document.getElementsByClassName("b1")[0].disabled=false
    document.getElementsByClassName("b2")[0].disabled=false
    document.getElementsByClassName("b3")[0].disabled=false
    document.getElementById("again").style.display="none"
}