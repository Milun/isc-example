define([
	"core/js/adapt"
  ], function(Adapt) {

	/**
	 * Define helpers and/or partials specific to this project here.
	 * Be SURE to prefix them all with "c-".
	 */

	// Handlebars Helpers
	// ----------------------------------------
	var helpers = {

        "c-example": function() {

            let context = arguments[arguments.length-1];
			let content = context.fn(this); // Get the contents of the helper.

            let html = Handlebars.templates["c-example"](_.extend(
				context.hash,
				{
					content: content
				}
			));
            return new Handlebars.SafeString(html);
		}
	}

	for (var name in helpers) {
        if (helpers.hasOwnProperty(name)) {
            Handlebars.registerHelper(name, helpers[name]);
        }
    }


	/**
	 * Handlebars Partials
	 * ----------------------------------------
	 * Notes:
	 * ------
	 * - Partials exist to make shortcuts for commonly re-used HTML in a topic. 
	 * - Partials support named parameters.
	 * - Partials can contain other Handlebars partials and/or helpers.
	 * 
	 * Examples:
	 * ---------
	 * <p>Here's an example {{> c-partial}} and how to use it!</p>
	 * <p>Here's an example {{> c-withParam param="with parameters!"}} and how to use it!</p>
	 */
	var partials = {
		"c-partial": "<strong><u>Shortcut!</u></strong>",
		"c-withParam": "<strong><u>{{./param}}</u></strong>",
	}

	for (var name in partials) {
		Handlebars.registerPartial(name, partials[name]);
	}
});