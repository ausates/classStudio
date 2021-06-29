let CrewCandidate = require('./CrewCandidate');

let crewCandidate1 = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let crewCandidate2 = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let crewCandidate3 = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);

crewCandidateArr = [crewCandidate1, crewCandidate2, crewCandidate3]

for (let i=0; i < crewCandidateArr.length; i++){
  console.log(`${crewCandidateArr[i].name} earned an average test score of ${crewCandidateArr[i].average()}% and has a status of ${crewCandidateArr[i].status()}.\n`)
}

// play around

let counter = 0;

//just to get out of Probationary

// while (crewCandidate3.status() === 'Probationary'){
//   crewCandidate3.addScore(100);
//   counter += 1;
// }

// to get to accepted

while (crewCandidate3.status() !== 'Accepted'){
  crewCandidate3.addScore(100);
  counter += 1;
}

console.log(`It took ${counter} perfect scores to get to ${crewCandidate3.status()}.`)

// console.log(crewCandidate1.scores)
// console.log(crewCandidate1.average())
// crewCandidate1.addScore(100)
// console.log(crewCandidate1.scores)

// console.log(crewCandidate1.average())