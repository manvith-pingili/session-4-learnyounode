let result = 0;
//use for loop to add the numbers given as command-line arguments 
for(let i=2; i<process.argv.length; i++) {
     result += Number(process.argv[i]);
}

console.log(result);