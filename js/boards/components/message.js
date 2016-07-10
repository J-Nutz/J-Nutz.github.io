function Message(text)
{
  this.text = text;
  this.msgElement = document.createElement("LI");
  this.msgContent = document.createTextNode(this.text);
  this.msgElement.appendChild(this.msgContent);
  this.msgElement.id = this.text;

  this.getMessage = function()
  {
    return this.msgElement;
  };

  this.applyStyle = function()
  {
    var message = document.getElementById(this.text);
    message.style.paddingLeft = "5%";
    message.style.paddingTop = "10px";
    message.style.paddingBottom = "10px";
    message.style.width = "100%";
    message.style.borderBottom = "1px solid black";
  };
}
