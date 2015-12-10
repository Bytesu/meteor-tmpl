/**
 * Created by s_ on 15/11/21.
 */
Meteor.subscribe('posts');
Template.ApplicationLayout.helpers({
	this_ :function(){
		return [this];
	}
})