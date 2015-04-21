(function($){

CKEDITOR.plugins.add('accordion', {
  requires: 'widget',
  init: function(editor) {
    // Register the toolbar buttons for the CKEditor editor instance.
    editor.ui.addButton('accordion',
    {
      label : 'Insert Accordion',
      icon : this.path + 'icon-accordion.png',
      command : 'accordion'
    });

    // Add our plugin-specific CSS to style the widget within CKEditor.
    editor.addContentsCss( this.path + 'editor-accordion.css' );

    // Register the widget.
    editor.widgets.add('accordion', {
      template:
        '<div class="accordion">' +
          '<div class="accordion-tab" tabindex="0">Accordion title goes in here</div>' +
          '<div class="accordion-content clearfix"><p>Accordion contents happen in here</p></div>' +
        '</div>',
      editables: {
        title: {
          selector: '.accordion-tab',
          allowedContent: 'strong em'
        },
        content: {
          selector: '.accordion-content'
        }
      },

      allowedContent: 'div(!accordion); div(!accordion-content); div(!accordion-tab)',
//
//      requiredContent: 'div(accordion)',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass('accordion');
      }

    });

  }

});


})(jQuery);
