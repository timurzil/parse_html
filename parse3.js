module.exports = {

    extract_class_and_element: function(filename, class_id,element)
    {
   
       const jsdom = require("jsdom");
       const { JSDOM } = jsdom;
   
   var nodelist_1 ;
   var nodelist_2 ;
   var drug_1 =
   {
    Brand_name:"",   
    Generic_name:"",
       
   
   };
   
   
   return new Promise(function (resolve , reject) {
   const mydom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
   //console.log(mydom.window.document.querySelector("p").textContent);
   
   JSDOM.fromFile(filename).then(mydom => {
   //console.log(mydom.window.document.querySelector("title").innerHTML);
   
   nodelist_1 = mydom.window.document.getElementsByClassName(class_id);
   
   // console.log(mydom.window.document.querySelectorAll('li')[0].innerHTML);
   
   nodelist_2 = nodelist_1[0].querySelectorAll(element);
   
   drug_1.Generic_name = nodelist_2[0].innerHTML;
   drug_1.Brand_name = nodelist_2[1].innerHTML;
   
   drug_1.Generic_name = drug_1.Generic_name.replace("Generic Name: <span>","");
   drug_1.Generic_name = drug_1.Generic_name.replace("</span>","");
   
   drug_1.Brand_name = drug_1.Brand_name.replace("Brand Name: <span>","");
   drug_1.Brand_name = drug_1.Brand_name.replace("</span>","");
   
   
   // console.log(drug_1.Brand_name);
   // console.log(drug_1.Generic_name);
   
   if ( nodelist_2 !== undefined ) resolve(drug_1);
       
   
   });
   
   });
   
   }
   
   };