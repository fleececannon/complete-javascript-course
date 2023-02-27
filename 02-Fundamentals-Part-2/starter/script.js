///Playing with Objects
let chris = {
  firstName: "Chris",
  lastName: "Amani",
  jobsObject: [
    { company: "mongoDB", startDate: "23-jan-2000", industry: "Software" },
    { company: "Terra", startDate: "23-jan-20022", industry: "crypto" },
  ],
  people: {
    Greg:{fullName: "greg guy", city: "Los Angeles"},
    Bill:{fullNAme: "Bill Lewis", city: "San Francisco"},
  },

  //methods
  newJob(job) {
    this.jobsObject.push(job);
  },

  logAJob(x) {
    let job = null;

    this.jobsObject.forEach(function (currentJob) {
      if (currentJob.company === x) {
        job = currentJob;
      }
    });

    if (job) {
      console.log(job);
    } else {
      console.log(`Job not found for company "${x}".`);
    }
  },

  logAllJobs() {
    this.jobsObject.forEach(function (currentJob) {
      console.log(currentJob);
    });
  },
};


const {company, startDate, industry} = chris.jobsObject[0]
console.log(company, startDate, industry)

const key = Object.keys(chris.people.Greg);
const value = Object.values(chris.people.Greg);
const entry = Object.entries(chris.people.Greg);
console.log(key)

//*****************************************************************
//****************************************BMI********************* */ */

// let mark = {
//   fullName: "Mark Miller",
//   mass: "78",
//   height: "1.69",
//   calcBMI() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// let john = {
//   fullName: "John Smith",
//   mass: "92",
//   height: "1.95",
//   calcBMI() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(
//     `Mark's BMI (${mark.BMI}) is higher than John's BMIU (${john.BMI})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${john.BMI}) is higher than John's BMIU (${mark.BMI})!`
//   );
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  // console.log(bills[i], tips[i], totals[i])
  // console.log(i)
}
//   console.log("----------------------")
//   console.log(bills, tips, totals)

const calcAvg = function (arr) {
  let total = 0;
  for (let k = 0; k <= arr.length - 1; k++) {
    total = total + arr[k];
  }
  console.log(total);
  if ((k = arr.length - 1)) {
    return total / arr.length;
  }
};

console.log(calcAvg(tips));
