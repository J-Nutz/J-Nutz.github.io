function NewMessage(text)
{
  var createElementWithText = function(type, text)
  {
    var element = document.createElement(type);
    element.appendChild(document.createTextNode(text));

    return element;
  };

  this.msgContainer = document.createElement("div");
  this.message = createElementWithText("p", text);

  this.setID = function(id)
  {
    this.id = id;
    this.message.id = "msg" + id;
    this.msgContainer.id = "msgContainer" + id;
  };

  this.addStyles = function()
  {
    var msgContainerInst = document.getElementById("msgContainer" + this.id);
    var msgInst = document.getElementById("msg" + this.id);

    msgContainerInst.style.margin = "0";
    msgContainerInst.style.padding = "0";
    msgContainerInst.style.borderBottom = "1px solid black";

    msgInst.style.margin = "0";
    msgInst.style.padding = "6px";
    msgInst.style.display = "inline-block";
  };

  this.render = function()
  {
    this.msgContainer.appendChild(this.message);
    this.addStyles();
  };

}
