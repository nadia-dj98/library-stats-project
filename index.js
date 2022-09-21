let saveEl = document.getElementById("save-el")
let borrowEl = document.getElementById("borrow-el")
let borrow = 0
let giveBackEl = document.getElementById("return-el")
let giveBack = 0

function incrementBorrow() {
    borrow += 1
    borrowEl.textContent = borrow
 }

function incrementReturn() {
    giveBack += 1
    giveBackEl.textContent = giveBack
    
}

function save() {
    let borrowStr = borrow + " & "
    saveEl.textContent += borrowStr
    borrowEl.textContent = 0
    borrow = 0
    
    let giveBackStr = giveBack + " - "
    saveEl.textContent += giveBackStr
    giveBackEl.textContent = 0
    giveBack = 0 
}
