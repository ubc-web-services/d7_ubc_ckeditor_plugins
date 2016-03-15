/**
* Created by veades on 2015-04-17.
*/
(function($){
	CKEDITOR.plugins.add('ctarow-two', {
		requires: 'widget',
		init: function( editor ) {

			// Add our plugin-specific CSS to style the widget within CKEditor.
			editor.addContentsCss( this.path + 'css/editor-ctarow-two.css' );

			// Register the toolbar buttons for the CKEditor editor instance.
			editor.ui.addButton('ctarow-two', {
				label : 'Insert 2 Call To Action boxes',
				icon : this.path + 'ctarow-two.png',
				command : 'ctarow-two'
			});

			// Register the widget.
			editor.widgets.add('ctarow-two', {

				template:   '<div class="row ctarow-two"><div class="col-md-6"><div class="box">' +
				'<div class="cta-image cta2-img1"><img alt="" src="http://placehold.it/700x350"></div>' +
				'<div class="inner-content inner1">' +
				'<h3>This is the title of a Component Box</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><p><a href="#" class="read-more">Read More</a></p>' +
				'</div></div></div><div class="col-md-6"><div class="box">' +
				'<div class="cta-image cta2-img2"><img alt="" src="http://placehold.it/700x350"></div>' +
				'<div class="inner-content inner2">' +
				'<h3>This is the title of a Component Box</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><p><a href="#" class="read-more">Read More</a></p>' +
				'</div></div></div></div>',

				// Minimum HTML which is required by this widget to work.
				//requiredContent: 'div(ctarow)',

				editables: {
					imagearea1: {
						selector: '.cta2-img1',
						allowedContent: 'img[!src,class,data,alt];a[href,target,data-*]'
					},
					content1: {
						selector: '.inner-content.inner1',
						allowedContent: 'h3;p(*);a[*](*)'
					},
					imagearea2: {
						selector: '.cta2-img2',
						allowedContent: 'img[!src,class,data,alt];a[href,target,data-*]'
					},
					content2: {
						selector: '.inner-content.inner2',
						allowedContent: 'h3;p(*);a[*](*)'
					}
				},

				allowedContent: 'div(!row,ctarow-two,bg-light,bg-dark);' +
				'div(!col-md-6);' +
				'div(!box);' +
				'div(!cta-image,cta2-img1);' +
				'div(!inner-content,inner1);' +
				'div(!cta-image,cta2-img2);' +
				'div(!inner-content,inner2)' ,
				//'h4(!media-heading);'+
				//'div(!media-content);' +
				//'p;' +
				//'img[src,class,data,alt];'+ 
				//'a[href,target,data]',

				upcast: function(element) {
					return element.name == 'div' && element.hasClass('ctarow-two');
				}

			});
		}
	});

})(jQuery);
