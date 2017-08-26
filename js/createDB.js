function createPicturesTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);

    db.transaction(function (trans) {

        //create table
        trans.executeSql("CREATE TABLE pictures " +
            "(author_id INTEGER, " +
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
            [4, "img/0001.jpg", "Painting \"Flowers\"", 540.80, 23,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0002.jpg", "Painting \"Draw\"", 540.80, 11,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0003.jpg", "Painting \"Ice cream\"", 1045.48, 1024,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [3, "img/0004.jpg", "Painting \"Nature\"", 238.42, 1,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0005.jpg", "Painting \"Currant\"", 500.42, 9,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [5, "img/0006.jpg", "Painting \"Forest\"", 720.77, 10,
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
            [3, "img/0008.jpg", "Painting \"Grass\"", 729.35, 89,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0009.jpg", "Painting \"Horse\"", 1129.35, 89,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0010.jpg", "Painting \"Paints\"", 50.100, 23,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0011.jpg", "Painting \"Lady\"", 869.39, 38,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0012.jpg", "Painting \"Deer\"", 48.85, 25,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0013.jpg", "Painting \"Nature\"", 540.80, 23,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0014.jpg", "Painting \"Food\"", 967.49, 389,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [3, "img/0015.jpg", "Painting \"Milk shake\"", 547.48, 378,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [4, "img/0016.jpg", "Painting \"Sunset\"", 69.14, 260,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

         trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [5, "img/0017.jpg", "Painting \"Freedom\"", 54.38, 237,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0018.jpg", "Painting \"Mountains\"", 480.87, 380,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0019.jpg", "Painting \"Snow\"", 479.24, 146,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0020.jpg", "Painting \"Japan\"", 540.80, 23,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0021.jpg", "Painting \"Lemon\"", 887.80, 147,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0022.jpg", "Painting \"Macarons\"", 2837.87, 1838,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [3, "img/0023.jpg", "Painting \"Poppy\"", 887.80, 147,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [4, "img/0024.jpg", "Painting \"Height\"", 328.49, 268,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [5, "img/0025.jpg", "Painting \"Bull\"", 579.38, 395,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0026.jpg", "Painting \"Wind turbine\"", 455.49, 485,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0027.jpg", "Painting \"Wall\"", 487.49, 357,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0028.jpg", "Painting \"Star park\"", 135.89, 147,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0029.jpg", "Painting \"Beach sunset\"", 246.79, 485,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [3, "img/0030.jpg", "Painting \"Wind turbine\"", 146.79, 357,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [4, "img/0031.jpg", "Painting \"Tiger\"", 179.79, 56,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [5, "img/0032.jpg", "Painting \"Tram\"", 589.73, 58,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0033.jpg", "Painting \"Waterfall\"", 245.73, 157,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0034.jpg", "Painting \"Forest\"", 859.19, 179,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0035.jpg", "Painting \"Man\"", 699.99, 511,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [2, "img/0036.jpg", "Painting \"Cat\"", 978.68, 86,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [3, "img/0037.jpg", "Painting \"Gorilla\"", 79.90, 88,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [4, "img/0038.jpg", "Painting \"Gecko\"", 688.84, 52,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [5, "img/0039.jpg", "Painting \"Model\"", 755.88, 74,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [6, "img/0040.jpg", "Painting \"Turtle\"", 98.35, 99,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [7, "img/0041.jpg", "Painting \"Seascape\"", 467.53, 103,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);

        trans.executeSql("INSERT INTO pictures " +
            "(author_id, image_url, picture_name, price, likes, series, complexity, instock) " +
            "values (?, ?, ?, ?, ?, ?, ?, ?)",
            [1, "img/0042.jpg", "Painting \"Bridge\"", 832.87, 74,
                "Painting on canvas with a colored stencil", "For experienced", "y"],
            null, null);
    });
}

function createAuthorsTable() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    db.transaction(function (trans) {
        //create table
        trans.executeSql("CREATE TABLE authors " +
            "(name TEXT, " +
            "avatar_url TEXT, " +
            "status TEXT)");

        //start insertion
        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Snow White", "img/avatars/snow_white.png", "@snow white"],
                null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Anzhela", "img/avatars/anzhela.jpg", "@snow white"],
            null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Arthur", "img/avatars/arthur.jpg", "@snow white"],
            null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Anton", "img/avatars/anton.jpg", "@snow white"],
            null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Ilya", "img/avatars/ilya.jpg", "@snow white"],
            null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Nastik", "img/avatars/nastik.jpg", "@snow white"],
            null, null);

        trans.executeSql("INSERT INTO authors " +
            "(name, avatar_url, status) " +
            "values (?, ?, ?)",
            ["Olia", "img/avatars/olia.jpg", "@snow white"],
            null, null);

    });
}

function createOrders() {
    db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);
    db.transaction(function (trans) {
        //create db
        trans.executeSql("CREATE TABLE orders (picture_id INTEGER)");
    });
}