var regex = /^.*id=/;
var id = window.location.href.replace(regex, "");

db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var query = "SELECT pic.rowid,* FROM pictures pic " +
    "INNER JOIN authors auth ON pic.author_id = auth.rowid " +
    "WHERE pic.rowid=?";

db.transaction(function (trans) {
   trans.executeSql(query, [id], function (tx, result) {
       var url = result.rows.item(0)['image_url'];
       var pic_name = result.rows.item(0)['picture_name'];
       var price = result.rows.item(0)['price'];
       var series = result.rows.item(0)['series'];
       var complexity = result.rows.item(0)['compexity'];
       var auth_name = result.rows.item(0)['name'];
       var auth_ava = result.rows.item(0)['avatar_url'];
       var auth_id = result.rows.item(0)['author_id'];

       document.getElementsByClassName("picture-src")[0].setAttribute("src", url);

       document.getElementsByClassName("picture_name")[0].innerHTML = pic_name;
       document.getElementsByClassName("picture_name")[1].innerHTML = pic_name;

       document.getElementsByClassName("price")[0].innerHTML = "Price: " + price + "$";

       document.getElementsByClassName("gray-content")[0].innerHTML = series;
       document.getElementsByClassName("gray-content")[1].innerHTML = complexity;

       var auth_url = document.getElementsByClassName("auth-name")[0].getAttribute("href");
       auth_url = auth_url + "?id=" + auth_id;
       document.getElementsByClassName("auth-name")[0].setAttribute("href", auth_url);
       document.getElementsByClassName("auth-name")[0].innerHTML = auth_name;
       document.getElementsByClassName("auth-ava")[0].setAttribute("src", auth_ava);
   }, null)
});
