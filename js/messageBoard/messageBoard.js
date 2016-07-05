var messageBoard = new Object();

messageBoard.render = function()
{
  messageBoard.renderDailySchedule();
}

messageBoard.renderDailySchedule = function()
{
  var dailyScheduleContainer = document.getElementById("dailyScheduleDiv");
  var dailyScheduleBoard = document.createElement("p");
  dailyScheduleBoard.innerHTML = "New P";

  dailyScheduleContainer.appendChild(dailyScheduleBoard);
}

messageBoard.addMessage = function(msg)
{

}
