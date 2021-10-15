public with sharing class AccountController {
    
	@AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return [SELECT ID, Name, (SELECT ID, Name FROM Orders__r) FROM Account];    
    } 
}