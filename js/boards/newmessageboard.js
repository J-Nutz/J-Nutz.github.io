function NewMessageBoard()
{
  this.pinnedMsgs = [];
  this.todaysMsgs = [];
  this.weeklyMsgs = [];

  this.addMessage = function(msg)
  {
    this.todaysMsgs.push(new NewMessage(msg));
    this.render();
  };

  this.updateMessage = function()
  {

  };

  this.render = function()
  {
    for(var i = 0; i < this.todaysMsgs.length; i++)
    {
      var message = this.todaysMsgs[i];
      var messagesList = document.getElementById("messagesList");

      message.setIDS("msg" + i);
      messagesList.appendChild(message.msgContainer);
      message.render();
    }
  };
}
