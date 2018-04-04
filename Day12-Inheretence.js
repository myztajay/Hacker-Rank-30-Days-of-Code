class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
     constructor(firstName, lastName, identification, scores){
        super(firstName, lastName, identification)
        this.scores = scores;
    }
    
    calculate(){
        let sum = 0;
        let divisor = this.scores.length;
        this.scores.forEach((score)=>{
            sum += score;
        });
        if(sum/divisor < 40) return "T";
        else if(sum/divisor < 55) return "D";
        else if(sum/divisor < 70) return "P"; 
        else if(sum/divisor < 80) return "A"; 
        else if(sum/divisor < 90) return "E"; 
        else if(sum/divisor <= 100) return "O";
    }
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
}