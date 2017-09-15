$(document).ready(function() {
   $('select').material_select();
 });


        //  <!--
        //      You need to include this script tag on any page that has a Google Map.
         //
        //      The following script tag will work when opening this example locally on your computer.
        //      But if you use this on a localhost server or a live website you will need to include an API key.
        //      Sign up for one here (it's free for small usage):
        //          https://developers.google.com/maps/documentation/javascript/tutorial#api_key
         //
        //      After you sign up, use the following script tag with YOUR_GOOGLE_API_KEY replaced with your actual key.
        //          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY"></script>
        //  -->


        //  <script type="text/javascript">
             // When the window has finished loading create our google map below
             google.maps.event.addDomListener(window, 'load', init);

             function init() {
                 // Basic options for a simple Google Map
                 // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                 var mapOptions = {
                     // How zoomed in you want the map to start at (always required)
                     zoom: 11,

                     // The latitude and longitude to center the map (always required)
                     center: new google.maps.LatLng(40.6700, -73.9400), // New York

                     // How you would like to style the map.
                     // This is where you would paste any style found on Snazzy Maps.
                     styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"lightness":"8"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#565656"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#848484"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#8d8d8d"},{"visibility":"on"}]}]
                 };

                 // Get the HTML DOM element that will contain your map
                 // We are using a div with id="map" seen below in the <body>
                 var mapElement = document.getElementById('map');

                 // Create the Google Map using our element and options defined above
                 var map = new google.maps.Map(mapElement, mapOptions);

                 // Let's also add a marker while we're at it
                 var marker = new google.maps.Marker({
                     position: new google.maps.LatLng(40.6700, -73.9400),
                     map: map,
                     title: 'Snazzy!'
                 });
             }
