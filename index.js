// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(driverList, nameString) {
    return driverList.filter(function (driverItem) {
        return (driverItem === nameString) || (driverItem.toLowerCase() === nameString.toLowerCase()) 
    })
}
// console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(driverList, nameString) {
    return driverList.filter(function (driverItem) {
        return driverItem[0] === nameString[0]
    })
}

function matchName(driverList, nameString) {
    return driverList.filter(function (driverItem) {
        return driverItem.name === nameString
    })
}
