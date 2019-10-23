var data;
var age = [];
var substance = [];
var herointotalCount = 0;
var pharmacytotalCount = 0;
var unknowntotalCount = 0;
var heroinpharmacytotalCount = 0;
var maleCount = [];
var maleSum = 0;
var malePercent = 0;
var femaleCount = [];
var femaleSum = 0;
var femalePercent = 0;
var totalCount = 0;
var tenheroinCount = [];
var tenheroinSum = 0;
var tenpharmacyCount = [];
var tenpharmacySum = 0;
var tenunknownCount = [];
var tenunknownSum = 0;
var tenheroinpharmacyCount = [];
var tenheroinpharmacySum = 0;
var fifteenheroinCount = [];
var fifteenheroinSum = 0;
var fifteenpharmacyCount = [];
var fifteenpharmacySum = 0;
var fifteenunknownCount = [];
var fifteenunknownSum = 0;
var fifteenheroinpharmacyCount = [];
var fifteenheroinpharmacySum = 0;
var twentyheroinCount = [];
var twentyheroinSum = 0;
var twentypharmacyCount = [];
var twentypharmacySum = 0;
var twentyunknownCount = [];
var twentyunknownSum = 0;
var twentyheroinpharmacyCount = [];
var twentyheroinpharmacySum = 0;
var twentyfiveheroinCount = [];
var twentyfiveheroinSum = 0;
var twentyfivepharmacyCount = [];
var twentyfivepharmacySum = 0;
var twentyfiveunknownCount = [];
var twentyfiveunknownSum = 0;
var twentyfiveheroinpharmacyCount = [];
var twentyfiveheroinpharmacySum = 0;
var thirtyheroinCount = [];
var thirtyheroinSum = 0;
var thirtypharmacyCount = [];
var thirtypharmacySum = 0;
var thirtyunknownCount = [];
var thirtyunknownSum = 0;
var thirtyheroinpharmacyCount = [];
var thirtyheroinpharmacySum = 0;
var thirtyfiveheroinCount = [];
var thirtyfiveheroinSum = 0;
var thirtyfivepharmacyCount = [];
var thirtyfivepharmacySum = 0;
var thirtyfiveunknownCount = [];
var thirtyfiveunknownSum = 0;
var thirtyfiveheroinpharmacyCount = [];
var thirtyfiveheroinpharmacySum = 0;
var fourtyheroinCount = [];
var fourtyheroinSum = 0;
var fourtypharmacyCount = [];
var fourtypharmacySum = 0;
var fourtyunknownCount = [];
var fourtyunknownSum = 0;
var fourtyheroinpharmacyCount = [];
var fourtyheroinpharmacySum = 0;
var fourtyfiveheroinCount = [];
var fourtyfiveheroinSum = 0;
var fourtyfivepharmacyCount = [];
var fourtyfivepharmacySum = 0;
var fourtyfiveunknownCount = [];
var fourtyfiveunknownSum = 0;
var fourtyfiveheroinpharmacyCount = [];
var fourtyfiveheroinpharmacySum = 0;
var fiftyheroinCount = [];
var fiftyheroinSum = 0;
var fiftypharmacyCount = [];
var fiftypharmacySum = 0;
var fiftyunknownCount = [];
var fiftyunknownSum = 0;
var fiftyheroinpharmacyCount = [];
var fiftyheroinpharmacySum = 0;
var fiftyfiveheroinCount = [];
var fiftyfiveheroinSum = 0;
var fiftyfivepharmacyCount = [];
var fiftyfivepharmacySum = 0;
var fiftyfiveunknownCount = [];
var fiftyfiveunknownSum = 0;
var fiftyfiveheroinpharmacyCount = [];
var fiftyfiveheroinpharmacySum = 0;
var sixtyheroinCount = [];
var sixtyheroinSum = 0;
var sixtypharmacyCount = [];
var sixtypharmacySum = 0;
var sixtyunknownCount = [];
var sixtyunknownSum = 0;
var sixtyheroinpharmacyCount = [];
var sixtyheroinpharmacySum = 0;
var sixtyfiveheroinCount = [];
var sixtyfiveheroinSum = 0;
var sixtyfivepharmacyCount = [];
var sixtyfivepharmacySum = 0;
var sixtyfiveunknownCount = [];
var sixtyfiveunknownSum = 0;
var sixtyfiveheroinpharmacyCount = [];
var sixtyfiveheroinpharmacySum = 0;
var seventyheroinCount = [];
var seventyheroinSum = 0;
var seventypharmacyCount = [];
var seventypharmacySum = 0;
var seventyunknownCount = [];
var seventyunknownSum = 0;
var seventyheroinpharmacyCount = [];
var seventyheroinpharmacySum = 0;
var seventyfiveheroinCount = [];
var seventyfiveheroinSum = 0;
var seventyfivepharmacyCount = [];
var seventyfivepharmacySum = 0;
var seventyfiveunknownCount = [];
var seventyfiveunknownSum = 0;
var seventyfiveheroinpharmacyCount = [];
var seventyfiveheroinpharmacySum = 0;
var eightyheroinCount = [];
var eightyheroinSum = 0;
var eightypharmacyCount = [];
var eightypharmacySum = 0;
var eightyunknownCount = [];
var eightyunknownSum = 0;
var eightyheroinpharmacyCount = [];
var eightyheroinpharmacySum = 0;
var eightyfiveheroinCount = [];
var eightyfiveheroinSum = 0;
var eightyfivepharmacyCount = [];
var eightyfivepharmacySum = 0;
var eightyfiveunknownCount = [];
var eightyfiveunknownSum = 0;
var eightyfiveheroinpharmacyCount = [];
var eightyfiveheroinpharmacySum = 0;
var ninetyheroinCount = [];
var ninetyheroinSum = 0;
var ninetypharmacyCount = [];
var ninetypharmacySum = 0;
var ninetyunknownCount = [];
var ninetyunknownSum = 0;
var ninetyheroinpharmacyCount = [];
var ninetyheroinpharmacySum = 0;

