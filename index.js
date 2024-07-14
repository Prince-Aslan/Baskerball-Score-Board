let homeScore = document.getElementById("home-score")
let guestScore =document.getElementById("guest-score")
let h_count = 0
let g_count = 0

function h_addOne() {
    h_count += 1
    homeScore.textContent = h_count

}

function h_addTwo() {
    h_count += 2
    homeScore.textContent = h_count

}

function h_addThree() {
    h_count += 3
    homeScore.textContent = h_count

}


function g_addOne() {
    g_count += 1
    guestScore.textContent = g_count
}

function g_addTwo() {
    g_count += 2
    guestScore.textContent = g_count
}

function g_addThree() {
    g_count += 3
    guestScore.textContent = g_count

}