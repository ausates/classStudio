class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    return this.scores.push(newScore);
  }
  average() {
    let totalScoreAmt = 0;
    let scoresPosted = this.scores.length;
    for (let i=0; i < (scoresPosted); i++){
      totalScoreAmt += this.scores[i];
    }

    let avg = Math.round((totalScoreAmt / scoresPosted)*10)/10;
    return avg;
  }

  status() {
    let score = this.average();
    if (score >= 90){
      return 'Accepted';
    } else if (score >= 80 && score < 90){
      return 'Reserve';
    } else if (score >= 70 && score < 80){
      return 'Probationary';
    } else if (score < 70){
      return 'Rejection'
    } else {
      return 'score out of possible range.'
    }

  }
}

module.exports = CrewCandidate;