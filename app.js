// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/
// https://developer.spotify.com/web-api/search-item/


// Artist:
// "https://api.spotify.com/v1/search?q="+keyword+"&type=artist";

function searchByArtist(keyword) {
 var url = "https://api.spotify.com/v1/search?q="+keyword+"&type=artist"
 $.get(url, function(results) {
 	var results = results.artists.items
 	var image = results[0].images[0].url
 	$('#image').html('<img src='+image+'>');
 	for (var i=0; i < results.length; i++) {
 		var artist = results[i]
 		var list_item = '<li>'+ artist.name +'</li>'
 		$('#results').append(list_item);	
 	}
 })
}

// Album:
// "https://api.spotify.com/v1/search?q="+keyword+"&type=album";

function searchByAlbum(keyword) {
	var url = "https://api.spotify.com/v1/search?q="+keyword+"&type=album"
	$.get(url, function(results) {
		var results = results.albums.items
		var image = results[0].images[0].url
		$('#image').html('<img src='+image+'>');
		for (var i=0; i < results.length; i++) {
			var album = results[i]
			var list_item = '<li>'+ album.name+'</li>'
			$('#results').append(list_item);
		}
	})
}

// Track:
// "https://api.spotify.com/v1/search?q="+keyword+"&type=track";

function searchByTrack(keyword) {
	var url = "https://api.spotify.com/v1/search?q="+keyword+"&type=track"
	$.get(url, function(results) {
		var results = results.tracks.items
		for (var i=0; i < results.length; i++) {
			var track = results[i]
			var list_item = '<li>'+ track.name+'</li>'
			$('#results').append(list_item);
		}
	})
}


// Register an event handler for <button id="find">

$('#find').click(function() {
	$('#results li').remove();
	var keyword = escape($('#search-keyword').val());
	console.log(keyword);
	var option = $('#search-type').val();
	if (option === 'artist') {
		searchByArtist(keyword);
	} else if (option === 'album') {
		searchByAlbum(keyword);
	} else {
		searchByTrack(keyword);
	}
});


// Better UI: Register an event handler for <select id="search-type">
