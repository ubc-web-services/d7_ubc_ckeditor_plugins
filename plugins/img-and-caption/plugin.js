/**
 * Created by jotoole on 2016-03-02.
 */
(function($){

	CKEDITOR.plugins.add('img-and-caption', {
        requires: 'widget',
        init: function( editor ) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss( this.path + 'css/editor-img-and-caption.css' );

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('img-and-caption', {
                    label : 'Insert image with caption',
                    icon : this.path + 'img-and-caption.png',
                    command : 'img-and-caption'
                });

            // Register the widget.
            editor.widgets.add('img-and-caption', {
							
                template:   '<figure class="img-and-caption">' +
                            '<div data-widget-image="img"><img alt="" src="http://placehold.it/500x150"></div>' +
                            '<figcaption>Figure A: this is a caption</figcaption>' +
                            '</figure>',
               
                // Minimum HTML which is required by this widget to work.
                requiredContent: 'figure(img-and-caption)',
				//disallowedContent: 'br; p',
                
				editables: {
					imagearea: {
						selector: 'div[data-widget-image]',
						allowedContent: 'img[!src,class,data,alt];a[href,target,data-*]'
					},
					captionarea: {
						selector: 'figcaption',
						allowedContent: 'a[href,target,data-*]'
					},
				},
								
                allowedContent: 'figure(!img-and-caption,pull-left,pull-right);' +
								'div[!data-widget-image];' +
								'figcaption;', 
								//'img[src,class,data,alt];'+ 
								//'a[href,target,data]',

                upcast: function(element) {
					return element.name == 'figure' && element.hasClass('img-and-caption');
                }
			});
		}
    });
})(jQuery);