$(document).ready(function() {
    loadData("data/charts.json");
});

function loadData(){
    $.ajax({
            type:"GET",
            url:"data/charts.json",
            dataType:"json",
            success: parseData

});

function parseData(data){
  for (var i = 0, len = data.length; i < len; ++i) {

            if (data[i]["Gender"] == "Male") {
              maleCount.push(data[i]["Count"]);
            }

            if (data[i]["Gender"] == "Female") {
              femaleCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Male Heroin"){
              tenheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Female Heroin"){
              tenheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Male Pharmacy"){
              tenpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Female Pharmacy"){
              tenpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Male Unknown"){
              tenunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Female Unknown"){
              tenunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Male Heroin AND Pharmacy"){
              tenheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Female Heroin AND Pharmacy"){
              tenheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Male Heroin"){
              fifteenheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Female Heroin"){
              fifteenheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Male Pharmacy"){
              fifteenpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Female Pharmacy"){
              fifteenpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Male Unknown"){
              fifteenunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Female Unknown"){
              fifteenunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Male Heroin AND Pharmacy"){
              fifteenheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "15-19 Female Heroin AND Pharmacy"){
              fifteenheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Male Heroin"){
              twentyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Female Heroin"){
              twentyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Male Pharmacy"){
              twentypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Female Pharmacy"){
              twentypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Male Unknown"){
              twentyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Female Unknown"){
              twentyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Male Heroin AND Pharmacy"){
              twentyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "20-24 Female Heroin AND Pharmacy"){
              twentyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Male Heroin"){
              twentyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Female Heroin"){
              twentyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Male Pharmacy"){
              twentyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Female Pharmacy"){
              twentyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Male Unknown"){
              twentyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Female Unknown"){
              twentyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Male Heroin AND Pharmacy"){
              twentyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "25-29 Female Heroin AND Pharmacy"){
              twentyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Male Heroin"){
              thirtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Female Heroin"){
              thirtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Male Pharmacy"){
              thirtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Female Pharmacy"){
              thirtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Male Unknown"){
              thirtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Female Unknown"){
              thirtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Male Heroin AND Pharmacy"){
              thirtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "30-34 Female Heroin AND Pharmacy"){
              thirtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Male Heroin"){
              thirtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Female Heroin"){
              thirtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Male Pharmacy"){
              thirtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Female Pharmacy"){
              thirtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Male Unknown"){
              thirtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Female Unknown"){
              thirtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Male Heroin AND Pharmacy"){
              thirtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "35-39 Female Heroin AND Pharmacy"){
              thirtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Male Heroin"){
              fourtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Female Heroin"){
              fourtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Male Pharmacy"){
              fourtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Female Pharmacy"){
              fourtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Male Unknown"){
              fourtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Female Unknown"){
              fourtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Male Heroin AND Pharmacy"){
              fourtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "40-44 Female Heroin AND Pharmacy"){
              fourtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Male Heroin"){
              fourtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Female Heroin"){
              fourtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Male Pharmacy"){
              fourtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Female Pharmacy"){
              fourtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Male Unknown"){
              fourtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Female Unknown"){
              fourtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Male Heroin AND Pharmacy"){
              fourtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "45-49 Female Heroin AND Pharmacy"){
              fourtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Male Heroin"){
              fiftyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Female Heroin"){
              fiftyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Male Pharmacy"){
              fiftypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Female Pharmacy"){
              fiftypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Male Unknown"){
              fiftyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Female Unknown"){
              fiftyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Male Heroin AND Pharmacy"){
              fiftyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "50-54 Female Heroin AND Pharmacy"){
              fiftyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Male Heroin"){
              fiftyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Female Heroin"){
              fiftyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Male Pharmacy"){
              fiftyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Female Pharmacy"){
              fiftyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Male Unknown"){
              fiftyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Female Unknown"){
              fiftyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Male Heroin AND Pharmacy"){
              fiftyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "55-59 Female Heroin AND Pharmacy"){
              fiftyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Male Heroin"){
              sixtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Female Heroin"){
              sixtyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Male Pharmacy"){
              sixtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Female Pharmacy"){
              sixtypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Male Unknown"){
              sixtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Female Unknown"){
              sixtyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Male Heroin AND Pharmacy"){
              sixtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "60-64 Female Heroin AND Pharmacy"){
              sixtyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Male Heroin"){
              sixtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Female Heroin"){
              sixtyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Male Pharmacy"){
              sixtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Female Pharmacy"){
              sixtyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Male Unknown"){
              sixtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Female Unknown"){
              sixtyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Male Heroin AND Pharmacy"){
              sixtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "65-69 Female Heroin AND Pharmacy"){
              sixtyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Male Heroin"){
              seventyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Female Heroin"){
              seventyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Male Pharmacy"){
              seventypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Female Pharmacy"){
              seventypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Male Unknown"){
              seventyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Female Unknown"){
              seventyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Male Heroin AND Pharmacy"){
              seventyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "70-74 Female Heroin AND Pharmacy"){
              seventyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Male Heroin"){
              seventyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Female Heroin"){
              seventyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Male Pharmacy"){
              seventyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Female Pharmacy"){
              seventyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Male Unknown"){
              seventyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Female Unknown"){
              seventyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Male Heroin AND Pharmacy"){
              seventyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "75-79 Female Heroin AND Pharmacy"){
              seventyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Male Heroin"){
              eightyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Female Heroin"){
              eightyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Male Pharmacy"){
              eightypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Female Pharmacy"){
              eightypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Male Unknown"){
              eightyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Female Unknown"){
              eightyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "10-14 Male Heroin AND Pharmacy"){
              eightyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "80-84 Female Heroin AND Pharmacy"){
              eightyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Male Heroin"){
              eightyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Female Heroin"){
              eightyfiveheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Male Pharmacy"){
              eightyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Female Pharmacy"){
              eightyfivepharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Male Unknown"){
              eightyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Female Unknown"){
              eightyfiveunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Male Heroin AND Pharmacy"){
              eightyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "85-89 Female Heroin AND Pharmacy"){
              eightyfiveheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Male Heroin"){
              ninetyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Female Heroin"){
              ninetyheroinCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Male Pharmacy"){
              ninetypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Female Pharmacy"){
              ninetypharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Male Unknown"){
              ninetyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Female Unknown"){
              ninetyunknownCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Male Heroin AND Pharmacy"){
              ninetyheroinpharmacyCount.push(data[i]["Count"]);
            }

            if (data[i]["Type"] == "90-94 Female Heroin AND Pharmacy"){
              ninetyheroinpharmacyCount.push(data[i]["Count"]);
            }
     }

var numbers = maleCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  maleSum += numbers[i]
}

var numbers = femaleCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  femaleSum += numbers[i]
}

