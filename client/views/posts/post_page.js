/**
 * Created by s_ on 15/11/22.
 */
Template.postPage.helpers({
    currentPost: function () {
        return Posts.findOne(Session.get('currentPostId'));
    }
});