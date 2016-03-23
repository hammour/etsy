




var etsyObjects = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=6l5s7td5n29eqxjxza7h0yxn&keywords={whiskey}&includes=Images,Shop',
	dataType: 'jsonp',
	type: 'GET',
	success: function(data){
				console.log(data);
				console.log(data.results[3].Images[0].url_170x135);

				data.results.forEach(function(value,index,array){
					
					$('.resultBox').append(
						 '<div class="col-sm-3 thumbnail">'
						+'<a href="'+value.url+'">'
						+'<img src="'+value.Images[0].url_170x135+'">'
						+'<p class="caption itemTitle"> '+ value.title+'</p>'
						+'<div class="lower">'
						+'<div class="col-sm-7 ">'
						+''
						+'</div>'
						+'<div class="col-sm-5 itemPrice">'
						+value.currency_code+' '+value.price
						+'</div>'
						+'</a>'
						+'</div>'

						);

					


				});
			},
	error: function (err){
 				console.log('Error loading Etsy')
			},
	complete: function successGetEtsy(){
				console.log('Sucsees!')
				}

};










$.ajax(etsyObjects);



