/*(function($) {
	$(document).ready(function(){
    // Apply jQuery UI Accordion behaviors to specifically classed elements.
    $('.accordion').accordion({
      header: ".accordion__title",
      collapsible: true,
      active: false,
      animated: false
    });
	});
}(jQuery));*/

(function ($) {
  Drupal.behaviors.ubc_ckeditor_plugins = {
    attach: function (context, settings) {
    $(document).ready(function(){
        // accordions
        $('.accordion').find('.accordion-tab').click(function(e){
            e.preventDefault();
            //Expand or collapse this panel
            $(this).next().slideToggle('fast');
            $(this).parent().toggleClass('accordion-closed accordion-open');
        });
			});
		}
	};
})(jQuery);