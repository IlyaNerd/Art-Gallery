function like(id, i) {

    var el = document.getElementsByClassName("like-count");
    id = parseInt(id);
    var count = el[i].innerText;
    count = parseInt(count) + 1;
    el[i].innerText = count;

    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    var query = "UPDATE pictures SET likes=? WHERE rowid=?";

    db.transaction(function (trans) {
        trans.executeSql(query, [count, id], null, null);
    });

    var func = document.getElementsByClassName("btn-like")[i];
    func.setAttribute("onclick", "dislike(" + id + "," + i + ")")
}

function dislike(id, i) {
    var el = document.getElementsByClassName("like-count");
    id = parseInt(id);
    var count = el[i].innerText;
    count = parseInt(count) - 1;
    el[i].innerText = count;

    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    var query = "UPDATE pictures SET likes=? WHERE rowid=?";

    db.transaction(function (trans) {
        trans.executeSql(query, [count, id], null, null);
    });

    var func = document.getElementsByClassName("btn-like")[i];
    func.setAttribute("onclick", "like(" + id + "," + i + ")")
}

function setCookie(id) {
    document.cookie = id;
}