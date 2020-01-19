function makeAccount(starrting){
    let total = starrting;
    return{
        add(amt){
            total += amt
            return `${amt} added` 
        },
        subtract(amt){
            total -= amt
            return `${amt} subtracted`
        },
        checkBalance(){
            return total
        },
    }
}

function savingAccount(applicant){
    this.name = applicant
    this.balance = 0
    this.showBalance = function(){
            return `${balance}`
        },
    this.depositFunds = function(num){
            while (num < 0){
                return "Please include a deposit amount that is greater than 0"
            }
            this.balance += num
            return `${num} deposited`
        },
     this.withdrawlFunds = function(num){
            while(num > this.balance){
                return 'Insufficient Funds'
            }
            this.balance -= num
            return `${num} withdrawn`
        }

} 

function Phone(number) {
  this.phoneNumber = number,
  this.contact = [],
  this.addContact = function({name:x,phoneNumber:y}){
    if(x.length >= 0 && y.length === 10 ){
      this.contact.push({name:x,phoneNumber:y})
        return `${this.name} successfully added`
    }else{
        return`invalid`
  }
  }
 this.removeContact = function(x){
   for(let i = 0; i <= this.contact.length; i++){
   if(this.contact[i].name === x){
     this.contact.splice(i,1);
     return `${x} deleted`
   }else{
     return `contact not found`
   }  
 }
}
  this.call = function(x){
    if(Number(x)){
    while(x.length === 10 ){
       for(let i = 0; i <= this.contact.length; i++){
          if(this.contact[i].phoneNumber === x){
       return `Calling ${this.contact[i].name}`
   }
       }
       return `invalid`
    }
    }else{
    for(let i = 0; i <= this.contact.length; i++){
        if(this.contact[i].name === x){
          return `Calling ${this.contact[i].name}`
    }
    }
    return `Calling ${x}`
    } 
  }
}

module.exports = {
  // makeAccount,
  // SavingsAccount
  // Phone
  // AppleiPhone
  // Person
  // Student
  // GraduateStudent
  // Professor
  // Doctor
};
