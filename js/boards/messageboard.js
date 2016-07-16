function MessageBoard()
{
  this.pinnedMsgs = [];
  this.todaysMsgs = [];
  this.weeklyMsgs = [];

  this.addMessage = function(msg)
  {
    this.todaysMsgs.push(new Message(msg));
    this.render();
  };

  this.updateMessage = function()
  {
    
  };

  this.render = function()
  {
    for(var i = 0; i < this.todaysMsgs.length; i++)
    {
      var msg = this.todaysMsgs[i];
      var messagesList = document.getElementById("messagesList");

      messagesList.insertBefore(msg.getMessage(), messagesList.firstChild);
      msg.applyStyle();
    }
  };
}
