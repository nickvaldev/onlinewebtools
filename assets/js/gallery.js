(function($) {

	"use strict";

	var ww = window.innerWidth,
		wh = window.innerHeight;

	var grid = {

		init: function() {
			grid.adjust();
		},

		adjust: function() {
			var container = $('.gallery');

			for (var i = 0; i < container.length; i++) {
				// container
				var active_container = $(container[i]);

				// cols
				var cols = parseInt(active_container.data('cols'), 10);

				if (ww >= 1024) {
					if (!cols) cols = 3;
				} else if (ww > 800) {
					if (cols !== 1) cols = 2;
				} else {
					cols = 1;
				}

				// margin
				var margin = parseInt(active_container.data('margin'), 10);
				if (!margin) margin = 0;

				if (ww < 550) {
					if (margin > 15)
						margin = 15;
				}

				// set margin to the container
				if (active_container.hasClass('full')) {
					active_container.css('padding', Math.floor(margin / 2));
				} else {
					active_container.css('margin', -Math.floor(margin / 2));
				}

				// height
				var height = parseFloat(active_container.data('height'));
				if (!height) height = 'auto';

				// double height
				var double_height = parseFloat(active_container.data('double-height'));
				if (!double_height) double_height = 2;

				// container width
				var container_width = active_container.width();

				// items
				var items = active_container.find('.entry'),
					items_width = Math.floor((container_width / cols) - margin),
					items_height = Math.floor(items_width * height),
					items_double_height = Math.floor(items_height * double_height),
					items_margin = Math.floor(margin / 2);

				items.each(function() {
					$(this).css('width', items_width);
					$(this).css('margin', items_margin);
					$(this).css('overflow', 'hidden');

					$(this).find('.entry__image, .entry__content').css({
						'position': 'absolute',
						'top': 0,
						'right': 0,
						'bottom': 0,
						'left': 0,
						'z-index': 1
					});

					if (items_height)
						$(this).css('height', items_height);

					if ($(this).hasClass('h2') && ww > 800)
						$(this).css('height', items_double_height + margin);

					if ($(this).hasClass('w2') && ww > 800 && cols != 1)
						$(this).css('width', items_width * 2 + margin);

					if ($(this).hasClass('fw'))
						$(this).css('width', container_width - margin);

					if ($(this).hasClass('fh') && ww > 800)
						$(this).css('height', wh);
				});

				// isotope
				active_container.isotope({
					itemSelector: '.entry',
					masonry: {
						columnWidth: items_width + margin
					}
				});

				$('.filters li').on('click', function() {
					var filter = $(this).data('filter');

					$('.filters li').removeClass('active');
					$(this).addClass('active');

					active_container.isotope({
						filter: filter
					});
				});

				$('.filters li').each(function() {
					var filter = $(this).data('filter'),
						count = $('.entry' + filter).length;

					$(this).find('.count').html(count);
				});
			};
		}

	}

	$(window).on('load', function() {
		grid.init();
	});

	$(window).on('resize', function() {
		ww = window.innerWidth;
		wh = window.innerHeight;

		grid.init();
	});

})(jQuery);
