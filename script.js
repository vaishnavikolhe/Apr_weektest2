var empArray = [
    {id:1,name:"john",age:18,profession:"developer"},
    {id:2,name:"jack",age:20, profession:"developer"},
    {id:3,name:"karen", age:19,profession:"admin"}
]
function displayEmp(arr){
    const ul=document.getElementById("list");
    ul.id="list";
    ul.innerHTML="";
    for(let i=0;i<arr.length;i++){
    const li = document.createElement("li");
    li.id="list-item";
    let spanId=document.createElement("span");
    let spanName=document.createElement("span");
    let spanProf=document.createElement("span");
    let spanAge=document.createElement("span");
    spanId.innerText=i+1;
    spanName.innerText="Name : "+arr[i].name;
    spanProf.innerText="Profession: "+arr[i].profession;
    spanAge.innerText="Age:"+arr[i].age;
    li.appendChild(spanId);
    li.appendChild(spanName);
    li.appendChild(spanProf);
    li.appendChild(spanAge);
    ul.appendChild(li);
 }

}
displayEmp(empArray);
function filterEmp(arr){
    const select=document.getElementById("select1");
    var filterArray=empArray
    if(select.value=="profession"){
        
        alert("Select a profession before clicking the button");
        displayEmp(filterArray)
    }
    else {
        filterArray=arr.filter((element)=>{
            if(select.value==element.profession){
                return element;
            }
        })

    }
    displayEmp(filterArray)
}
function addUser(){
    
    let name=document.getElementById("name");
    let prof=document.getElementById("profession");
    let age=document.getElementById("age");
   if(name.value!=""&&prof.value!=""&&age.value!=""){
     let newObj={
        name:name.value,
        profession:prof.value,
        age:age.value
    }
    empArray.push(newObj);
    name.value="";
    prof.value="";
    age.value="";
}
else{
    alert("Enter respective values");
}
    
    displayEmp(empArray);
   
}
