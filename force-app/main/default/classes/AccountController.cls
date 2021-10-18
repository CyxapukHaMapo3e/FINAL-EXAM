public with sharing class AccountController {
    
	@AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return [SELECT ID, Name, (SELECT ID, Name FROM Orders__r) FROM Account];    
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> findByName(String searchKey){
        String name = '%'+searchKey +'%';
        return [SELECT ID, Name
                FROM Account
                WHERE Name 
                like:name
                LIMIT 50];
    }
    
}