function main() {
    let n = parseInt(readLine());
    // when using Number.toString() - radix/base is passed in
    let binNum = n.toString(2).split("");
    let max = 0;
    let counter = 0;
    binNum.forEach((num, i, a)=>{
        if(num == "1") {
            counter ++;
            if(counter > max) max=counter;
        }else{
            counter = 0;
        } 
    })
    console.log(max);
}