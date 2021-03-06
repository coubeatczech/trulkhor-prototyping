function sampleData() {

  function byDay(day) {
    return new Date(2014, 5, day, 0, 0, 0, 0);
  }

  var events = [
    {
      "from": byDay(1)
      , "to": byDay(3)
      , "location": 1
      , "instructor": "Fijalka"
      , "open": false
      , "description": "1 and 2 series"
    }
    , {
      "from": byDay(10)
      , "to": byDay(15)
      , "location": 1
      , "instructor": "Jeff Sable"
      , "open": true
      , "description": "Introductory course into Yantra Yoga"
    }
    , {
      "from": byDay(14)
      , "to": byDay(17)
      , "location": 1
      , "instructor": "Samantha Sable"
      , "open": true
      , "description": "Kumar Kumari instructed right from the womb"
    }
    , {
      "from": byDay(18)
      , "to": byDay(22)
      , "location": 2
      , "instructor": "Medved"
      , "open": false
      , "description": "Medved just stopped the hibernation and will be giving Lung Sang course"
    }
    , {
      "from": byDay(19)
      , "to": byDay(29)
      , "location": 1
      , "instructor": "Jeff Sable"
      , "open": true
      , "description": "Harmonious breathing course"
    }
    , {
      "from": byDay(3)
      , "to": byDay(7)
      , "location": 3
      , "instructor": "Medved"
      , "open": true
      , "description": "Kumbhaka course"
    }
  ];

  var locations = [
    {
      "name": "Prague, Czech Republic"
      , "id": 1
      , "lat": 50.083097
      , "lng": 14.431969
    }
    , {
      "name": "Phendeling, Czech Republic"
      , "id": 2
      , "lat": 48.923881
      , "lng": 14.167849
    }
    , {
      "name": "Brno, Czech Republic"
      , "id": 3
      , "lat": 49.200999
      , "lng": 16.632614
    }
  ];
  
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

  var map = null;

  $(searchLink).click(function(){

    $("#google-map").empty();
    map = new google.maps.Map(document.getElementById("google-map"));

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
    var bounds = new google.maps.LatLngBounds();
    var idsOfLocationOnTheMap = [];
    var lastPosition = null;
    
    function addItemToMap(e) {
      var locationInTheMap = idsOfLocationOnTheMap.find(function(id){
        return id == e["location"];
      })
      if (locationInTheMap == null) {
        idsOfLocationOnTheMap.push(e["location"]);
        var loc = getLocation(e);
        var position = new google.maps.LatLng(
          loc["lat"] 
          , loc["lng"]
        );
        bounds.extend(position);
        var markerOptions = {
          position: position
          , map: map
        };
        lastPosition = position;
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);
      }
    }

    function addItemToList(e) {
      var content = "<li>" + e["description"] + " with: " + e["instructor"] + " in: " + getLocation(e)["name"] + "</li>";
      $(searchResultList).append(content);
    }

    function clearList() {
      $(searchResultList).empty();      
    }  

    function setCorrectMapView() {
      if (idsOfLocationOnTheMap.length == 1) {
        map.setCenter(lastPosition);
        map.setZoom(15);
      } else {
        map.fitBounds(bounds);
      }
    }

    jfcalplugin.deleteAllAgendaItems(calId);
    clearList();

    newEvents.forEach(function(e){
      addItemToCalendar(e);
      addItemToList(e);
      addItemToMap(e);
    });
    setCorrectMapView();

  });
  
  $(searchLink).click();  

});

