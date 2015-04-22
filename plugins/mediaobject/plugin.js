/**
 * Created by veades on 2015-04-17.
 */
(function($){

    CKEDITOR.plugins.add('mediaobject', {
        requires: 'widget',

        init: function( editor ) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss( this.path + 'css/editor-mediaobject.css' );

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('mediaobject',
                {
                    label : 'Insert media object',
                    icon : this.path + 'mediaobject.png',
                    command : 'mediaobject'
                });

            // Register the widget.
            editor.widgets.add('mediaobject', {
							
                template:   '<div class="media">' +
                            '<div class="pull-left">Insert your image here</div>' +
                            '<div class="media-body">' +
                            '<h4 class="media-heading">Media heading</h4>' +
														'<p>Some content here</p>' +
                            '</div></div>',
                allowedContent: 'div(!media);' +
																'div(!pull-left);' +
																'div(!media-body);' +
																'h4(!media-heading);',
                // Minimum HTML which is required by this widget to work.
                requiredContent: 'div(media)',
								editables: {
									content: {
										selector: '.media'
									},
                },

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('media');
                }

            });

        }


    });

})(jQuery);
