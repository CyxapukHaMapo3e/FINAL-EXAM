public with sharing class SendEmailController {
    
    
    @AuraEnabled(cacheable=true)
    public static void sendEmailWithOrderInfo(String body,  String subject, String userId){

        List<User> userList = [SELECT Email FROM User WHERE ID = :userId];

        try{
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[]{userList[0].Email};
            mail.setToAddresses(toAddresses);
            mail.setSubject(subject);
            mail.setHtmlBody(body);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }

    }
}
