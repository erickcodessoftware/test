const hungerDIV = document.getElementById("statusHunger")
const happinesDIV = document.getElementById("statusHappines")
const energyDIV = document.getElementById("statusEnergy")

let hunger = 60;
let happines = 50;
let energy = 80

function updateStatus(){
    hungerDIV.innerHTML = hunger;
    happinesDIV.innerHTML = happines;
    energyDIV.innerHTML = energy;
}

function feedPet(){
    hunger += 10;
    hunger = limit(hunger);
    updateStatus();
}

function playPet(){
    happines += 10;
    energy -= 5;
    hunger -= 10;
    happines = limit(happines);
    energy = limit(energy);  
    hunger = limit(hunger);  
    updateStatus();
}

function sleepPet(){
    energy += 20;
    hunger -= 15;
    energy = limit(energy);
    hunger = limit(hunger);
    updateStatus();
}

function showerPet(){
    happines += 5;
    happines = limit(happines);
    updateStatus();
}

function limit(date){
    if(date > 100) date = 100;
    if(date < 0) date = 0;
    return date
}

function decreaseStatus() {
    hunger--;
    energy--;
    happines--;
    hunger = limit(hunger);
    energy = limit(energy);
    happines = limit(happines);
    updateStatus();
}

updateStatus();

setInterval(decreaseStatus, 5000);
