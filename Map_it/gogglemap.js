var map = {
	init: function(){
		var config = {
			zoom: 9,
			center: new google.maps.LatLng(52.376063,0.251936),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map"),config);
	  	var markers = [
			["House", "Prithivraj Chowk", "Gonville Place<br />Cambridge<br />CB1 1ND", "52.20078", "0.12938"], 
			["Rana sanga raod", "Bapat Road", "Rightwell<br />Bretton<br />Peterborough<br />PE3 8DX", "52.58930", "-0.28354"]
		];	
		this.markers(map, markers);
	},
	markers: function(map, markers){
		var infowindow = new google.maps.InfoWindow();
		for(var i=0;i<markers.length;i++) {	
			var city = markers[i][0], name = markers[i][1], address = markers[i][2];
			var latlngset = new google.maps.LatLng(markers[i][3], markers[i][4]);
			var marker = new google.maps.Marker({  
				map: map,  
				title: name,
				icon: '/img/contact-marker.png',  
				position: latlngset,
				content: '<div class="infowindow"><strong>' + city + '</strong><p>' + name + '<br />' + address + '</p><a href="http://maps.google.com/?daddr=' + address.replace(/<br\s*[\/]?>/gi,',') + '" target="_blank">Get Directions</a></div>'
			});
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.setContent(this.content);
				infowindow.open(map, this);
			});
	    }
	}
};