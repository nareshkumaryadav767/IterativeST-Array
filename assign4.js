//print no of even numbers from given array
let numbers =[4,1,41,31,14,378,71,98,141]
let even_count=0;
for(let num of numbers){
    if(num%2 ===0){
        even_count++;
    }
}
console.log(even_count)