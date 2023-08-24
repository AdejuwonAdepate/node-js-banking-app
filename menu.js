
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome To My Banking App");
console.log("\n How can we help you today?");
console.log("\n 1. Create New Account");
console.log("\n 2. Deposit funds");
console.log("\n 3. Withdraw funds");
console.log("\n 4. Check Balance");
console.log("\n 5. Transfer Funds");
console.log("\n 6. Exit");

const ip = () => {
  return new Promise((resolve, reject) => {
    rl.question('\n Enter Your Choice : ', (ch) => {
      resolve(ch)
    })
  })
};

const start = async () => {
  while(true) {
    const choice = await ip()

    if(choice ==1){
      console.log(`Let's Help You Get Started`)
    }

    else if(choice ==2){
      console.log(`Kindly Enter The Amount You Wish To Deposit`)
    }

    else if(choice ==3){
      console.log(`Kindly Enter The Amount You Wish To Withdraw`)
    }

    else if(choice ==4){
      console.log(`Your Balance Would Be Sent To You Shortly`)
    }

    else if(choice ==5){
      console.log(`Enter Account Number You Wish to Transfer to`)
    }

    if(choice >= 6) {
      console.log ('Thank You For Banking With Us Today')
      process.exit()
    }
  }
}

start()