var numbers = tenheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  tenheroinSum += numbers[i]
}

var numbers = tenpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  tenpharmacySum += numbers[i]
}

var numbers = tenunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  tenunknownSum += numbers[i]
}

var numbers = tenheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  tenheroinpharmacySum += numbers[i]
}

var numbers = fifteenheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fifteenheroinSum += numbers[i]
}

var numbers = fifteenpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fifteenpharmacySum += numbers[i]
}

var numbers = fifteenunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fifteenunknownSum += numbers[i]
}

var numbers = fifteenheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fifteenheroinpharmacySum += numbers[i]
}

var numbers = twentyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyheroinSum += numbers[i]
}

var numbers = twentypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentypharmacySum += numbers[i]
}

var numbers = twentyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyunknownSum += numbers[i]
}

var numbers = twentyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyheroinpharmacySum += numbers[i]
}

var numbers = twentyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyfiveheroinSum += numbers[i]
}

var numbers = twentyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyfivepharmacySum += numbers[i]
}

var numbers = twentyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyfiveunknownSum += numbers[i]
}

var numbers = twentyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  twentyfiveheroinpharmacySum += numbers[i]
}

var numbers = thirtyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyheroinSum += numbers[i]
}

var numbers = thirtypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtypharmacySum += numbers[i]
}

