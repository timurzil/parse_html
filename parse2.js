const fs = require("fs");
var parse_description = require("./parse3.js");
var filelist = require("./filesearch2.js");
var csv = require("./csv.js");

var drug=
{
    Brand_name:"",
    Generic_name:"",
    

};

var results;

var my_list;
var num_of_files;
var n = 0;
var dir_drugs ="D:\\Archive\\RxList\\www.rxlist.com\\_TEMP\\";
// var log = document.getElementById('log');


var name_collection = {
    data: [ ],
    filename: "my_CSV_2.csv",
    column_delimiter: ";"
    
}
var name_collection2 = {
    data: [ ],
    filename: "my_CSV_2.csv",
    column_delimiter: ";"
    
}

function write_to_array(k, drug1)
{
    var this_n = ++n;
    console.log("Results ",name_collection.data[this_n],this_n,k);
    console.log("Results All",name_collection.data);
    return name_collection.data[this_n] = drug1;


}

my_list = filelist.getFileList(dir_drugs,"-drug.html");
num_of_files = Object.keys(my_list).length;

for (l =0; l < num_of_files; l++)
 {
//     console.log(my_list[l]);    
// }


parse_description.extract_class_and_element(my_list[l],"hero","li")
.then(
// ((results) => 
// {
// drug.Generic_name = results.Generic_name;
// drug.Brand_name = results.Brand_name;
    // for (i = 1; i < 999; i++)
    // {
    //     n = i;
    //    // console.log(n," ", i, name_collection.data[i]);
    //     if ( !(name_collection.data[n])) { i = 1111;}
        
    // }

    (function (x)  
        {

        return function (drug1) { name_collection.data[x] = drug1;
         // console.log("Results ",name_collection.data,x);
         csv.write_CSV(name_collection);
          
        }  
      //  write_to_array(l,drug);
      
        })(l)
    // console.log("Results ",name_collection.data[this_n],this_n,k);
   
//csv.write_CSV(name_collection.data[l]);
//}
)
.catch((e) => console.log("Error"));
 }

 


function isReady(my_result)
{
console.log(my_result);

}

