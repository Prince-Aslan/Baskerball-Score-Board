let homeScore = document.getElementById("home-score")
let guestScore =document.getElementById("guest-score")
let h_count = 0
let g_count = 0

function h_addOne() {
    // this add 1 to the home score 
    h_count += 1
    homeScore.textContent = h_count

}

function h_addTwo() {
    // this add 2 to the home score 
    h_count += 2
    homeScore.textContent = h_count

}

function h_addThree() {
    // this add 3 to the home score 
    h_count += 3
    homeScore.textContent = h_count

}


function g_addOne() {
    // this add 1 to the guest score 
    g_count += 1
    guestScore.textContent = g_count
}

function g_addTwo() {
     // this add 2 to the guest score 
    g_count += 2
    guestScore.textContent = g_count
}

function g_addThree() {
     // this add 3 to the guest score 
    g_count += 3
    guestScore.textContent = g_count

}