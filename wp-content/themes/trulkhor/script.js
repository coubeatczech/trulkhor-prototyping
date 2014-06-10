function sampleData() {

  function byDay(day) {
    return new Date(2014, 5, day, 0, 0, 0, 0);
  }

  var event1 = {
    "from": byDay(1)
    , "to": byDay(3)
    , "location": 1
    , "instructor": "Fijalka"
    , "open": false
    , "description": "1 and 2 series"
  }

  var event2 = {
    "from": byDay(10)
    , "to": byDay(15)
    , "location": 1
    , "instructor": "Jeff Sable"
    , "open": true
    , "description": "Introductory course into Yantra Yoga"
  }
  
  var event3 = {
    "from": byDay(14)
    , "to": byDay(17)
    , "location": 1
    , "instructor": "Samantha Sable"
    , "open": true
    , "description": "Kumar Kumari instructed right from the womb"
  }
  
  var event4 = {
    "from": byDay(18)
    , "to": byDay(22)
    , "location": 2
    , "instructor": "Medved"
    , "open": false
    , "description": "Medved just stopped the hibernation and will be giving Lung Sang course"
  }
  
  var event5 = {
    "from": byDay(19)
    , "to": byDay(29)
    , "location": 1
    , "instructor": "Jeff Sable"
    , "open": false
    , "description": "Harmonious breathing course"
  }

  var locations = [
    {
      "name": "Prague, Czech Republic"
      , "id": 1
      , "lat": 50.075651
      , "lng": 14.438095
    },
    {
      "name": "Phendeling, Czech Republic"
      , "id": 2
      , "lat": 48.923881
      , "lng": 14.167849
    }
  ]

  var events = [event1, event2, event3, event4, event5];
  
  return {
    "locations": locations
    , "events": events
  };

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

    var data = sampleData();
    var events = data["events"];
    var locations = data["locations"];

    function getLocation(e) {
      return locations.find(function(l){
        return l["id"] == e["location"];
      })
    }

    var loc = $("#search #location").attr("value");
    var openness = $("#search #open").attr("checked");
    var instructorField = $("#search #instructor").attr("value");

    var newEvents = events.filter(function(e){
      var containsInstructor = e["instructor"].indexOf(instructorField) > -1;
      var matchedLocations = locations.filter(function(l){
        return l["name"].indexOf(loc) > -1;
      });
      var containsLocation = matchedLocations.find(function(l){
        return l["id"] == e["location"];
      }) != null;
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
      var content = "<li>" + e["description"] + " with: " + e["instructor"] + " in: " + getLocation(e)["name"] + "</li>";
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

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

