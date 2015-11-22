/**
 * Created by s_ on 15/11/21.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});