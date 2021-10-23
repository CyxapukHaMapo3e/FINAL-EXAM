@isTest
public class TestDataFactory {
    
	public static Account createAccount(Boolean doInsert){
        Account acc = new Account();
        acc.Name = 'Test Account';
        if(doInsert){
            insert acc;
        }
        return acc;
    }
    
    public static Order__c createOrder(Boolean doInsert, Id accId){
        Order__c ord = new Order__c();
        ord.Account__c = accId;
        ord.Name = 'Order';
        ord.Total_Amount__c = (Integer)(Math.random()*1000);
        ord.Payment_Due_date__c = Date.today();
        if(doInsert){
            insert ord;
        }
        return ord;
    }
}