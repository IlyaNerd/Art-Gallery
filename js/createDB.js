function createPicturesTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);

    db.transaction(function (trans) {

        //create table
        trans.executeSql("CREATE TABLE pictures " +
            "(id INTEGER UNIQUE, " +
            "author_id INTEGER, " +
            "image_url TEXT, " +
            "picture_name TEXT, " +
            "price REAL, " +
            "likes INTEGER, " +
            "series TEXT, " +
            "complexity TEXT, " +
            "instock TEXT(1))", [], null, null);

        //start insertion
        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0000.jpg", "Snow White", 45.48, 28,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0001.jpg", "Painting \"Flowers\"", 540.80, 23,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0002.jpg", "Painting \"Draw\"", 540.80, 11,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0003.jpg", "Painting \"Ice cream\"", 1045.48, 1024,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0004.jpg", "Painting \"Nature\"", 238.42, 1,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0005.jpg", "Painting \"Currant\"", 500.42, 9,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0006.jpg", "Painting \"Forest\"", 720.77, 10,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0007.jpg", "Painting \"Сlock\"", 48.48, 155,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0008.jpg", "Painting \"Grass\"", 729.35, 89,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);


    });
}

function createAuthorsTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    db.transaction(function (trans) {
        //create table
        trans.executeSql("CREATE TABLE authors " +
            "(id INTEGER UNIQUE PRIMARY KEY, " +
            "author_name TEXT, " +
            "author_avatar_url TEXT, " +
            "status TEXT)")
    });
}