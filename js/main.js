$(document).ready(function() {
    if (!localStorage.getItem("carsArray")) {
        localStorage.setItem("carsArray", JSON.stringify([{
            company: "mazda",
            model: "mazda 6",
            color: "red",
            horsePower: "250hp",
            cilinders: "6"
        }]));
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);

    } else {
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);
        printCars();
    }

});

var mazdaCars;



function printCars() {
    $("#History-cars").empty();
    console.log("printCars");
    for (i = 0; i < mazdaCars.length; i++) {
        //debugger;
        var objeto1 = mazdaCars[i];
        console.log(objeto1);
        var carCompany = objeto1.company;
        var carModel = objeto1.model;
        var carColor = objeto1.color;
        var carHP = objeto1.horsePower;
        var carCilinders = objeto1.cilinders;
        console.log(carCompany, carModel, carColor, carHP, carCilinders);
        var rowHtml = "<h5>" +carCompany+"</h5>"+
				"<p>"+carModel+"</p>"
        $("#History-cars").append(rowHtml);
    }
}

function getCarData() {
    var carCompany = $("#car-company").val();
    var carModel = $("#car-model").val();
    var carColor = $("#car-color").val();
    var carHp = $("#car-horse-power").val();
    var carCilinders = $("#car-cilinders").val();
    console.log(carCompany, carModel, carColor, carHp, carCilinders);
    var carObject = {
        company: carCompany,
        model: carModel,
        color: carColor,
        horsePower: carHp,
        cilinders: carCilinders
    }
    mazdaCars.push(carObject);
    printCars();
    console.log(mazdaCars)
    $("#add-car-form input").val("");

    var carsString = JSON.stringify(mazdaCars)

    localStorage.setItem("carsArray", carsString);
}

$("#submit-button").on("click", function() {
    getCarData();
});
