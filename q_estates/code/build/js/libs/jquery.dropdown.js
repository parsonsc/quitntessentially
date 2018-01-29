/* Custom written dropdown plugin */
(function ($) {
    $.fn.dropdown = function (options) {
        //Default Options
        var defaults = {
        	select: 'h2',
            onRender: function (element) {},
            onChange: function (option, element) {},
            onClose: function (option, element) {}
        };
        var settings = $.extend({}, defaults, options);
        //Initialize
        this.each(function () {
        	var element = this;

        	//Check if tag is select
            if (this.tagName != 'SELECT') {
                alert('The plugin must be used only with select element');
                return false;
            }

        	//Create wrapper div
        	var wrapper_id = this.id + '_wrapper',
        		wrapper_sel = '#' + wrapper_id,
        		wrapper = $('<div/>', { 
        		'id': wrapper_id,
        		'class': 'dropdown-wrapper'
        	});

        	//Wrap select inside the created wrapper
        	$(this).wrap(wrapper);

        	//Create HTML dropdown container
        	var container = $('<div/>', { 
        		'id': this.id + '_dropdown',
        		'class': 'dropdown'
        	});

        	//Div to hold the selected value
        	var selected = $('<a/>', { 
        		'id': this.id + '_dropdown_selected',
        		'class': 'dropdown-selected'
        	});

        	//Div to hold the options list
        	var options = $('<div/>', { 
        		'id': this.id + '_dropdown_options',
        		'class': 'dropdown-options'
        	});

            //Add link to create new options (via Ajax) if specified
            var addOptions = $(element).is("[data-new]");
            if (addOptions) {
                var create = $('<a/>', { 
                    'id': this.id + '_dropdown_new_option',
                    'class': 'dropdown-create b fa fa-plus',
                    'href': $(element).data('new'),
                    'target': '_blank',
                    'html': 'Add New Option'
                });
                options.append(create);
            }

        	//Add options
        	$('#' + this.id + ' option').each(function() {
			    var option = $('<div/>', { 
	        		'id': element.id + '_dropdown-option_' + this.value,
	        		'class': 'dropdown-option',
	        		'data-value': this.value,
	        		'html': this.text
	        	});
                if(this.value !== '' && addOptions) {
                    var buttons = $('<a/>', { 
                        'id': element.id + '_dropdown-option_' + this.value + '_update',
                        'class': 'fa fa-edit',
                        'href': $(element).data('new') + '?id=' + this.value
                    });
                    option.append(buttons);
                }
	        	options.append(option);
			});

			//Append selected item & options to container
			container.append(selected).append(options)
        	
        	//Append container to wrapper
        	$(wrapper_sel).append(container);

        	//The select has been rendered in the DOM
        	triggerRender(element);

        	
        	/**************
        	BIND EVENTS
        	**************/
        	
        	//Open the options
            $(wrapper_sel + ' .dropdown-selected').bind('click', function (e) {
            	e.preventDefault();
            	e.stopPropagation();
            	
                $(wrapper_sel + ' .dropdown').toggleClass('open');
            });

        	//On selecting an option
            $(wrapper_sel + ' .dropdown-option').bind('click', function (e) { 
                e.preventDefault(); 
                e.stopPropagation();          	

            	var clickedOption = $(this);
            	//Select the clicked option
                selectOption(clickedOption, element);

                //Trigger change
                triggerChange(clickedOption, element);
            });

            //Close on clicking ouside the dropdown
            $(document).mouseup(function (e) {
                var container = $(wrapper_sel),
                    option;

                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    triggerClose(option, element);
                }
            });
        });

        //Destroy method
        this.destroy = function () {
            var id = $(this).attr('id'),
                sel = '#' + id + '_dropdown';
            //Unbind click events
            $(sel + ' .dropdown-selected, ' + sel + ' .dropdown-option').unbind('click');
            //Remove Dropdown
            $(sel).remove();
            //Remove the wrapper
            if($(this).parent().is( "div.dropdown-wrapper" )) {
                $(this).unwrap();
            }
        }

        return this;

        //Core function
        function selectOption(option, element) {
        	var selected = '#' + element.id + '_dropdown_selected',
        		active = '#' + element.id + '_dropdown_options .selected',
        		selectTextTag = option.find(settings.select),
        		selectText = selectTextTag.length? selectTextTag.text() : option.text();
            
            $(selected).html(selectText);

            $(active).removeClass('selected');
            option.addClass('selected');
        }

        function triggerRender(element) {
            //Set the default value
        	 selectOption($('#' + element.id + '_dropdown-option_' + element.value), element);

        	//Trigger onRender callback
            if ($.isFunction(settings.onRender))
                settings.onRender(element);
        }

        function triggerChange(option, element) {
        	//Set the selected value in select element
        	$(element).val(option.data('value')).change();

        	//Trigger onChange callback
            if ($.isFunction(settings.onChange))
                settings.onChange(option, element);

            //Close the dropdown
            triggerClose(option, element);
        }

        function triggerClose(option, element) {
        	//Remove open class to close the options
        	$('#' + element.id + '_dropdown').removeClass('open');

        	//Trigger onClose callback
            if ($.isFunction(settings.onClose))
                settings.onClose(option, element);
        }
    };
}(jQuery));