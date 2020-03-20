var FileSaver = require('file-saver');
var oReq = new XMLHttpRequest();

// oReq.open("GET", agro_1, true);



export function downloadFactsheet(factSheet, factSheetName){

        oReq.open("GET", factSheet, true);
        oReq.responseType = "blob";

        oReq.onload = function() {

            var file = new Blob([oReq.response], { 
                type: 'application/pdf' 
            });

            FileSaver.saveAs(file, factSheetName);
        };

        oReq.send();
}