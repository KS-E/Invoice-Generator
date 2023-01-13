const service= [
    {   
        serial:1,
        task : "Car Wash",
        price: 100,
       selected: false  
        
    },

    {   
        serial:2,        
        task : "Lawn Mowing",
        price: 200,
       selected: false  
    },

    {   
        serial:3,        
        task : "House Keeping",
        price: 450,
       selected: false
        
    },

]


let req_services= []; //array to hold the requested services
let cost_set =[]; //array to hold cost of each service
let total_cost=0;
const carWash =document.getElementById("wash");
const lawnMow =document.getElementById("mow");
const houseCleaning =document.getElementById("cleaning");
const send = document.getElementById("invoice");
let paymentDue =document.getElementById("sum-display");
let taskList =document.getElementById("task_list");
let costList =document.getElementById("cost_list");
let i
let value
 
carWash.addEventListener("click", ()=>{
   value= generateInvoice(1, service[0])
   paymentDue.textContent = `Rs ${total_cost}`; //total cost of services
    
})

lawnMow.addEventListener("click", ()=>{
  value= generateInvoice(2, service[1])   
paymentDue.textContent = `Rs ${total_cost}`; //total cost of services
})

houseCleaning.addEventListener("click", ()=>{
   value= generateInvoice(3, service[2])
paymentDue.textContent = `Rs ${total_cost}`; //total cost of services      
})

function generateInvoice(i,work){ //called on button click
    //  let n= i-1;
    work.selected = !work.selected
     if (work.selected === true){
            req_services.push(`${work.task}`);
            cost_set.push(`${work.price}`)
           // calculating the cost
          total_cost = add(total_cost , work.price)
          //displaying the list   
          taskList.textContent += `${work.task}\n `
          costList.textContent += `${work.price}\n`  
        //   let array=costList.textContent        //new line with each addition
        //  costList.textContent = array.join('\n')           
    } else { 
        //removing the task clicked
       let location = req_services.indexOf(work.task) //working!
       req_services.splice(location, 1)
       cost_set.splice(location, 1)
        total_cost = subtract ( total_cost ,work.price )  // removing the cost
        // displaying the updated list   
        taskList.textContent = ""
        costList.textContent = ""     
         for(let i=0; i<req_services.length;i++){
         taskList.textContent += ` ${req_services[i]}\n` 
         costList.textContent += `${cost_set[i]}\n`  
        //  let array=costList.textContent     //new line with each addition
        //  costList.textContent = array.join('\n')                  
      }                
    }
    return total_cost
}


function add(sum,cost){  //value of the total on function call
    sum += cost
    return sum
}

function subtract(sum,cost){  //value of the total on function call
    sum -= cost
    return sum
}


function reload (){  //called on "send invoice button"
    location.reload();
 }
 