var numbers = thirtyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyunknownSum += numbers[i]
}

var numbers = thirtyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyheroinpharmacySum += numbers[i]
}

var numbers = thirtyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyfiveheroinSum += numbers[i]
}

var numbers = thirtyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyfivepharmacySum += numbers[i]
}

var numbers = thirtyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyfiveunknownSum += numbers[i]
}

var numbers = thirtyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  thirtyfiveheroinpharmacySum += numbers[i]
}

var numbers = fourtyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyheroinSum += numbers[i]
}

var numbers = fourtypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtypharmacySum += numbers[i]
}

var numbers = fourtyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyunknownSum += numbers[i]
}

var numbers = fourtyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyheroinpharmacySum += numbers[i]
}

var numbers = fourtyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyfiveheroinSum += numbers[i]
}

var numbers = fourtyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyfivepharmacySum += numbers[i]
}

var numbers = fourtyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyfiveunknownSum += numbers[i]
}

var numbers = fourtyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fourtyfiveheroinpharmacySum += numbers[i]
}

var numbers = fiftyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyheroinSum += numbers[i]
}

var numbers = fiftypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftypharmacySum += numbers[i]
}

var numbers = fiftyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyunknownSum += numbers[i]
}

var numbers = fiftyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyheroinpharmacySum += numbers[i]
}

var numbers = fiftyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyfiveheroinSum += numbers[i]
}

var numbers = fiftyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyfivepharmacySum += numbers[i]
}

var numbers = fiftyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyfiveunknownSum += numbers[i]
}

var numbers = fiftyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  fiftyfiveheroinpharmacySum += numbers[i]
}

var numbers = sixtyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyheroinSum += numbers[i]
}

var numbers = sixtypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtypharmacySum += numbers[i]
}

var numbers = sixtyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyunknownSum += numbers[i]
}

