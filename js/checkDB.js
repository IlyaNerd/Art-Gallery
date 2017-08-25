var db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
var checkGallery = "SELECT * FROM pictures";
var checkAuthors = "SELECT * FROM authors";

if (!db) {
    alert("Failed to connect database")
}

// dropPicturesTable();
// dropAuthorsTable();

db.transaction(function (trans) {
    trans.executeSql(checkGallery, [], function (tx, response) {
        if(response.rows.length!==10) {
            dropPicturesTable();
            createPicturesTable();
        }
    }, function (tx, error) {
        createPicturesTable();
    });


    trans.executeSql(checkAuthors, [],
        function (tx, response) {
            if(response.rows.length!==7) {
                dropAuthorsTable();
                createAuthorsTable();
            }
        },
        function (tx, error) {
        createAuthorsTable();
    });

});

function dropPicturesTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);

    db.transaction(function (trans) {
        trans.executeSql("DROP TABLE pictures", [], null, null);
    });
}

function dropAuthorsTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    db.transaction(function (trans) {
        trans.executeSql("DROP TABLE authors", [], null, null);
    });
}
