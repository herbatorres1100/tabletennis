let resetEl = document.getElementById("reset-el")
let countEla = document.getElementById("player-el-a")
let countElb = document.getElementById("player-el-b")

let countA = 0
let countB = 0

function playera() {
    countA += 1
    countEla.innerHTML = countA
}

function playerb() {
    countB += 1
    countElb.innerHTML = countB
}
function reset() {
    let countStrA =  " 1 "
    resetEl.textContent += countStrA
    countEla.textContent = 0
    countA = 0
    
    let countStrB = ""
    resetEl.textContent += countStrB
    countElb.textContent = 0
    countB = 0
}

function newset(){
    location.reload()
}


