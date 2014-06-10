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
    date: new Date()
  }).data("plugin");

});
