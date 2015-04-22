/**
 * Created by veades on 2015-04-17.
 */
(function($){

    CKEDITOR.plugins.add('3columns', {
        requires: 'widget',

        init: function( editor ) {

            // Add our plugin-specific CSS to style the widget within CKEditor.
            editor.addContentsCss( this.path + 'css/editor-3columns.css' );

            // Register the toolbar buttons for the CKEditor editor instance.
            editor.ui.addButton('3columns',
                {
                    label : 'Insert 3 Columns',
                    icon : this.path + '3columns.png',
                    command : '3columns'
                });

            // Register the widget.
            editor.widgets.add('3columns', {
                template:   '<div class="columns-3 clearfix row-fluid">' +
                            '<div class="col span4"><p>First Column</p></div>' +
                            '<div class="col span4"><p>Second Column</p></div>' +
                            '<div class="col span4"><p>Third Column</p></div>' +
                            '</div>',
                allowedContent: 'div(!columns-3,clearfix,row-fluid);p' +
                                'div(!col,span4);',
                // Minimum HTML which is required by this widget to work.
                requiredContent: 'div(columns-3)',
                editables: {
                    content: {
                        selector: '.columns-3'
                    }
                },

                upcast: function(element) {
                    return element.name == 'div' && element.hasClass('columns-3');
                }

            });

        }


    });

})(jQuery);
