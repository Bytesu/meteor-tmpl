/**
 * Created by s_ on 15/11/21.
 */
Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});