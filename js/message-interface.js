var Message = require('./../js/message.js').Message;
$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var senderField = $('#sender').val();
    var messageField = $('#message').val();

    var newMessage = new Message(toField, senderField, messageField);
    $(".displayEmail").text(newMessage.displayEmail());
  });
});
