jQuery(document).ready(function(){

  /**
   * Initialize with current year and date. Returns reference to plugin object.
   */
  var jfcalplugin = $("#mycal").jFrontierCal({
    date: new Date(),
    dayClickCallback: myDayClickHandler,
    agendaClickCallback: myAgendaClickHandler,
    agendaDropCallback: myAgendaDropHandler,
    dragAndDropEnabled: true
  }).data("plugin");
  /**
   * Get the date (Date object) of the day that was clicked from the event object
   */
  function myDayClickHandler(eventObj){
    var date = eventObj.data.calDayDate;
    alert("You clicked day " + date.toDateString());
  };
  /**
   * Get the agenda item that was clicked.
   */
  function myAgendaClickHandler (eventObj){
    var agendaId = eventObj.data.agendaId;
    var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);
  };
  /**
   * get the agenda item that was dropped. It's start and end dates will be updated.
   */
  function myAgendaDropHandler(eventObj){
    var agendaId = eventObj.data.agendaId;
    var date = eventObj.data.calDayDate;		
    var agendaItem = jfcalplugin.getAgendaItemById("#mycal",agendaId);		
    alert("You dropped agenda item " + agendaItem.title + 
      " onto " + date.toString() + ". Here is where you can make an AJAX call to update your database.");
  };

});
