@isTest 
public class OrderFactoryTest {
	
    @isTest static void createOrdersTest(){
        Test.startTest();
    	OrderFactory.createOrders(1);
    	Integer countDML = Limits.getDMLStatements();
		Test.stopTest();
		System.assertEquals(1, countDML);
    }
    
    @isTest static void generateRandomDateTest(){
        Date dateExist = OrderFactory.generateRandomDate();
        System.assert(Date.today() < dateExist);
    }
    
}