db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var query = "SELECT pic.rowid,* FROM pictures pic " +
    "INNER JOIN authors auth ON pic.author_id = auth.rowid " +
    "ORDER BY likes DESC";
db.transaction(function (trans) {
    trans.executeSql(query, [], function (trans, result) {
        var likes = document.getElementsByClassName("like-count");
        var srcs = document.getElementsByClassName("image-src");
        var authors = document.getElementsByClassName("author");
        var ids = document.getElementsByClassName("btn-like");
        var pictures_urls = document.getElementsByClassName("picture-url");
        for(var i=0; i< likes.length; i++){
            var id = result.rows.item(i)['rowid'];
            var image_url = result.rows.item(i)['image_url'];

            var pic_href = pictures_urls[i].getAttribute("href");
            pic_href = pic_href + "?id=" + id;
            pictures_urls[i].setAttribute("href", pic_href);

            ids[i].setAttribute("onclick", "like(" + id + "," + i + ")");
            likes[i].innerHTML = result.rows.item(i)['likes'];
            srcs[i].setAttribute("src", image_url);
            authors[i].innerHTML = result.rows.item(i)['name'];
            // pictures_urls[i].setAttribute("onclick", "appendId(" + id + ")");
        }
    }, function (tx, err) {
        alert("getPicture: " + err.message);
    });
});