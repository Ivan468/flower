function getURLVar(key) {
	var value = [];
	var query = document.location.search.split('?');
	if (query[1]) {
		var part = query[1].split('&');
		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');
			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}
		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
}

$(document).ready(function() {
	var el = document.getElementById('column-left');
	if (el) {
	$("#cont").addClass("cont_color");
	}
	// Highlight any found errors
	$('.text-danger').each(function() {
		var element = $(this).parent().parent();
		if (element.hasClass('form-group')) {
			element.addClass('has-error');
		}
	});
		// Currency
	$('#form-currency .currency-select').on('click', function(e) {
		e.preventDefault();
		$('#form-currency input[name=\'code\']').val($(this).attr('name'));
		$('#form-currency').submit();
	});
	// Language
	$('#form-language .language-select').on('click', function(e) {
		e.preventDefault();
		$('#form-language input[name=\'code\']').val($(this).attr('name'));
		$('#form-language').submit();
	});
	/* Search_head */
	$('#search_head input[name=\'search\']').parent().find('button').on('click', function() {
		var url = $('base').attr('href') + 'index.php?route=product/search';
        var value = $('#search_head input[name=\'search\']').val();
		if (value) {
			url += '&search=' + encodeURIComponent(value);
		}
		var category_id = $('select[name=\'category_id\']').val();
		if (category_id > 0) {
		url += '&category_id=' + encodeURIComponent(category_id);
		url += '&sub_category=true';
		}
		location = url;
	});
	$('#search_head input[name=\'search\']').on('keydown', function(e) {
		if (e.keyCode == 13) {
			$('#search_head input[name=\'search\']').parent().find('button').trigger('click');
		}
	});
	// Product List
	$('#list-view').click(function() {
		$('#content .product-layoutcatnew').attr('class', 'product-layoutcatnew product_height_auto product_ardlist product-list col-lg-12 col-md-12 col-sm-12 col-xs-6');
		$('#content .product-layoutcatnew .caption').attr('class', 'caption row');
		$('#content .product-layoutcatnew .product_list_block').attr('class', 'product_list_block col-lg-3 col-md-3 col-sm-3 col-xs-6');
		$('#content .product-layoutcatnew .product_list_block2').attr('class', 'product_list_block2 col-lg-9 col-md-9 col-sm-9 col-xs-6');
		$('#content .product-layoutcatnew .product_list_block2 .effect-hover').attr('class', 'effect-hover');
		localStorage.setItem('display', 'list');
		$(this).addClass('btn-listgrid');
		$('#grid-view').removeClass('btn-listgrid');
		
	});
	// Product Grid
	$('#grid-view').click(function() {
		cols = $('#column-right, #column-left').length;
		$('#content .product-layoutcatnew').attr('class', 'product-layoutcatnew product-grid');
		$('#content .product-layoutcatnew .caption').attr('class', 'caption');
		$('#content .product-layoutcatnew .product_list_block').attr('class', 'product_list_block');
		$('#content .product-layoutcatnew .product_list_block2').attr('class', 'product_list_block2');
		$('#content .product-layoutcatnew .product_list_block2 .effect-hover').attr('class', 'effect-hover effect-hover-grid');
	function scrWidthCheckCommon() {
		var widthcheck = $(window).width();
function initCheckСommon(firstloadfix) {
	if($(window).width() != widthcheck || firstloadfix == 0) {
			if ($(window).width() < 992 && $(window).width() > 600) {
	if (cols == 2) {
			$('#content .product-grid').attr('class', 'two_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-6 col-md-6 col-sm-6 col-xs-4');
		} else if (cols == 1) {
			$('#content .product-grid').attr('class', 'one_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-3 col-md-4 col-sm-4 col-xs-4');
		} else {
			$('#content .product-grid').attr('class', 'none_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-3 col-md-3 col-sm-4 col-xs-4');
		}
	} else if ($(window).width() < 601 && $(window).width() > 0) {
	    if (cols == 2) {
	  	$('#content .product-grid').attr('class', 'two_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-6 col-md-6 col-sm-6 col-xs-6');
		} else if (cols == 1) {
			$('#content .product-grid').attr('class', 'one_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-3 col-md-4 col-sm-6 col-xs-6');
		} else {
			$('#content .product-grid').attr('class', 'none_cols product-layoutcatnew product_block product_height_auto product-grid col-lg-3 col-md-3 col-sm-4 col-xs-6');
		}
    } else {
	    if (cols == 2) {
	  	$('#content .product-grid').attr('class', 'two_cols product-layoutcatnew product_block product-grid col-lg-4 col-md-6 col-sm-6 col-xs-6');
		} else if (cols == 1) {
			$('#content .product-grid').attr('class', 'one_cols product-layoutcatnew product_block product-grid col-lg-3 col-md-4 col-sm-6 col-xs-6');
		} else {
			$('#content .product-grid').attr('class', 'none_cols product-layoutcatnew product_block product-grid col-lg-3 col-md-3 col-sm-4 col-xs-6');
		}
	}	
		widthcheck = $(window).width();
	} 
}
initCheckСommon(0);
$(window).resize(function () {
	initCheckСommon(1);
});
}
scrWidthCheckCommon();


		localStorage.setItem('display', 'grid');
		$('#content .slide').attr('class', 'carousel slide');
		$('#content .list_ch').attr('class', 'list_ch');
		$(this).addClass('btn-listgrid');
		$('#list-view').removeClass('btn-listgrid');
	});
	if (localStorage.getItem('display') == 'list') {
	$('#list-view').trigger('click');
	} else {
	$('#grid-view').trigger('click');
	}  
	// Checkout
	$(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
		if (e.keyCode == 13) {
			$('#collapse-checkout-option #button-login').trigger('click');
		}
	});
	// tooltips on hover
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body',trigger: 'hover'});
	// Makes tooltips work on ajax generated content
	$(document).ajaxStop(function() {
		$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
	});
});

