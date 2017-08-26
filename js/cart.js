db = openDatabase("gallery", "1.0", "DB with pictures", 2 * 1024 * 1024);

var query = "SELECT * FROM orders ord " +
    "INNER JOIN pictures pic ON ord.picture_id = pic.rowid ";

db.transaction(function (trans) {
    trans.executeSql(query, [], function (tx, result) {
        for(var i=0; i<result.rows.length;i++){

            var tr = document.createElement("tr");
           var pic_name = result.rows.item(i)['picture_name'];
           var price = result.rows.item(i)['price'];
           var pic_url = result.rows.item(i)['image_url'];
           var instock1 = result.rows.item(i)['price'];
           var instock;
           if(instock1 === "y"){
               instock = "In stock";
           }else{
               instock = "Not in stock";
           }


           tr.innerHTML = "<td width=\"5%\" align=\"center\" valign=\"center\">\n" +
               "                <input type=\"checkbox\">\n" +
               "            </td>\n" +
               "            <td width=\"16%\"><img src=\""+ pic_url + "\" width=\"100%\" class=pic1>\n" +
               "            </td>\n" +
               "            <td class=itemtext>\n" +
               "                <div class=itemname>" + pic_name + "</div>\n" +
               "                <div>" + instock + "</div>\n" +
               "                <br>\n" +
               "                <div class=itemprice>" + price + "</div>\n" +
               "            </td>"


           document.getElementsByClassName("insert")[0].appendChild(tr);
       }
    }, function (tx, err) {
        alert(err.message);
    });
});