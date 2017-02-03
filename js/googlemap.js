function loadMaps(address) {
    var myOptions = {
    center: new google.maps.LatLng(42.028376, -93.651022),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),myOptions);
    //map.addControl(new GSmallMapControl());
    //map.addControl(new GMapTypeControl());
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
                     {'address': address},
                     function(results,status) {
                     if(status == google.maps.GeocoderStatus.OK){
                     var pos = results[0].geometry.location;
                     var marker = new google.maps.Marker({
                                                         map: map,
                                                         position: pos,
                                                         animation: google.maps.Animation.DROP,
                                                         title: "Neil Gong Research Group"
                                                         });
                     map.setCenter(pos);
                     }
                     }  
                     );  
}  

function init() {
    //loadMaps('42.028376, -93.651022');
    loadMaps('2215 Coover Hal, Ames, IA 50011');
}  
