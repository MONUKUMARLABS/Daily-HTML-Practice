function checkEligibility(age) {

    if (age >= 18) {

        return "Eligible";

    } else {

        return "Not Eligible";

    }

}

console.log(checkEligibility(25));
console.log(checkEligibility(16));