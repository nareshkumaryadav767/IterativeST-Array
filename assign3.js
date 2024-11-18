let employees=[
    {eid:101,name:"Naresh",gender:"Male"},
    {eid:102,name:"Anil",gender:"Male"},
    {eid:103,name:"Chandra",gender:"Male"},
    {eid:104,name:"Kushal",gender:"Male"},
    {eid:105,name:"Nawaz",gender:"Male"},
    {eid:106,name:"Althaf",gender:"Male"}
]
let i=0;
while(i<= employees.length-l){
    if(employees[i].gender ==='Male'){
        console.log(employees[i].name)
}
i++;
}