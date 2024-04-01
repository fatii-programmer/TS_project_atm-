import inquirer from "inquirer"

interface useranswers{
    userID:string;
    userpin: number;
    accounttype: string;
    transactionType: string;
    amount:number;
}

async function startatmconversation() {
    console.log("Welcome To Islamic Bank:");


const answers:useranswers =await inquirer.prompt([
{
    type:"input",
    name:"userid",
    message:"kindly enter your user ID:",
},
{
    type:"number",
    name:"userpin",
    message:"kindly enter your user pin:",
},
{
    type:"list",
    name:"accountType",
    choices:["current","saving"],
    message:"select your accountType:",
},
{
    type:"list",
    name:"transactionType",
    choices:["fast cash withdrawal","normal withdrawal"],
    message:"select your transactionType:",
    when(answers){
        return answers.accountType;
    }
},
{
    type:"list",
    name:"amount",
    choices:[1000,2000,5000,10000,20000],
    message:"select your amount:",
    when(answers){
        return answers.transactionType === "fast cash withdrawal";
    }
},
{
    type:"number",
    name:"amount",
    message:"enter  your amount:",
    when(answers){
        return answers.transactionType === "normal withdrawal";
    }
},
])

if(answers.userID && answers.userpin){
    console.log("processing your request....");
    const balance = Math.floor(Math.random()*10000000);
    console.log("your current balance is:pkr", balance.toLocaleString());
const enteramount = answers.amount;

if(balance >= enteramount){
    const remainingbalance = balance - enteramount;
    console.log("tranction is sucessfull. your remaining balance is:pkr",
    remainingbalance.toLocaleString());
}else{
    console.log("insufficient balance. please try again with a lower amount.");
}
}

}
startatmconversation();