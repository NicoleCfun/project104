// Create login Function here.
function Login() {
    player_name = document.getElementById("playername").value;
localStorage.setItem("player_name" , player_name);

window.location = "gamepage.html";

}
if(x ==y)
{
    alert("CONGRATULATIONS!!!"+ playername+" YOU GUESSED IT RIGHTV IN"
     + guess + " GUESS")
     guess= 1;
}
else if(x > y )
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");

}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")  
}

function playAgain(){
    y = Math.floor(math.random() * 10 + 1);
}