var db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var checkGallery = "SELECT * FROM pictures";
var checkAuthors = "SELECT * FROM authors";

if (!db) {
    alert("Failed to connect database")
}

db.transaction(function (trans) {
    trans.executeSql(checkGallery, [], null, function (tx, error) {
        createPicturesTable();
    });
    trans.executeSql(checkAuthors, [], null, function (tx, error) {
        createAuthorsTable();
    });

});
