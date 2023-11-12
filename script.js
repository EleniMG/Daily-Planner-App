var currentTime = dayjs().format("dddd Do MMMM YYYY");
$("#currentDay").text(currentTime);

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timetableContainer = $(".container");

// Creating as many rows as there are hour entries
function createTimetableRows() {
  for (var i = 0; i < times.length; i++) {
    timetableContainer.append("<div></div>").children().addClass("row");
  }
}

createTimetableRows();

// Will need to save the input value to a variable
// An object will be needed to represent each hour and the entry for that hour

var schedule = [];
var currentSchedule = JSON.parse(window.localStorage.getItem("schedule")) || [];
var localStorageScheduleHasValues = currentSchedule.length > 0 // Returns a boolean, purpose is for the hourObject.task to be empty or the input value

$.each(times, function (index) {
  var hourObject = new Object();
  schedule.push(hourObject);
  hourObject.id = index;
  hourObject.hour = times[index];
  hourObject.task = localStorageScheduleHasValues ? currentSchedule[index].task : "";
})

console.log({ schedule }, { currentSchedule });

// Compiling Bootstrap grid columns using jQuery
var timeColumn = $("<div>").addClass("hour col-2");
var inputColumn = $("<input>")
  .addClass("description textarea col-8")
  .attr("name", "task-entry");
var buttonColumn = $("<button>").addClass("saveBtn col-2 col-btn btn-primary");
var timetableRow = $(".row");

timetableRow.append(timeColumn, inputColumn, buttonColumn);

// Adding the hours to the schedule
$(".hour").each(function (index) {
  $(this).text(schedule[index].hour);
});

// Adding an ID and data-attribute for each hour's input
$(".textarea").each(function (index) {
  $(this).attr("id", [index]);
  $(this).attr("data-index", [index]);
  $(this).val(schedule[index].task);
});

$(".saveBtn").each(function (index) {
  $(this).attr("id", [index]);
  $(this).attr("data-index", [index]);
});

// Adding save icon to the button
var svg = $(
  '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 5.75C3 4.23122 4.23122 3 5.75 3H15.7145C16.5764 3 17.4031 3.34241 18.0126 3.9519L20.0481 5.98744C20.6576 6.59693 21 7.42358 21 8.28553V18.25C21 19.7688 19.7688 21 18.25 21H5.75C4.23122 21 3 19.7688 3 18.25V5.75ZM5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H6V14.25C6 13.0074 7.00736 12 8.25 12H15.75C16.9926 12 18 13.0074 18 14.25V19.5H18.25C18.9404 19.5 19.5 18.9404 19.5 18.25V8.28553C19.5 7.8214 19.3156 7.37629 18.9874 7.0481L16.9519 5.01256C16.6918 4.75246 16.3582 4.58269 16 4.52344V7.25C16 8.49264 14.9926 9.5 13.75 9.5H9.25C8.00736 9.5 7 8.49264 7 7.25V4.5H5.75ZM16.5 19.5V14.25C16.5 13.8358 16.1642 13.5 15.75 13.5H8.25C7.83579 13.5 7.5 13.8358 7.5 14.25V19.5H16.5ZM8.5 4.5V7.25C8.5 7.66421 8.83579 8 9.25 8H13.75C14.1642 8 14.5 7.66421 14.5 7.25V4.5H8.5Z" fill="#212121"/> </svg>'
);
var saveButton = $(".saveBtn");
saveButton.append(svg);

// Create a function to save input text to local storage upon pressing save button
// The schedule object will need to be stringified to go into local storage
// The local storage will need to update the entry in the time block when save button is pressed

saveButton.on("click", function updateSchedule(event) {
  event.preventDefault();
  
  console.log(schedule);
  var currentID = Number(event.currentTarget.id);
  var inputValue = $(`input[id="${currentID}"]`).val();
  schedule[currentID].task = inputValue;

  localStorage.setItem("schedule", JSON.stringify(schedule));
  var currentSchedule = JSON.parse(window.localStorage.getItem("schedule"));

  $.each(currentSchedule, function (index) {
    // console.log(updatedSchedule[index].task)
    var stringIndex = String(index);
    $().text(currentSchedule[index].task);
  });

  console.log(inputValue, event, Number(event.currentTarget.id));
  console.log({ currentSchedule });
});

// function colourCodeTimeblocks(){
//     var currentHour = dayjs().format('k');

//     if (currentHour > (Number($('input[id'))))
//     console.log(currentHour);
// }

// colourCodeTimeblocks()

setInterval(resetSchedule, 1000)

function resetSchedule(){
    var currentHour = dayjs().hour();
    // var currentMinute = dayjs().minute();

    if(currentHour === 0){
        localStorage.removeItem('schedule');
        location.reload();
    }
}