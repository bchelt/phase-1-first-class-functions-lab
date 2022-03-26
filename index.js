// Code your solution in this file!
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return y => x * y;
}

function fareDoubler(fare) {
    const multiplier = createFareMultiplier(2);
    return multiplier(fare);
}

function fareTripler(fare) {
    const multiplier = createFareMultiplier(3);
    return multiplier(fare);
}

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}