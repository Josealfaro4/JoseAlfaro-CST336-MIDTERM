let checkIsbn = function(){
	$("#isbn").empty();
	var url = "https://openlibrary.org/api/books" + $("#bibkeys");
	$.ajax({
		url: url,
		type: "GET",
		data: "jscmd",
		dataType: "json",
		success: function(data){
			data.message.forEach(function(src){
				$("#isbn").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}