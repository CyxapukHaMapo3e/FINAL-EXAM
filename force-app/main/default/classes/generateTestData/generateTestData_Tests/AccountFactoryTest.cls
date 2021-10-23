@isTest
private class AccountFactoryTest {
	
    @isTest static void createAccountsTest(){
        Test.startTest();
    	AccountFactory.createAccounts(1);
    	Integer countDML = Limits.getDMLStatements();
		Test.stopTest();
		System.assertEquals(1, countDML);
    }
    
    @isTest static void generateRandomNameTest(){
        String name;
        for(Integer i = 0; i<100; i++){
        name = AccountFactory.generateRandomName();        
        System.assert(String.isNotEmpty(name));
        }
        
    }
    
}