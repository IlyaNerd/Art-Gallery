db = openDatabase("ToDo", "0.1", "A list of to do items.", 200000);

db.transaction(function(tx) {
    tx.executeSql("SELECT COUNT(*) FROM ToDo", [], function (result) { alert('dsfsdf') }, function (tx, error) {
        tx.executeSql("CREATE TABLE ToDo (id REAL UNIQUE, label TEXT, timestamp REAL)", [], null, null);
        tx.executeSql("INSERT INTO ToDo (label, timestamp) values(?, ?)", ["Купить iPad или HP Slate", new Date().getTime()], null, null);
    })});

db.transaction(function(tx) {
});

db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM ToDo", [], function(tx, result) {
        for(var i = 0; i < result.rows.length; i++) {
            document.write('<b>' + result.rows.item(i)['label'] + '</b><br />');
        }}, null)});