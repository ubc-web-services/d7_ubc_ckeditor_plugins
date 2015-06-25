(function ($) {
 	Drupal.behaviors.ubc_ckeditor_plugins = {
		attach: function (context) {
			$('.accordion-formatted', context).once('ubc_ckeditor_plugins', function () {
				$(this).find('.accordion-tab').click(function(e){
					e.preventDefault();
					//Expand or collapse this panel
					$(this).next().slideToggle('fast');
					$(this).parent().toggleClass('accordion-closed accordion-open');
				});
			});
		}
	};
})(jQuery);
