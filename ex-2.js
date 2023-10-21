//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const filteredArray = array.filter(operation);
  return filteredArray.length >= 5;
};

function checkScore(score) {
  return score > 70;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
let scoreRoom3Result = atLeastFive(studentScoresRoom2, checkScore);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
