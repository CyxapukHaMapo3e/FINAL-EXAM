@isTest
private class OrderControllerTest {
    
  	@TestSetup
	static void createTestData() {
    	Account acc = TestDataFactory.createAccount(true);
    	Order__c ord = TestDataFactory.createOrder(true, acc.Id);
	}
	
    @isTest static void getAccountsTest(){
        createTestData();
        List<Order__c> orderList = new List<Order__c>(OrderController.getOrders());
        System.assert(orderList.size()>1);
    }
}