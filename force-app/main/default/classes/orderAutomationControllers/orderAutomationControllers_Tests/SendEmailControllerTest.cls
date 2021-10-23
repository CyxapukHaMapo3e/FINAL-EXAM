@isTest
private class SendEmailControllerTest {
    private static String body = 'This is a test body.';
    private static String subject = 'This is a test subject.';
    private static Id userId = UserInfo.getUserId();
    
    @isTest static void sendEmailWithOrderInfoPositiveTest(){
        Test.startTest();
    	SendEmailController.sendEmailWithOrderInfo(body, subject, userId);
    	Integer invocation = Limits.getEmailInvocations();
		Test.stopTest();

		System.assertEquals(1, invocation);
    }
    
    
    @isTest static void sendEmailWithOrderInfoNegativeTest(){
        Id negativeUserId;
        String exceptionMessage;
		try{
            SendEmailController.sendEmailWithOrderInfo(body, subject, negativeUserId);
        }catch (Exception exe){
         	exceptionMessage = 'An email should not be sent';
        }
        System.assertEquals(exceptionMessage, 'An email should not be sent');
    }
}