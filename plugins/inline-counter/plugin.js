(function($){

    CKEDITOR.plugins.add('inline-counter', {
      requires: 'widget',
      init: function(editor) {
        // Register the toolbar buttons for the CKEditor editor instance.
        editor.ui.addButton('inline-counter',
        {
          label : 'Insert Counter',
          icon : this.path + 'icon-counter.png',
          command : 'inline-counter'
        });
    
        // Add our plugin-specific CSS to style the widget within CKEditor.
        editor.addContentsCss( this.path + 'css/inline-counter.css' );
    
        // Register the widget.
        editor.widgets.add('inline-counter', {
          template:
            // '<div class="accordion accordion-closed">' +
            //   '<div class="accordion-tab" tabindex="0">Accordion title goes in here</div>' +
            //   '<div class="accordion-content clearfix"><p>Accordion contents happen in here</p></div>' +
            // '</div>',
            '<div class="stats-area text-center">' + 
                '<div class="inline counter">' +
                    '<span class="counter-number">counter number goes in here</span>' +
                    '<div class="counter-title">counter title goes in here</div>' +
                '</div>' +
            '</div>',
          
          editables: {
            title: {
              selector: '.counter-title'
            },
            content: {
              selector: '.counter-number',
              allowedContent: '^[0-9](\.[0-9]+)?$',
            }
          },
    
          allowedContent: 'div(!stats-area,text-center); div(!counter-title); div(!counter-number)',
                
    //
    //      requiredContent: 'div(inline-counter)',
    
          upcast: function(element) {
            return element.name == 'div' && element.hasClass('inline-counter');
          }
    
        });
    
      }
    
    });
     
    
    })(jQuery);