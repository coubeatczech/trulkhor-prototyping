function sampleData() {

  function byDay(day) {
    return new Date(2014, 5, day, 0, 0, 0, 0);
  }

  var event1 = {
    "from": byDay(1)
    , "to": byDay(3)
    , "location": "Prague, Czech Republic"
    , "instructor": "Fijalka"
    , "open": false
  }

  var events = [event1];
  
  return events;

}

jQuery(document).ready(function(){

  $("#search #do-search").click(function(){

    var events = sampleData();

    var loc = $("#search #location").attr("value");
    var openness = $("#search #open").attr("checked");

    var newEvents = events.filter(function(e){
      var containsLocation = e["location"].indexOf(loc) > -1;
      var open = (openness == e["open"]) || e["open"];
      return (open && containsLocation)
    });
  
    console.debug(newEvents);

  });

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
