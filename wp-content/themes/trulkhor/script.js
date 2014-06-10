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
    , "description": "1 and 2 series"
  }

  var event2 = {
    "from": byDay(10)
    , "to": byDay(15)
    , "location": "Prague, Czech Republic"
    , "instructor": "Jeff Sable"
    , "open": true
    , "description": "Introductory course into Yantra Yoga"
  }
  
  var event3 = {
    "from": byDay(14)
    , "to": byDay(17)
    , "location": "Prague, Czech Republic"
    , "instructor": "Samantha Sable"
    , "open": true
    , "description": "Kumar Kumari instructed right from the womb"
  }

  var events = [event1, event2, event3];
  
  return events;

}

jQuery(document).ready(function(){

  var calId = "#mycal";

  var jfcalplugin = $(calId).jFrontierCal({
    date: new Date()
  }).data("plugin");

  var searchLink = "#search #do-search";

  $("a.clear").click(function() {
    var p = $(this).parent();
    p.find("input").attr("value", "");
  });

  $(searchLink).click(function(){

    var events = sampleData();

    var loc = $("#search #location").attr("value");
    var openness = $("#search #open").attr("checked");
    var instructorField = $("#search #instructor").attr("value");

    var newEvents = events.filter(function(e){
      var containsInstructor = e["instructor"].indexOf(instructorField) > -1;
      var containsLocation = e["location"].indexOf(loc) > -1;
      var open = (openness == e["open"]) || e["open"];
      return (open && containsLocation && containsInstructor);
    });

    function addItemToCalendar(e) {
      jfcalplugin.addAgendaItem(
        calId
        , "Course with " + e["instructor"]
        , e["from"]
        , e["to"]
        , false
      );
    }

    var searchResultList = "#search-result-list";

    function addItemToList(e) {
      var content = "<li>" + e["description"] + " with: " + e["instructor"] + "</li>";
      $(searchResultList).append(content);
    }

    function clearList() {
      $(searchResultList).empty();      
    }  

    jfcalplugin.deleteAllAgendaItems(calId);
    clearList();

    newEvents.forEach(function(e){
      addItemToCalendar(e);
      addItemToList(e);
    });

  });
  
  $(searchLink).click();  

});
