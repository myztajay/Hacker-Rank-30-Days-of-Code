function Person(initialAge=0){
    if(initialAge < 1){
        console.log('Age is not valid, setting age to 0.');
        this.age = 0;
    }else this.age =  initialAge;
    
    this.amIOld=function(){
        // Do some computations in here and print out the correct statement to the console
        if(this.age <= 12){
            console.log('You are young.');
        } else if (this.age >= 13 && this.age < 18){
            console.log('You are a teenager.');
        }else{
            console.log('You are old.');
      }
    };
   this.yearPasses=function(){
        // Increment the age of the person in here
        this.age += 1;
   };
}