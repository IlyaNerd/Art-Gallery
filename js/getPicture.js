db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var query = "SELECT * FROM pictures pic " +
    "INNER JOIN authors auth ON pic.author_id = auth.rowid " +
    "ORDER BY likes DESC";
db.transaction(function (trans) {
    trans.executeSql(query, [], function (trans, result) {
        var likes = document.getElementsByClassName("like-count");
        var srcs = document.getElementsByClassName("image-src");
        var authors = document.getElementsByClassName("author");
        for(var i=0; i< likes.length; i++){
            likes[i].innerHTML = result.rows.item(i)['likes'];
            srcs[i].setAttribute("src", result.rows.item(i)['image_url']);
            authors[i].innerHTML = result.rows.item(i)['name'];
        }
    }, function (tx, err) {
        alert("getPicture: " + err.message);
    });
});