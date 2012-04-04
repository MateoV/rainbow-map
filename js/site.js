$(function() {

	var m, a, b, c,
		mm = com.modestmaps,
		x = 1,
		y = 3,
		z = -3;
		
	// Build maps
	wax.tilejson('http://api.tiles.mapbox.com/v3/matt.tornadoes-2010.jsonp', function(tilejson) {
		
		tilejson.minzoom = 4;
		tilejson.maxzoom = 8;
		
		m = new mm.Map('mapmask',
		new wax.mm.connector(tilejson));		  
		  
		wax.mm.zoomer(m, tilejson).appendTo(m.parent);
		wax.mm.attribution(m, tilejson).appendTo(m.parent);
		m.setCenterZoom(new mm.Location(48.8558, 2.3524), 13);
		
		m.addCallback("drawn", function (m) {
		  a.setCenterZoom(m.getCenter(), m.getZoom());
          b.setCenterZoom(m.getCenter(), m.getZoom());
          c.setCenterZoom(m.getCenter(), m.getZoom());
        });
	});
	wax.tilejson('http://api.tiles.mapbox.com/v3/matt.map-1u1lncwl.jsonp', function(tilejson) {
		a = new mm.Map('map1',
		new wax.mm.connector(tilejson));
		a.setCenterZoom(new mm.Location(48.8558, 2.3524), 13);        
	});
	wax.tilejson('http://api.tiles.mapbox.com/v3/matt.map-939er64v.jsonp', function(tilejson) {
		b = new mm.Map('map2',
		new wax.mm.connector(tilejson));
		b.setCenterZoom(new mm.Location(48.8558, 2.3524), 13);
	});
	wax.tilejson('http://api.tiles.mapbox.com/v3/matt.map-a0vfv6kt.jsonp', function(tilejson) {
		c = new mm.Map('map3',
		new wax.mm.connector(tilejson));
		c.setCenterZoom(new mm.Location(48.8558, 2.3524), 13);
	});
	
	// Cycle opacity
	function opacityChange() {
	  if (y == 4) {
	    y = 1;
	  }
	  if (x == 4) {
	    x = 1;
	  }
	  $('#map' + x).css('opacity','0');
	  $('#map' + y).css('z-index', z);
	  $('#map' + y).css('opacity','1');
	  
	  x += 1;
	  y += 1;
	  z -= 1;
	  setTimeout(opacityChange, 5000);
	}
  
  $(document).ready(function() {
    setTimeout(opacityChange, 2000);
  });
  
});