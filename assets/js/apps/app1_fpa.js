// APP1   -    Υπολογισμός ΦΠΑ


//get value from user and add VAT
    //set variables
    var exvat = 0;
    var inclvat = 0;
    var vatamount = 0;
    var totalamount = 0;
    var vatpercentage;

function addVAT() {
    //Παίρνουμε το value απο το input
    var exvat = document.getElementById('input').value;
    vatpercentage = document.getElementById('input_per').value;
    (!vatpercentage) ? vatpercentage = 24 : vatpercentage = parseFloat(vatpercentage);
    document.querySelector('.fpa_per').innerHTML = vatpercentage;
    //Metatropi string se arithmo
    exvat = parseFloat(exvat);
    //To poso tou FPA kai Metatropi arithmou se string kai afairesi mi epithimitwn xaraktirwn 
    vatamount = currencyFormat(parseFloat(((exvat * vatpercentage) / 100)));
    // To sinoliko poso
    totalamount = currencyFormat(parseFloat(exvat * ( 100 + vatpercentage ) / 100 ));
    // To poso xwris to FPA
    exvat_converted = currencyFormat(parseFloat(exvat));
    document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
    document.getElementById('exclude_vat').innerHTML = exvat_converted;
    document.getElementById('vat').innerHTML = vatamount;
    document.getElementById('include_vat').innerHTML = totalamount;
}

//get value from user and exclude VAT
function exclVAT() {
    //calculations
    var inclvat = document.getElementById('input').value;
    inclvat = parseFloat(inclvat);
    vatamount = currencyFormat(parseFloat(Math.abs(inclvat - (inclvat / ( 1 + vatpercentage/100)))));
    totalamount = currencyFormat(parseFloat(inclvat / ( 1 + vatpercentage/100)));
    // vatamount = currencyFormat(parseFloat(Math.abs(
        
    //     inclvat / (vatpercentage / 100) - inclvat
        
    //     )));  
   
    inclvat_converted = currencyFormat(parseFloat(inclvat));
    document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
    document.getElementById('include_vat').innerHTML = inclvat_converted;
    document.getElementById('vat').innerHTML = vatamount;
    document.getElementById('exclude_vat').innerHTML = totalamount;
    document.getElementById('addResult').className = "panel panel-success fade in";
    document.getElementById('addResult').style.backgroundColor = "#dbf6ff";
}

// // Reset form
// function resetCalc() {
//     document.getElementById("calcForm").reset();
//     document.getElementById('exclude_vat').innerHTML = exvat_converted;
//     document.getElementById('vat').innerHTML = vatamount;
//     document.getElementById('include_vat').innerHTML = totalamount;
//     document.getElementById('include_vat').innerHTML = inclvat_converted;

// }

//currency formatting
function currencyFormat(num) {
    var exvat = 0;
    var inclvat = 0;
    var vatamount = 0;
    var totalamount = 0;
    // The toFixed() method converts a number into a string, keeping a specified number of decimals.
    return "&euro;" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

