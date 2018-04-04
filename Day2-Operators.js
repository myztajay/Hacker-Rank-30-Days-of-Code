    // Write your code here 
    let tipAmount = mealCost * (tipPercent/100);
    let taxAmount = mealCost * (taxPercent/100);
    
    console.log(`The total meal cost is ${ Math.round(mealCost+tipAmount+taxAmount) } dollars.`)

    // Use console.log() to print to stdout