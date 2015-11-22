/**
 * Created by s_ on 15/11/22.
 */
Router.route('/posts/:id', { where: 'server' })
    .get(function () {
        // curl -XGET "http://localhost:3000/posts/getAll?s=2#3"
        var pos = Posts.find();
        console.log(pos.count(),this.params.id,this.request.query)
        //console.log(Posts.find().fetch());
        this.response.end('AAAA-GET-'+pos.count());
    })
    .post(function () {
        // curl -XPOST --data "hong=2312" "http://localhost:3000/posts/xxxxxxx"
        var pos = Posts.find();
        this.response.write(JSON.stringify(pos.fetch()))

        this.response.end();

    })
    .put(function () {
        var pos = Posts.find();
        console.log(pos.count(),this.params.id,this.request.body);
        this.response.end('AAAA-PUT-'+pos.count());
    }).delete(function(){

    })