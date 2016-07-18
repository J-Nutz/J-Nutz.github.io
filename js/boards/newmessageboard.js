function NewMessageBoard()
{
  this.pinnedMsgs = [];
  this.todaysMsgs = [];
  this.weeklyMsgs = [];

  this.addMessage = function(msg, pin)
  {
    if (pin)
    {
      this.pinnedMsgs.push(new NewMessage(msg));
    }
    else
    {
      this.todaysMsgs.push(new NewMessage(msg));
    }

    this.render();
  };

  this.updateMessage = function()
  {

  };

  this.render = function()
  {
    this.messagesList = document.getElementById("messagesList");

    for(var pml = 0; pml < this.pinnedMsgs.length; pml++)
    {
      var pmlMsg = this.pinnedMsgs[pml];

      pmlMsg.setIDS("Pinned" + pml);
      this.messagesList.appendChild(pmlMsg.msgContainer);
      pmlMsg.render();
    }

    for(var tml = 0; tml < this.todaysMsgs.length; tml++)
    {
      var tmlMsg = this.todaysMsgs[tml];

      tmlMsg.setIDS("Today" + tml);
      this.messagesList.appendChild(tmlMsg.msgContainer);
      tmlMsg.render();
    }

    for(var wml = 0; wml < this.weeklyMsgs.length; wml++)
    {
      var wmlMsg = this.weeklyMsgs[wml];

      wmlMsg.setIDS("Weekly" + wml);
      this.messagesList.appendChild(wmlMsg.msgContainer);
      wmlMsg.render();
    }
  };
}
