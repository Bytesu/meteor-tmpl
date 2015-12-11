/**
 * Created by s_ on 15/11/21.
 */
if(Meteor.isClient){
	Meteor.startup(function(){
		Tracker.autorun(function(){
			Meteor.subscribe('posts');
		})
	})
}
Template.ApplicationLayout.helpers({
	this_ :function(){
		return [this];
	}
})