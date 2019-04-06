const fs = require("fs");


function convert_array_to_CSV(arguments)
{
    var result, counter, keys, column_delimiter, row_delimiter, data1;

    data1 = arguments.data || null;

    if (data1 == null || !data1.length)
    {
        console.log("nothing there!")
        return null;    
    }

    column_delimiter = arguments.column_delimiter || ";";
    row_delimiter = arguments.row_delimiter || "\n";

    keys = Object.keys(data1[0]);

    result = '';
    result += keys.join(column_delimiter);
    result +=row_delimiter;

    data1.forEach(function(item) {
        counter = 0;
        keys.forEach(function(key) {
            if (counter > 0) result += column_delimiter;
            result +=item[key];
            counter++;      
            })
        result += row_delimiter;

    });
  // console.log(result);
    return result;

}

module.exports =  {

     write_CSV: function(arguments)
{
    var data, filename, link;

    var CSV_data = convert_array_to_CSV({
        data: arguments.data
        });
    if (CSV_data == null) return;
    
    filename = arguments.filename || 'export.csv';

//    if (!CSV_data.match(/^data:text\/csv/i)) {
//        CSV_data = 'data:text/csv;charset=utf-8,' + CSV_data;
//    }

    fs.writeFile(filename, CSV_data, function(err) {
        if (err) 
            {
                console.log("Error!");
            }
    
    
    console.log("The file was saved!");

    });


},

download_CSV:function(arguments)
{
    var data, filename, link;

    var CSV_data = convert_array_to_CSV({
        data: arguments.data
        });
    if (CSV_data == null) return;
    
    filename = arguments.filename || 'export.csv';

    if (!CSV_data.match(/^data:text\/csv/i)) {
        CSV_data = 'data:text/csv;charset=utf-8,' + CSV_data;
    }

    data = encodeURI(CSV_data);

    link = global.document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
    
}
};