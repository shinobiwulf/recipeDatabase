var app = app || {};

app.Recipe = Backbone.Model.extend({
	defaults: {
		title: 'No title',		
		keywords: 'None',
		cookingTime: '',
		author: 'Unknown',
		submittedOn: 'Unknown',		
		instructions: ''
	},

	parse: function(response) {
		response.id = response._id;
		return response;
	}
});