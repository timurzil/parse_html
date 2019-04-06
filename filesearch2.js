const fs = require("fs");
const path = require("path");

module.exports = {
  


getFileList: function(start_dir,filter)
{
     
    if (!fs.existsSync(start_dir))
    {
        console.log("No such directory");
        return;
    }

    var files = fs.readdirSync(start_dir);
    // var filename, selected;
    filename = {
           };
    selected = {
        
    };

    var k = 0;
    for (i =0; i < files.length; i++)
    {
        var full_name = path.join(start_dir,files[i]);
        filename[i] = full_name;
        var stat = fs.lstatSync(full_name);
        if (!stat.isDirectory() && filename[i].indexOf(filter) >= 0)
        {
            selected[k] = filename[i];
            k++;
            
        }
    //console.log(filename[i]);
    //console.log(selected[k]);
    }

    return selected;

}

};