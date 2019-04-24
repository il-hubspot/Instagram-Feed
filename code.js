
function getIntaFeedToken(elem, id, token) {
	var feed = new Instafeed({
		get: 'user',
		target: elem.toString(),
		userId: id.toString(),
		accessToken: token.toString(),
    resolution: 'low_resolution',
    limit: 10,
    template: '<a href="{link}" class="orientation-{orientation}" target="_blank"><span><img src="{image}" /></span></a>'.replace(/[{}]/g, "$&$&")
	});
  	feed.run();
} 


jQuery(document).ready(function($) {
	$(".content-instagram-feed").each(function(){
		var o = $(this);

		if (o.hasClass("init")) {
		    return;
		}

		o.addClass("init");

		var headerId = "id-" + Math.random().toString().slice(2);
		o.find('.instafeed-items').attr("id", headerId);

		var userToken = o.find('.instafeed-items').data("token");
    var userId = userToken.substr(0, userToken.indexOf('.')); 

		getIntaFeedToken(headerId, userId, userToken);
	});
});
