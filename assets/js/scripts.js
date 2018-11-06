(function($) {

	"use strict";

	var App = {

		ww: window.innerWidth,
		wh: window.innerHeight,

		init: function() {
			App.bg_imgs();
			App.heros();

			$('body').waitForImages({
				finished: function() {
					App.bind_events();

					$(window).on('load', function() {
						setTimeout(function() {
							$('.page-header').addClass('loaded');
						}, 1000);
					});
				},
				waitForAll: true
			});
		},

		bind_events: function() {
			// nav
			$('.trigger').on('click', App.toggle_nav);
			$('body').on('click', '.page-content.page-overlay', App.toggle_nav);

			// menus
			$('.menu li:has(ul) a').on('click', App.menus);

			// search
			// $('.page-header .bar .blog-search').on('click', App.toggle_search);

			// $('#page-search').on('click keyup', function(e) {
			// 	if (e.target === this || e.keyCode === 27)
			// 		App.toggle_search();
			// });

			$(window).on('scroll', function() {
				if ($(this).scrollTop() > 100 && !$('body').hasClass('header-open')) {
					App.show_back();
				} else {
					App.hide_back();
				}
			});

			$(window).on('resize', function() {
				App.ww = window.innerWidth;
				App.wh = window.innerHeight;

				App.heros();
			});

			// go back
			$('.page-header .bar .back').on('click', App.to_top);

			// contact
			$('#contact-form').on('submit', App.contact_form);
		},


		menus: function() {
			var parent = $(this).parent(),
				submenu = $(this).next('ul');

			if (submenu.is(':visible'))
				parent.find('ul').slideUp(300);

			if (submenu.is(':hidden')) {
				parent.siblings().find('ul').slideUp(300);
				submenu.slideDown(300);
			}

			if (parent.children('ul').length == 0) {
				return true;
			} else {
				return false;
			}
		},


		toggle_nav: function() {
			if (!$('body').hasClass('header-open')) {
				$('body').addClass('header-open');

				App.hide_back();

				$('.page-content').addClass('page-overlay');

				$('.trigger').addClass('active');

				$('.page-header').addClass('open');
				$('.page-header .bar .blog-search').addClass('hide');
				$('.page-header .bar .social').addClass('visible');

				setTimeout(function() {
					$('.page-header .nav').addClass('visible');
				}, 300);
			} else {
				$('.page-header .nav').removeClass('visible');

				setTimeout(function() {
					$('.trigger').removeClass('active');

					$('.page-header').removeClass('open');
					$('.page-header .bar .blog-search').removeClass('hide');
					$('.page-header .bar .social').removeClass('visible');

					$('body').removeClass('header-open');
					$('.page-content').removeClass('page-overlay');

					if ($(window).scrollTop() > 100)
						App.show_back();
				}, 300);
			}
		},


		// toggle_search: function() {
		// 	if (!$('#page-search').hasClass('visible')) {
		// 		$('#page-search').addClass('visible');
		// 		$('#form-search .field').focus();
		// 	} else {
		// 		$('#page-search').removeClass('visible');
		// 	}
		// },


		contact_form: function() {
			var action = $('#contact-form').attr('action');

			$('#contact-messages').slideUp(300, function() {
				$('#contact-messages').hide();
				$('#submit').attr('disabled', 'disabled');

				$.post(action, {
					name: $('#name').val(),
					email: $('#email').val(),
					message: $('#message').val()
				}, function(data) {
					document.getElementById('contact-messages').innerHTML = data;
					$('#contact-messages').slideDown(500);
					$('#submit').removeAttr('disabled');
					if (data.match('success') != null)
						$('#contact-form').slideUp(500);
				});
			});

			return false;
		},


		bg_imgs: function() {
			$('[data-bg]').each(function() {
				var bg = $(this).data('bg');

				$(this).css({
					'background-image': 'url(' + bg + ')',
					'background-size': 'cover',
					'background-position': 'center center'
				});
			});
		},


		heros: function() {
			$('.hero').each(function() {
				var hero = $(this);

				hero.css('position', 'relative');
				hero.css('overflow', 'hidden');

				if (hero.hasClass('small')) {
					hero.css('height', App.wh * 0.7);
				} else if (hero.hasClass('medium')) {
					hero.css('height', App.wh * 0.8);
				} else if (hero.hasClass('full')) {
					hero.css('height', App.wh);

					if (App.ww < 550) {
						hero.css('height', (App.wh - $('.page-header .bar').height()));
					}
				}
			});
		},


		// back to top
		show_back: function() {
			$('.page-header .back').addClass('visible');
		},

		hide_back: function() {
			$('.page-header .back').removeClass('visible');
		},

		to_top: function() {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		}

	}

	App.init();

})(jQuery);


