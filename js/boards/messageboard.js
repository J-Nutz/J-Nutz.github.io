function MessagesBoard()
{
  this.addMessage = function(msg)
  {
    var newMessage = document.createElement("p");
    var msgContent = document.createTextNode(msg);
    newMessage.appendChild(msgContent);

    var messageContainer = document.getElementById("messagesDiv");
    messageContainer.appendChild(newMessage);
  };

  this.render = function()
  {
    this.addMessage("Update #1");
    this.addMessage("Update #2");
  };
}

var poop = function()
{
  console.log("NAICE!");
}
