@isTest 
public class OrderFactoryTest {
	
    @isTest static void createOrdersTest(){
        List<Order__c> before = [SELECT ID FROM Order__c];
        OrderFactory.createOrders(1);
        List<Order__c> after = [SELECT ID FROM Order__c];
        System.assert(after.size()>before.size());
    }
    
    @isTest static void generateRandomDateTest(){
        Date dateExist = OrderFactory.generateRandomDate();
        System.assert(Date.today() < dateExist);
    }
    
}