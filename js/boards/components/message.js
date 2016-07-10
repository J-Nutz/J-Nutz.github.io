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
    message.style.margin = "10px 0px 10px 20px";
  };
}
