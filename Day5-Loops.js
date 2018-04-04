function main() {
    var n = parseInt(readLine());
    let multiple = 1;    
    function createMultiples(num){
        if(multiple > 10) {
            multiple = 1;
            return
        } 
        console.log(`${n} x ${multiple} = ${n*multiple}`)
        multiple += 1;
        return createMultiples(n);
    }  
    createMultiples(n);
}