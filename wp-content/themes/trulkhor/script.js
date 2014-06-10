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

  var calId = "#mycal";

  var jfcalplugin = $(calId).jFrontierCal({
    date: new Date()
  }).data("plugin");

  $("#search #do-search").click(function(){

    var events = sampleData();

    var loc = $("#search #location").attr("value");
    var openness = $("#search #open").attr("checked");

    var newEvents = events.filter(function(e){
      var containsLocation = e["location"].indexOf(loc) > -1;
      var open = (openness == e["open"]) || e["open"];
      return (open && containsLocation)
    });
  
    jfcalplugin.deleteAllAgendaItems();

    newEvents.forEach(function(e){
      jfcalplugin.addAgendaItem(
        calId
        , "Course with " + e["instructor"]
        , e["from"]
        , e["to"]
        , false
      );
    });

    console.debug(newEvents);

  });

});
