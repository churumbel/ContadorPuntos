let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let count2 = 0
let totalPoint1 = 0
let totalPount2 = 0
let countEl2 = document.getElementById("count-el-2")

function increment() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save() {
    totalPoint1 += count
    totalPount2 += count2
    let countStr = "Jugador 1 : " + totalPoint1 + " -  Jugador 2: "+ totalPount2
    saveEl.textContent = countStr
    countEl.textContent = 0
    countEl2.textContent = 0
    count = 0
    count2 = 0
}
