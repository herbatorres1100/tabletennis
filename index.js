let resetEl = document.getElementById("reset-el")
let countEla = document.getElementById("player-el-a")
let countElb = document.getElementById("player-el-b")

let countA = 0
let countB = 0
let countNum = 0

function playera() {
    countA += 1
    countEla.innerHTML = countA
}

function playerb() {
    countB += 1
    countElb.innerHTML = countB
}
function reset() {
    countNum ++
    resetEl.textContent = "Games Played: " + countNum
    countEla.textContent = 0
    countA = 0
    countElb.textContent = 0
    countB = 0
}

function newset(){
    reset()
    countNum = 0
    resetEl.textContent = "Games Played: " + countNum
}
