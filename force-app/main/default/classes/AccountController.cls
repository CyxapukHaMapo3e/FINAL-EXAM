public with sharing class AccountController {
    
	@AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){

        List<Account> accountList = new List<Account>();

        for(Account acc : [SELECT ID, Name, (SELECT ID FROM Orders__r) FROM Account]){ 
            if(!(acc.Orders__r.isEmpty())){
                accountList.add(acc);
            }
        }   
        
        return accountList;
    } 

}