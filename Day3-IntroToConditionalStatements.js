function main() {
    var N = parseInt(readLine());
    //odd
    if(N % 2 === 1) return console.log('Weird');
    //evens 
    if(N > 20) return console.log('Not Weird');
    //evens with conditions
    if(N > 6) return console.log('Weird');
    else return console.log('Not Weird');    
}