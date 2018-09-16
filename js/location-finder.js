var watchID;
var geoLoc;

function errorHandler(err) {
    if (err.code == 1) {
        console.write("Error: Access is denied!");
    } else if (err.code == 2) {
        console.write("Error: Position is unavailable!");
    }
}

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    get_add(latitude, longitude);
}

function getLoc(ele) {
    if ($(ele).val() == "") {
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            };
            geoLoc = navigator.geolocation;
            watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
        } else {
            console.write("Sorry, browser does not support geolocation!");
        }
    }
}


function getScope(ctrlName) {
    var sel = 'div[ng-controller="' + ctrlName + '"]';
    return angular.element(sel).scope();
}

function changeModel(data) {
    var $scope = getScope('mainCtrl');
    $scope.u_address = data;
    $scope.$apply();
}

function get_add(latitude, longitude) {
    $.get("https://maps.google.com/maps/api/geocode/xml?latlng=" + latitude + "," + longitude + "&sensor=false", function (data) {
        $(data).find("formatted_address").each(function () {
            var unitData = $(this).text();
            changeModel(unitData);
            return false;
        });
    });
}