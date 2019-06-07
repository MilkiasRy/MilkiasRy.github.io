"use strict"
window.onload=function(){
    document.getElementById('btn').onclick=createAccount;

    
}
function NewAccount(name,depo){
    var accname=name;
    var deposit=depo;
    var account={
        'getAccName':function(){
            return accname;
        },
        'getDeposit':function(){
            return deposit;
        },
        'setAccName':function(name){
            accname:name;
        },
        'setDeposit':function(depo){
            deposit:depo;
        }
        
    };
    return account;
}
 var listAccount=new Array();
 function createAccount(){
     var accName=document.getElementById('nam').value;
     var depo=document.getElementById('deposit').value;
     var acc=NewAccount(accName,depo);
     listAccount.push(acc);
     var output="";
     for(var i=0;i<listAccount.length;i++){
         output+="Account Name: "+ listAccount[i].getAccName()+ "  , Deposit: "+ listAccount[i].getDeposit()+ "\n";
     
     
        }
        document.getElementById('txt').value=output;
 }