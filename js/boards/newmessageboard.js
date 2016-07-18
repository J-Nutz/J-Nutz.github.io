function NewMessageBoard()
{
  var pinnedMsgs = [];
  var todaysMsgs = [];
  var weeklyMsgs = [];

  this.addMessage = function(msg, pin)
  {
    if (pin)
    {
      pinnedMsgs.push(new NewMessage(msg));
    }
    else
    {
      todaysMsgs.push(new NewMessage(msg));
    }

    this.render();
  };

  this.updateMessage = function(type, index)
  {

  };

  this.render = function()
  {
    this.messagesList = document.getElementById("messagesList");

    for(var pml = 0; pml < pinnedMsgs.length; pml++)
    {
      var pmlMsg = pinnedMsgs[pml];

      pmlMsg.setID("Pinned" + pml);
      this.messagesList.appendChild(pmlMsg.msgContainer);
      pmlMsg.render();
    }

    for(var tml = 0; tml < todaysMsgs.length; tml++)
    {
      var tmlMsg = todaysMsgs[tml];

      tmlMsg.setID("Today" + tml);
      this.messagesList.appendChild(tmlMsg.msgContainer);
      tmlMsg.render();
    }

    for(var wml = 0; wml < weeklyMsgs.length; wml++)
    {
      var wmlMsg = weeklyMsgs[wml];

      wmlMsg.setID("Weekly" + wml);
      this.messagesList.appendChild(wmlMsg.msgContainer);
      wmlMsg.render();
    }
  };
}
