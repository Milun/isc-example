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
	// Handlebars Partials
	// ----------------------------------------
	// Save some time by defining common Math patterns here.
	// BE SURE TO USE DECIMAL HTML ENTITIES (for EPUB compatibility).
	var partials = {
		"c-a": "{{#m-math}}{{#m-a}}{{./a}}{{/m-a}}{{/m-math}}",
		"c-x-": "{{#m-math}}{{#m-a overline=true}}x{{/m-a}}{{/m-math}}",
		"c-xi": "{{#m-math}}{{#m-a}}x<sub>i</sub>{{/m-a}}{{/m-math}}",
		"c-mi": "{{#m-math}}{{#m-a}}m<sub>i</sub>{{/m-a}}{{/m-math}}",
		"c-sigma": "{{#m-math}}{{#m-sigma upper=upper}}{{/m-sigma}}{{/m-math}}",
		"c-1/nsigma": "{{#m-math}}{{{m-frac num=\"1\" den=\"{{#m-a}}n{{/m-a}}\"}}}{{#m-sigma upper=upper}}{{/m-sigma}}{{/m-math}}",
		"c-mu": "{{#m-math}}&#181;{{/m-math}}", // µ
		"c-o": "{{#m-math}}{{#m-a}}&#963;{{/m-a}}{{/m-math}}", // Sigma (σ)
		"c-f": "{{#m-math}}&#402;{{/m-math}}", // ƒ
		"c-fi": "{{#m-math}}<span style='margin-right:-0.2em;'>&#402;</span><sub style='margin-right: 0.2em;'>{{#m-a}}i{{/m-a}}</sub>{{/m-math}}",
		"c-fixi": "{{#m-math}}{{> c-fi}}{{> c-xi}}{{/m-math}}",
		"c-fimi": "{{#m-math}}{{> c-fi}}{{> c-mi}}{{/m-math}}",
		"c-1/n-1": "{{#m-math}}{{#m-frac}}{{#m-num}}1{{/m-num}}{{#m-den}}{{#m-a}}n{{/m-a}}-1{{/m-den}}{{/m-frac}}{{/m-math}}"
	}

	for (var name in partials) {
		Handlebars.registerPartial(name, partials[name]);
	}
});