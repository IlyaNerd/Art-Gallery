var regex = /^.*id=/;
var id = window.location.href.replace(regex, "");

db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var query = "SELECT pic.rowid,* FROM pictures pic " +
    "INNER JOIN authors auth ON pic.author_id = auth.rowid " +
    "WHERE author_id=?";

db.transaction(function (trans) {
    trans.executeSql(query, [id], function (tx, result) {
        var auth_name = result.rows.item(0)['name'];
        var auth_ava = result.rows.item(0)['avatar_url'];


        document.getElementsByClassName("auth-name")[0].innerHTML = auth_name;
        document.getElementsByClassName("auth-name")[1].innerHTML = auth_name;

        document.getElementsByClassName("auth-ava")[0].setAttribute("src", auth_ava);

        for (var i = 0; i < result.rows.length; i++) {
            var div = document.createElement('div');
            div.className = "min-png";
            var url = "image_details.html?id=" + result.rows.item(i)['rowid'];

            div.innerHTML = "<div class=\"min-png\">\n" +
                "        <a href=\"" + url + "\">\n" +
                "            <img class=\"picture-src\" src=\"" + result.rows.item(i)['image_url'] + "\">\n" +
                "        </a>\n" +
                "    </div>"
            document.getElementsByClassName("pictures")[0].appendChild(div);
        }
    }, null);
});