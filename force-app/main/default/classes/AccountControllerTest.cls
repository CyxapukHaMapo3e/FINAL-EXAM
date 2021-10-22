@isTest 
private class AccountControllerTest {
    
    @TestSetup
	static void createTestData() {
    	Account acc = TestDataFactory.createAccount(true);
    	Order__c ord = TestDataFactory.createOrder(true, acc.Id);
	}
	
    @isTest static void getAccountsTest(){
        createTestData();
        List<Account> accountList = new List<Account>(AccountController.getAccounts());
        System.assert(accountList.size()>1);
    }
}