var numbers = sixtyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyheroinpharmacySum += numbers[i]
}

var numbers = sixtyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyfiveheroinSum += numbers[i]
}

var numbers = sixtyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyfivepharmacySum += numbers[i]
}

var numbers = sixtyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyfiveunknownSum += numbers[i]
}

var numbers = sixtyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  sixtyfiveheroinpharmacySum += numbers[i]
}

var numbers = seventyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyheroinSum += numbers[i]
}

var numbers = seventypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventypharmacySum += numbers[i]
}

var numbers = seventyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyunknownSum += numbers[i]
}

var numbers = seventyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyheroinpharmacySum += numbers[i]
}

var numbers = seventyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyfiveheroinSum += numbers[i]
}

var numbers = seventyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyfivepharmacySum += numbers[i]
}

var numbers = seventyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyfiveunknownSum += numbers[i]
}

var numbers = seventyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  seventyfiveheroinpharmacySum += numbers[i]
}

var numbers = eightyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyheroinSum += numbers[i]
}

var numbers = eightypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightypharmacySum += numbers[i]
}

var numbers = eightyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyunknownSum += numbers[i]
}

var numbers = eightyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyheroinpharmacySum += numbers[i]
}

var numbers = eightyfiveheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyfiveheroinSum += numbers[i]
}

var numbers = eightyfivepharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyfivepharmacySum += numbers[i]
}

var numbers = eightyfiveunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyfiveunknownSum += numbers[i]
}

var numbers = eightyfiveheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  eightyfiveheroinpharmacySum += numbers[i]
}

var numbers = ninetyheroinCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  ninetyheroinSum += numbers[i]
}

var numbers = ninetypharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  ninetypharmacySum += numbers[i]
}

var numbers = ninetyunknownCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  ninetyunknownSum += numbers[i]
}

