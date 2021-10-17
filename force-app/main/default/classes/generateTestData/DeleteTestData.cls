public with sharing class DeleteTestData {

    public static void deleteAllTestData(){

        List<List<Account>> accounts = [FIND 'Test' IN Name FIELDS RETURNING Account(ID)];
		List<List<Order__c>> orders = [FIND 'Order' IN Name FIELDS RETURNING Order__c];

        delete(orders[0]);
		delete(accounts[0]);
		
    }   
}
