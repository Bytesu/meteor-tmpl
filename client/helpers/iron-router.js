/**
 * Created by s_ on 15/11/21.
 */

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
Router.onBeforeAction(function() {

    this.next();
});

Router.route('/', function () {
    this.render('postsList', {
        //data: function () { return Items.findOne({_id: this.params._id}); }
    });
});
Router.route('/posts/:_id', {
    template:'postPage',
    onBeforeAction:function(){
        console.log(this.params._id);
        this.next();
    }
})

// Router.route('/posts/:_id', {
//     template:'postPage',
//     onBeforeAction:function(){
//         console.log(this.params._id);
//     }
// })
Router.route('/bs');