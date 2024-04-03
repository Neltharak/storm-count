
let userInput1
let userInput2
let contentEl
let headerEl
let hpEl
let playerCount = 0
let gameNumber = 1
let p1HP = 40
let p2HP = 40
let p3HP = 40
let p4HP = 40



function sanitizeInput(a)
{
return 0
}

// Forgive me good practice gods, i wanna move on
// Could not figure out how to pass arguments to functions from the HTML so i could just get just one function with the player number as an argument instead of whatever this is
// Code so moist it's a dark souls swamp, forgive me i level dex
// it works tho

function p1plusOne()
{
  let hpEl = document.getElementById("p1HPEl")
  console.log("Entered p1+1")
  p1HP++
  hpEl.innerText = p1HP
}

function p1minusOne()
{
  let hpEl = document.getElementById("p1HPEl")
  console.log("Entered p1-1")
  p1HP--
  hpEl.innerText = p1HP
}

function p1plusFive()
{
  let hpEl = document.getElementById("p1HPEl")
  console.log("Entered p1+1")
  p1HP+=5
  hpEl.innerText = p1HP
}

function p1minusFive()
{
  let hpEl = document.getElementById("p1HPEl")
  console.log("Entered p1+1")
  p1HP-=5
  hpEl.innerText = p1HP
}

function p2plusOne()
{
  let hpEl = document.getElementById("p2HPEl")
  console.log("Entered p2+1")
  p2HP++
  hpEl.innerText = p2HP
}

function p2minusOne()
{
  let hpEl = document.getElementById("p2HPEl")
  console.log("Entered p2-1")
  p2HP--
  hpEl.innerText = p2HP
}

function p2plusFive()
{
  let hpEl = document.getElementById("p2HPEl")
  console.log("Entered p2+1")
  p2HP+=5
  hpEl.innerText = p2HP
}

function p2minusFive()
{
  let hpEl = document.getElementById("p2HPEl")
  console.log("Entered p2+1")
  p2HP-=5
  hpEl.innerText = p2HP
}

function p3plusOne()
{
  let hpEl = document.getElementById("p3HPEl")
  console.log("Entered p1+1")
  p3HP++
  hpEl.innerText = p3HP
}

function p3minusOne()
{
  let hpEl = document.getElementById("p3HPEl")
  console.log("Entered p1-1")
  p3HP--
  hpEl.innerText = p3HP
}

function p3plusFive()
{
  let hpEl = document.getElementById("p3HPEl")
  console.log("Entered p1+1")
  p3HP+=5
  hpEl.innerText = p3HP
}

function p3minusFive()
{
  let hpEl = document.getElementById("p3HPEl")
  console.log("Entered p1+1")
  p3HP-=5
  hpEl.innerText = p3HP
}

function p4plusOne()
{
  let hpEl = document.getElementById("p4HPEl")
  console.log("Entered p1+1")
  p4HP++
  hpEl.innerText = p4HP
}

function p4minusOne()
{
  let hpEl = document.getElementById("p4HPEl")
  console.log("Entered p1-1")
  p4HP--
  hpEl.innerText = p4HP
}

function p4plusFive()
{
  let hpEl = document.getElementById("p4HPEl")
  console.log("Entered p1+1")
  p4HP+=5
  hpEl.innerText = p4HP
}

function p4minusFive()
{
  let hpEl = document.getElementById("p4HPEl")
  console.log("Entered p1+1")
  p4HP-=5
  hpEl.innerText = p4HP
}

function p4minusFive()
{
  let hpEl = document.getElementById("p4HPEl")
  console.log("Entered p1+1")
  p4HP-=5
  hpEl.innerText = p4HP
}

function initializeGame()
{
  console.log(`Entered initialize, playercount is ${playerCount}`)
  let newHtml = ""
  let i = 1
  
  contentEl.textContent = ""
  while (i <= playerCount)
  {
    console.log("Entered while") 
    newHtml += `<div class='gamebuttons'>
    <button onclick="p${i}minusOne()">-</button>
    <button onclick="p${i}plusOne()">+</button>
    <div id="p${i}HPEl">40</div>
    <button onclick="p${i}minusFive()">-5</button>
    <button onclick="p${i}plusFive()">+5</button>
    </div>`
    i++ // Could not figure out how to import the above HTML from another file or template so it's just there. 
  }
  console.log ("exited while")
  console.log(newHtml)
  headerEl.textContent = `Game ${gameNumber}`
  contentEl.innerHTML = newHtml
}

// Same thing here, just tried to get something unique handling everything and couldnt figure out how to get arguments. 
function twoPlayers()
{
  playerCount = 2
  initializeGame()
}

function threePlayers()
{
  playerCount = 3
  initializeGame()
}

function fourPlayers()
{
  playerCount = 4
  initializeGame()
}

function fivePlayers()
{
  headerEl.textContent = "No. Eat one player instead."
}

contentEl = document.getElementById("divvy")
headerEl = document.getElementById("header")
