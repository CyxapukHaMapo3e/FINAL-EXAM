@isTest
private class AccountFactoryTest {
	
    @isTest static void createAccountsTest(){
        List<Account> before = [SELECT ID FROM Account];
        AccountFactory.createAccounts(1);
        List<Account> after = [SELECT ID FROM Account];
        System.assert(after.size()>before.size());
    }
    
    @isTest static void generateRandomNameTest(){
        String name;
        for(Integer i = 0; i<100; i++){
        name = AccountFactory.generateRandomName();        
        System.assert(String.isNotEmpty(name));
        }
        
    }
    
}