var numbers = ninetyheroinpharmacyCount; // sums to 100
for (var i = 0; i < numbers.length; i++) {
  ninetyheroinpharmacySum += numbers[i]
}

  buildCharts();
  buildTable();
}
function buildCharts(){

  var herointotalCount = tenheroinSum+fifteenheroinSum+twentyheroinSum+twentyfiveheroinSum+thirtyheroinSum+thirtyfiveheroinSum+fourtyheroinSum+fourtyfiveheroinSum+fiftyheroinSum+fiftyfiveheroinSum+sixtyheroinSum+sixtyfiveheroinSum+seventyheroinSum+seventyfiveheroinSum+eightyheroinSum+eightyfiveheroinSum+ninetyheroinSum

  var pharmacytotalCount = tenpharmacySum+fifteenpharmacySum+twentypharmacySum+twentyfivepharmacySum+thirtypharmacySum+thirtyfivepharmacySum+fourtypharmacySum+fourtyfivepharmacySum+fiftypharmacySum+fiftyfivepharmacySum+sixtypharmacySum+sixtyfivepharmacySum+seventypharmacySum+seventyfivepharmacySum+eightypharmacySum+eightyfivepharmacySum+ninetypharmacySum;

  var unknowntotalCount = tenunknownSum+fifteenunknownSum+twentyunknownSum+twentyfiveunknownSum+thirtyunknownSum+thirtyfiveunknownSum+fourtyunknownSum+fourtyfiveunknownSum+fiftyunknownSum+fiftyfiveunknownSum+sixtyunknownSum+sixtyfiveunknownSum+seventyunknownSum+seventyfiveunknownSum+eightyunknownSum+eightyfiveunknownSum+ninetyunknownSum;

  var heroinpharmacytotalCount = tenheroinpharmacySum+fifteenheroinpharmacySum+twentyheroinpharmacySum+twentyfiveheroinpharmacySum+thirtyheroinpharmacySum+thirtyfiveheroinpharmacySum+fourtyheroinpharmacySum+fourtyfiveheroinpharmacySum+fiftyheroinpharmacySum+fiftyfiveheroinpharmacySum+sixtyheroinpharmacySum+sixtyfiveheroinpharmacySum+seventyheroinpharmacySum+seventyfiveheroinpharmacySum+eightyheroinpharmacySum+eightyfiveheroinpharmacySum+ninetyheroinpharmacySum;

  Highcharts.chart('pie-chart2', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Deaths by substance type'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: ''
      },
        colors: ['#003f5c','#bc5090'],
      series: [{
          name: 'Population',
          data: [
              ['Heroin/Street', herointotalCount],
              ['Pharmacy', pharmacytotalCount],
              ['Unknown', unknowntotalCount],
              ['Heroin/Street AND Pharmacy', heroinpharmacytotalCount]
          ],
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  });

var totalCount = maleSum + femaleSum;
var malePercent = (maleSum/totalCount)*100;
var femalePercent = (femaleSum/totalCount)*100;

Highcharts.chart('pie-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gender'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    colors: ['#003f5c','#bc5090'],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Male',
            y: malePercent,
            sliced: false,
            selected: false
        }, {
            name: 'Female',
            y: femalePercent
        }]
    }]
});

  Highcharts.chart('bar-chart', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Total deaths by age and substance type'
  },
  xAxis: {
    categories: ['10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total Deaths'
    }
  },
  legend: {
    reversed: false
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  colors: ['#bc5090', '#ffa600', '#ef5675', '#003f5c' ],
  series: [{
    name: 'Heroin/Street Drugs AND Pharmacy Drugs',
    data: [tenheroinpharmacySum, fifteenheroinpharmacySum, twentyheroinpharmacySum, twentyfiveheroinpharmacySum, thirtyheroinpharmacySum, thirtyfiveheroinpharmacySum, fourtyheroinpharmacySum, fourtyfiveheroinpharmacySum, fifteenheroinpharmacySum, fiftyfiveheroinpharmacySum, sixtyheroinpharmacySum, sixtyfiveheroinpharmacySum, seventyheroinpharmacySum, seventyfiveheroinpharmacySum, eightyheroinpharmacySum, eightyfiveheroinpharmacySum, ninetyheroinpharmacySum]
  },
     {
    name: 'Pharmacy Drugs',
    data: [tenpharmacySum,fifteenpharmacySum, twentypharmacySum, twentyfivepharmacySum, thirtypharmacySum, thirtyfivepharmacySum, fourtypharmacySum, fourtyfivepharmacySum, fiftypharmacySum, fiftyfivepharmacySum, sixtypharmacySum, sixtyfivepharmacySum, seventypharmacySum, seventyfivepharmacySum, eightypharmacySum, eightyfivepharmacySum, ninetypharmacySum]
  }, {
    name: 'Unknown',
    data: [tenunknownSum, fifteenunknownSum, twentyunknownSum, twentyfiveunknownSum, thirtyunknownSum, thirtyfiveunknownSum, fourtyunknownSum, fourtyfiveunknownSum, fiftyunknownSum, fiftyfiveunknownSum, sixtyunknownSum, sixtyfiveunknownSum, seventyunknownSum, seventyfiveunknownSum, eightyunknownSum, eightyfiveunknownSum, ninetyunknownSum]
  },
    {
    name: 'Heroin/Street Drugs',
    data: [tenheroinSum, fifteenheroinSum, twentyheroinSum, twentyfiveheroinSum, thirtyheroinSum, thirtyfiveheroinSum, fourtyheroinSum, fourtyfiveheroinSum, fiftyheroinSum, fiftyfiveheroinSum, sixtyheroinSum, sixtyfiveheroinSum, seventyheroinSum, seventyfiveheroinSum, eightyheroinSum, eightyfiveheroinSum, ninetyheroinSum]
    }]
});
  }
  }

function buildTable(){
  $('#myTable').DataTable( {
    ajax: {
      url: 'data/table.json',
      dataSrc: ''
  },
      columns: [
          { data: 'Age' },
          { data: 'Gender' },
          { data: 'Substance' },
          { data: 'Total Count' }
      ]
  }
);
}
