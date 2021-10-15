public class OrderFactory {
	
    public static void createOrders(Integer count){
        
        List<Order__c> orders = new List<Order__c>();
        List<List<Account>> accounts = [FIND 'Test' IN Name FIELDS RETURNING Account(ID)];

        Integer countOfAccounts = accounts[0].size();
        Integer currentNumOfAccount = 0;
        
        for(Integer i = 0; i < count; i++){

            Order__c newOrder = new Order__c();

            newOrder.Name = 'Order ' + (i+1);
            newOrder.Total_Amount__c = (Integer)(Math.random()*1000);
            newOrder.Payment_Due_date__c = generateRandomDate();
    
            if(currentNumOfAccount >= countOfAccounts){
              currentNumOfAccount = 0;  
            }
            newOrder.Account__c = accounts[0][currentNumOfAccount].ID;
            currentNumOfAccount++;
            
            orders.add(newOrder);
        }
        
        insert(orders);
    }
    
    private static Date generateRandomDate(){
        Date today = Date.today();
        return today.addDays((Integer)(Math.random()*100));
    }
}