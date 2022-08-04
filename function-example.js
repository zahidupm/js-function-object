/* function functionName(parameters) {
     function body 
     return
}

var returnValue = functiionName(parameters value); */

function getTotal(assignmment1, assignmment2, assignment3) {
    const total = assignmment1 + assignmment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignments = getTotal(58, 57, 60);
console.log(assignments);