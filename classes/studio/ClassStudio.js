//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addscore(newScore){
        this.scores.push(newScore);
    }

    average(){
        let total = 0;
        for(let i=0;i<this.scores.length;i++){
            total += this.scores[i];
        }
        return Math.round((total/this.scores.length)*10)/10;
    }

    status(){
       let avg = this.average();
        if(avg >=90){
            return "Accepted";
        }
        else if(avg >=80){
            return "Reserve";
        }
        else if(avg >=70){
            return "Probationary";
        }
        else{
            return "Rejected";
        }
    }

};

let bear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
let bird = new CrewCandidate("Merry Maltese",1.5,[93,88,97]);
let gator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

console.log(bear,"\n",bird,"\n",gator);

bear.addscore(83);
console.log(bear.scores);
console.log(bird.average());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`)
console.log(`${bird.name} earned an average test score of ${bird.average()}% and has a status of ${bird.status()}.`)
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.


let additionalTests = 0;
while(gator.average()<80){
    gator.addscore(100);
additionalTests++;
}

console.log(`It will take ${gator.name} ${additionalTests} additional tests to get reserve`)