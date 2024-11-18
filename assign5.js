let employees =[{"eid":1, "ename":"Emmi","gender":"Female"},
    {"eid":999,"ename":"Becca","gender":"Female"}]
let male_count=0;
let female_count=0;
for(let emp of employees){
    if(emp.gender ==="male"){
        male_count++;
    }else{
        female_count++;
    }
}
console.log("No of male Employees:"+male_count)
console.log("No of female Employees:"+female_count)