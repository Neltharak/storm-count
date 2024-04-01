

let count = 0
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("previous-el")
let firstSave = false

function updateText(){
    countEl.textContent = count
}
function Increment(){
    count += 1
    updateText()
}

// let lap1 = 5.07
// let lap2 = 5.67
// let lap3 = 3.45
// let lapsCompleted = 0

// function lapCompleted(){
//     lapsCompleted++
//     document.getElementById("counter-el").innerText = lapsCompleted
// }

function save(){
    let previousEntries = ""
    if (firstSave)
     previousEntries += " - "
    else
    saveEl.textContent = `Previous entries : `
    previousEntries += count
    firstSave = true
    count = 0
    updateText()
    saveEl.textContent += previousEntries
}

function noffin(){
    
}