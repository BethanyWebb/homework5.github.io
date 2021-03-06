var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("currentDay").innerHTML = days[d.getDay()];


$(document).ready(function(){

$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})

// hour updater
function hourUpdater(){
    // gets the current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        // check to see if we have passed this time
        if(blockHour < currentHour){
            $(this).addClass("past");
        }
        else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else 
        {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }


    });
}

// calling hour updater
hourUpdater();

var interval = setInterval(hourUpdater, 15000);
// loading local storage saved

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
$("#hour-21 .description").val(localStorage.getItem("hour-21"));
$("#hour-22 .description").val(localStorage.getItem("hour-22"));
$("#hour-23 .description").val(localStorage.getItem("hour-23"));
$("#hour-24 .description").val(localStorage.getItem("hour-24"));


// displaying current day on the page

$("currentDay").text(moment().gormat("dddd, MMM Do"));
});