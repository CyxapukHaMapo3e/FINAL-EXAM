public with sharing class OrderController {
   
    @AuraEnabled(cacheable=true)
    public static List<Order__c> getOrders(){
        return [SELECT Name, Account__c, Payment_Due_date__c, Total_Amount__c FROM Order__c];    
    }
}
