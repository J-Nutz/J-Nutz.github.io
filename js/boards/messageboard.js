function MessageBoard()
{
  this.pinnedMsgs = new Array();
  this.todaysMsgs = new Array();
  this.weeklyMsgs = new Array();

  this.addMessage = function(msg)
  {
    this.todaysMsgs.push(new Message(msg));
  };

  this.render = function()
  {
    this.addMessage("Update #1");
    this.addMessage("Update #2");

    for(var i = 0; i < this.todaysMsgs.length; i++)
    {
      var msg = this.todaysMsgs[i];
      var messagesList = document.getElementById("messagesList");

      messagesList.insertBefore(msg.getMessage(), messagesList.firstChild);
      msg.applyStyle();
    }
  };
}
