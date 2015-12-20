/**
 * Created by s_ on 15/11/21.
 */

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});
Router.onBeforeAction(function() {

    this.next();
});

Router.route('/', {
    template:'list',
    onBeforeAction:function(){
        this.next();
    }
});

// Router.route('/posts/:_id', {
//     template:'postPage',
//     onBeforeAction:function(){
//         console.log(this.params._id);
//     }
// })
// Router.route('/bs');
