function NewMessage(text)
{
  this.msgContainer = document.createElement("div");

  this.message = document.createElement("p");
  this.message.appendChild(document.createTextNode(text));

  var btnContainer = document.createElement("div");

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
    btnContainer.id = id + "BtnContainer";
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
    var btnContainerInst = document.getElementById(this.id + "BtnContainer");
    var updateBtnInst = document.getElementById(this.id + "UpdateBtn");
    var deleteBtnInst = document.getElementById(this.id + "DeleteBtn");

    msgContainerInst.style.borderBottom = "1px solid black";

    msgInst.style.margin = "6px";
    msgInst.style.padding = "0";
    msgInst.style.display = "inline-block";
    msgInst.style.width = "55%";

    btnContainer.style.display = "inline-block";
    btnContainer.style.float = "right";
    btnContainer.style.width = "32%";
    btnContainer.style.height = "100%";

    updateBtnInst.style.float = "right";
    updateBtnInst.style.margin = "5px";
    updateBtnInst.style.display = "inline-block";

    deleteBtnInst.style.float = "right";
    deleteBtnInst.style.margin = "5px";
    deleteBtnInst.style.display = "inline-block";
  };

  this.render = function()
  {
    this.msgContainer.appendChild(this.message);

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    this.msgContainer.appendChild(btnContainer);

    this.addEventListeners();
    this.addStyles();
  };
}
