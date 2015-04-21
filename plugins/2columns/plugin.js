/**
 * Created by veades on 2015-04-17.
 */
(function($){

    CKEDITOR.plugins.add('2columns', {
        requires: 'widget',
        init: function( editor ) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss( this.path + 'css/editor-2columns.css' );

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('2columns',
                {
                    label : 'Insert 2 Columns',
                    icon : this.path + '2columns.png',
                    command : '2columns'
                });

            // Register the widget.
            editor.widgets.add('2columns', {
                template:   '<div class="columns-2 clearfix row-fluid">' +
                            '<div class="column span6"><p>First Column</p></div>' +
                            '<div class="column span6"><p>Second Column</p></div>' +
                            '</div>',
                // Minimum HTML which is required by this widget to work.
                requiredContent: 'div(columns-2)',
                editables: {
                    content: {
                        selector: '.columns-2'
                    }
                },
                allowedContent: 'div(!columns-2,clearfix,row-fluid);' +
                                'div(!column,span6);',
                requiredContent: 'div(columns-2)',
                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('columns-2');
                }

            });

        }


    });

})(jQuery);
