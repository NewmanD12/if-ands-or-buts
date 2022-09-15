let pincode = '1234'

const prompt = require('prompt-sync')({sigint: true});

let user_passcode = prompt('Enter your passcode: ');

if (user_passcode === pincode){
    console.log('Success!')
} else{
    console.log('Failure')
}  