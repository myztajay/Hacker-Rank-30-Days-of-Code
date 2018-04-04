function factorial(n) {
    // Complete this function
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");
}