// Cart add remove functions
var cart = {
	'add': function(product_id, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},			
			success: function(json) {
				$('.alert, .text-danger').remove();
				if (json['redirect']) {
					location = json['redirect'];
				}
				if (json['success']) {
					 	$.magnificPopup.open({
				fixedContentPos: true,
				items: {
				src: 'index.php?route=common/aridius_cart/info'
					},
				type: 'ajax',
				mainClass: 'mfp-fade'
				});
					// Need to set timeout otherwise it wont update the total
					setTimeout(function () {
						$('#cart button > span').html('<span> &nbsp;' + json['total'] + '&nbsp;<span class="caret"></span></span>');
					}, 100);
				$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
		},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'update_aridiuscart': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit_aridiuscart',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#aridius_cart').css('opacity','0');
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
				setTimeout(function () {
					$('#aridius_cart').css('opacity','');
				}, 250);
			},
			success: function(json) {
				
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart button > span').html('<span> &nbsp;' + json['total'] + '&nbsp;<span class="caret"></span></span>');
				}, 100);
				
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
					$('#aridius_cart').load('index.php?route=common/aridius_cart/info');
					
				}
				
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#aridius_cart').css('opacity','0');
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
				setTimeout(function () {
					$('#aridius_cart').css('opacity','');
				}, 250);
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart button > span').html('<span> &nbsp;' + json['total'] + '&nbsp;<span class="caret"></span></span>');
				}, 100);
				var now_location = String(document.location.pathname);
				if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout')) {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
					$('#aridius_cart').load('index.php?route=common/aridius_cart/info');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}
var voucher = {
	'add': function() {
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart button > span').html('<span> &nbsp;' + json['total'] + '&nbsp;<span class="caret"></span></span>');
				}, 100);
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}
var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();
            $("#wishlist").modal('show');
				if (json['success']) {
			$("#wishlist .modal-body p").html(json['success']);
				}
				if (json['info']) {
			$("#wishlist .modal-body p").html(json['info']);
				}
				$('#wishlist-total span').html(json['total']);
				$('#wishlist-total').attr('title', json['total']);
		},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {
	}
}
var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();
				if (json['success']) {
					$("#compare").modal('show');
					$("#compare .modal-body p").html(json['success']);
					$('#compare-total').html(json['total']);
				}
		},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {
	}
}
/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
	e.preventDefault();
	$('#modal-agree').remove();
	var element = this;
	$.ajax({
		url: $(element).attr('href'),
		type: 'get',
		dataType: 'html',
		success: function(data) {
			html  = '<div id="modal-agree" class="modal">';
			html += '  <div class="modal-dialog">';
			html += '    <div class="modal-content">';
			html += '      <div class="modal-header">';
			html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
			html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
			html += '      </div>';
			html += '      <div class="modal-body">' + data + '</div>';
			html += '    </div';
			html += '  </div>';
			html += '</div>';
			$('body').append(html);
			$('#modal-agree').modal('show');
		}
	});
});
// Autocomplete */
(function($) {
	$.fn.autocomplete = function(option) {
		return this.each(function() {
			this.timer = null;
			this.items = new Array();
			$.extend(this, option);
			$(this).attr('autocomplete', 'off');
			// Focus
			$(this).on('focus', function() {
				this.request();
			});
			// Blur
			$(this).on('blur', function() {
				setTimeout(function(object) {
					object.hide();
				}, 200, this);
			});
			// Keydown
			$(this).on('keydown', function(event) {
				switch(event.keyCode) {
					case 27: // escape
						this.hide();
						break;
					default:
						this.request();
						break;
				}
			});
			// Click
			this.click = function(event) {
				event.preventDefault();
				value = $(event.target).parent().attr('data-value');
				if (value && this.items[value]) {
					this.select(this.items[value]);
				}
			}
			// Show
			this.show = function() {
				var pos = $(this).position();
				$(this).siblings('ul.dropdown-menu').css({
					top: pos.top + $(this).outerHeight(),
					left: pos.left
				});
				$(this).siblings('ul.dropdown-menu').show();
			}
			// Hide
			this.hide = function() {
				$(this).siblings('ul.dropdown-menu').hide();
			}
			// Request
			this.request = function() {
				clearTimeout(this.timer);
				this.timer = setTimeout(function(object) {
					object.source($(object).val(), $.proxy(object.response, object));
				}, 200, this);
			}
			// Response
			this.response = function(json) {
				html = '';
				if (json.length) {
					for (i = 0; i < json.length; i++) {
						this.items[json[i]['value']] = json[i];
					}
					for (i = 0; i < json.length; i++) {
						if (!json[i]['category']) {
							html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
						}
					}
					// Get all the ones with a categories
					var category = new Array();
					for (i = 0; i < json.length; i++) {
						if (json[i]['category']) {
							if (!category[json[i]['category']]) {
								category[json[i]['category']] = new Array();
								category[json[i]['category']]['name'] = json[i]['category'];
								category[json[i]['category']]['item'] = new Array();
							}
							category[json[i]['category']]['item'].push(json[i]);
						}
					}
					for (i in category) {
						html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';
						for (j = 0; j < category[i]['item'].length; j++) {
							html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
						}
					}
				}
				if (html) {
					this.show();
				} else {
					this.hide();
				}
				$(this).siblings('ul.dropdown-menu').html(html);
			}
			$(this).after('<ul class="dropdown-menu"></ul>');
			$(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));
		});
	}
})(window.jQuery);