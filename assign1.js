let employees=[
    {eid:101,name:"Naresh",gender:"Male"},
    {eid:102,name:"Anil",gender:"Male"},
    {eid:103,name:"Chandra",gender:"Male"},
    {eid:104,name:"Kushal",gender:"Male"},
    {eid:105,name:"Nawaz",gender:"Male"},
    {eid:106,name:"Althaf",gender:"Male"}
]
for(let emp of employees){
    if(emp.gender =="Male"){
        console.log(emp)
    }
}