function MessageBoard()
{
  this.addMessage = function(msg)
  {
    var message = document.createElement("p");
    var msgContent = document.createTextNode(msg);
    message.appendChild(msgContent);

    var messageContainer = document.getElementById("messagesDiv");
    messageContainer.appendChild(message);
  };

  this.render = function()
  {
    this.addMessage("Update #1");
    this.addMessage("Update #2");
  };
}
