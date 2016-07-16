function NewMessage(text)
{
  this.msgContainer = document.createElement("div");

  this.message = document.createElement("p");
  this.message.appendChild(document.createTextNode(text));

  var updateBtn = document.createElement("button");
  updateBtn.addEventListener("click", this.updateBtnAction);
  var updateBtnContent = document.createTextNode("Update");
  updateBtn.appendChild(updateBtnContent);

  var deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", this.deleteBtnAction);
  var deleteBtnContent = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteBtnContent);

  this.setIDS = function(id)
  {
    this.id = id;
    this.message.id = id;
    this.msgContainer.id = id + "Container";
    updateBtn.id = id + "UpdateBtn";
    deleteBtn.id = id + "DeleteBtn";
  };

  this.updateBtnAction = function()
  {
    console.log("Updated");
  };

  this.deleteBtnAction = function()
  {
    console.log("Deleted");
  };

  this.addEventListeners = function()
  {
    var updateBtnInst = document.getElementById(this.id + "UpdateBtn");
    updateBtnInst.addEventListener("click", this.updateBtnAction);

    var deleteBtnInst = document.getElementById(this.id + "DeleteBtn");
    deleteBtnInst.addEventListener("click", this.deleteBtnAction);
  };

  this.addStyles = function()
  {
    var msgContainerInst = document.getElementById(this.id + "Container");
    var msgInst = document.getElementById(this.id);
    var updateBtnInst = document.getElementById(this.id + "UpdateBtn");
    var deleteBtnInst = document.getElementById(this.id + "DeleteBtn");


    msgInst.style.display = "inline-block";
    msgInst.style.margin = "0";
    msgInst.style.padding = "5px";

    updateBtnInst.style.display = "inline-block";
    updateBtnInst.style.float = "right";
    updateBtnInst.style.verticalAlign = "middle";

    deleteBtnInst.style.verticalAlign = "middle";
    deleteBtnInst.style.display = "inline-block";
    deleteBtnInst.style.float = "right";
  };

  this.render = function()
  {
    this.msgContainer.appendChild(this.message);
    this.msgContainer.appendChild(updateBtn);
    this.msgContainer.appendChild(deleteBtn);

    this.addEventListeners();
    this.addStyles();
  };
}
