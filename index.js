let countElHome = document.getElementById("count-el-home");
let countElGuest = document.getElementById("count-el-guest");

let countHome = 0;
let countGuest = 0;

function incrementOneHome() {
    countHome += 1;
    countElHome.textContent = countHome;
} 
function incrementTwoHome() {
    countHome += 2;
    countElHome.textContent = countHome;
}
function incrementThreeHome() {
    countHome += 3;
    countElHome.textContent = countHome;
}

function decrementOneHome() {
    countHome -= 1;
    countElHome.textContent = countHome;
} 
function decrementTwoHome() {
    countHome -= 2;
    countElHome.textContent = countHome;
}
function decrementThreeHome() {
    countHome -= 3;
    countElHome.textContent = countHome;
}


function incrementOneGuest() {
    countGuest += 1;
    countElGuest.textContent = countGuest;
} 

function incrementTwoGuest() {
    countGuest += 2;
    countElGuest.textContent = countGuest; 
}

function incrementThreeGuest() {
    countGuest += 3;
    countElGuest.textContent = countGuest;
}

function decrementOneGuest() {
    countGuest -= 1;
    countElGuest.textContent = countGuest;
} 

function decrementTwoGuest() {
    countGuest -= 2;
    countElGuest.textContent = countGuest; 
}

function decrementThreeGuest() {
    countGuest -= 3;
    countElGuest.textContent = countGuest;
}

function resetBoth() {
    countHome = 0;
    countElHome.textContent = countHome;
    countGuest = 0;
    countElGuest.textContent = countGuest;
}