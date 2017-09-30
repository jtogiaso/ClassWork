var queryString = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=";


$.ajax({
	url: queryString,
	method: "GET"
}).done(function(response) {
	console.log(response);
});








// var queryString = "";


//     $.ajax({
//       url: queryString,
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//     });

//    var api = {
//       baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//       queryParams: {
//       	apiKey: "bb56bb262bfb4a469849cc697ac89c6b"
// 		page: 0,
// 		begin_date: "",
// 		end_date: ""
//       },

//       toQueryString: function() {
//         var queryString = '';
//         for (var i in this.queryParams) {
//           queryString += '&' + i + '=' + this.queryParams[i];
//         }
//         return this.baseUrl + '?' + queryString.trim('&');
//       },
//       //Query images from API
//       findImages: function(searchString, imageLimit, cb) {
//         this.queryParams.limit = parseInt(imageLimit);
//         this.queryParams.q = searchString;
//         $.ajax({
//           url: this.toQueryString(),
//           method: "GET"
//         })
//         .done(function(response) {
//           if (response.hasOwnProperty('data') && Array.isArray(response.data)) {
//             for (var i = 0; i < response.data.length; i++) {
//               cb(response.data[i].images.fixed_height.url, response.data[i].rating);
//             }
//           }
//         });
//       }
//     };


//     $("button").on("click", function() {
//       //Read data person attribute
//       var person = $(this).data("person").trim();
//       //Ensure that particular property exists
//       if (person.length) {
//         //Lookup images
//         api.findImages(person, 3, function(img, rating) {
//           $('<div>')
//             .addClass('item')
//             .append(
//               $('<p>').text('Rating: ' + rating))
//             .append(
//               $('<img>').attr('src', img))
//             .appendTo('#gifs-appear-here')
//         });
//       }
//     });