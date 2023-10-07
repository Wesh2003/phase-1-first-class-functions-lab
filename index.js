// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (names) {
    let first = [names[0], names[1]];
    return first;
}

const returnLastTwoDrivers = function(nam) {
    let last = [nam[nam.length-2], nam[nam.length-1]];
    return last;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let fare; 

function createFareMultiplier(don) {

    return function (fare) {
        fare * don
    }
} 
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function () {
    
    return fare * 2;

}

const fareTripler = function () {

    return fare * 3;
}

function selectDifferentDrivers(driv ,func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(driv);
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(driv);
    }

}