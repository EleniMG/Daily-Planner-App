var currentTime = dayjs().format("dddd Do MMMM YYYY");
$('#currentDay').text(currentTime);

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timetableContainer = $('.container');



/* <div class="col-2">col</div>
<div class="col-8">col</div>
<div class="col-2"><button type="button" class="btn btn-primary"></button></div>*/


function createTimetableRows(){
    for (var i = 0; i < times.length; i++){
        timetableContainer.append('<div></div>').children().addClass('row');
    }
}

createTimetableRows()


var timeColumn = $('<div>').addClass("hour col-2");
var inputColumn = $('<input>').addClass("description textarea col-8");
var buttonColumn = $('<button>').addClass("saveBtn col-2 col-btn btn-primary");
var timetableRow = $('.row');

timetableRow.append(timeColumn,inputColumn,buttonColumn)

$('.hour').each(function(index){
    $(this).text(times[index])
    }
)