

$(document).ready(function(){
var Chart = require('Chart.js');

var chartData = {
    data: {
        labels:[1,2,3,4,5],
        datasets: [{
            label: 'progress',
            data: [5,7,12,20,25],
            backgroundColor: [
                'rgba(200, 200, 200, 1)'
            ],
            borderColor:[
                'rgba(200, 200, 200, 1)'
            ]

        }],
    }
};
var ctx = document.getElementById("chart");

var progChart = new Chart(ctx, {
    type: 'area',
    data: chartData
})

});


//get data for each exercise


//return number to represent specific exercise

var exArray = [];

function getTotalLifted(){
    var exTotal = 0
    for (var i = 0; i < exDataArray.length; i++) {
        var TL = (exArray[i].weight1 * exArray.set1) + (exArray[i].weight2 * exArray.set2) + (exArray[i].weight3 * exArray.set3);
        TL.push(exArray);
    }
}

// return number to represent all exercises for a muscle group

var catArray = []; //meow
function getCatTotal(){
    var catTotal = 0;
    for (var i = 0; i < catTotalArray.length; i++) {
        catTotal += catTotalArray[i]
        catTotal.push(catArray);
    }

}



















