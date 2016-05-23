exports.Message = function(to, sender, messageText){
  this.to = to;
  this.sender = sender;
  this.messageText = messageText;
}

exports.Message.prototype.displayEmail = function(){
  return "Dear " + this.to + ", " + this.messageText + " Yours truely, " + this.sender;
}
