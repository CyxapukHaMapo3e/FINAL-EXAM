public class AccountFactory {
    
	@TestVisible private static final String NAME1 = 'Test Harry';
    @TestVisible private static final String NAME2 = 'Test Amelia';
    @TestVisible private static final String NAME3 = 'Test Jack';
    @TestVisible private static final String NAME4 = 'Test Lily';
    @TestVisible private static final String NAME5 = 'Test Isabella';
    @TestVisible private static final String NAME6 = 'Test Jacob';
    @TestVisible private static final String NAME7 = 'Test William';
    
    public static void createAccounts(Integer count){

        List<Account> accounts = new List<Account>();
        
        for(Integer i = 0; i < count; i++){
    	Account newAccount = new Account();
    	newAccount.Name = generateRandomName();
    	accounts.add(newAccount);
        }
        
        insert(accounts);
    }
    
    @TestVisible private static String generateRandomName(){

        Integer random = (Integer)(Math.random()*7.0);
        String result; 
        
        switch on random {
            when 1{
                result = NAME1;
            }
            when 2{
                result = NAME2;
            }
            when 3{
                result = NAME3;
            }
            when 4{
                result = NAME4;
            }
            when 5{
                result = NAME5;
            }
        	when 6 {
                result = NAME6;
            }
            when 7{
                result = NAME7;
            }
        }
        return result;
        
    }
    
}