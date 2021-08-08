//in the card classes, we want to dynamically input tasks into unordered lists for each hour of the day w/ an: id- toDO, class- list-group
var createTask = function(event) {
    var selectedTime = event.target.id;
    var timeTask= $("." + selectedTime + "-task").val();
    console.log(timeTask);
    console.log($(event).parent().attr("id"));
    //create elements that make a task item
    var taskDate = $("#<>")
    $("submit-btn").on("click", createTask);
    //target ul and li w p element 
    var taskLi = $("<ul>").addClass("list-group");
    var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill");
    var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText)
    .text(taskDate);

    //append child p and span element to parent li card element
    taskLi.append(taskSpan, taskP);

    //append to ul list on the page
    $("#list-" + taskList).append(taskLi);
};

var deleteTasks = function(event) {
    var taskLi = $("<ul>")
    .trim(taskText);
};
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //if nothing is in localStorage, create a new object to track all task status arrays
    if (!tasks) {
        tasks = {
            toDo: []
        };
    }
    //loop over object properties
    $.each(tasks, function(list,arr) {
        //then loop over sub-array
        arr.forEach(function(task) {
            createTask(task.text, task.date, list);
        });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var auditTask = function(taskEl) {
    //get date from task element
    var date = $(taskEl)
    .find("p")
    .text()
    .trim();

    console.log(date);
    //convert to moment object at 12pm
    var time = moment(date, "L".set("hour", 24));
    console.log(time);

    //remove any old classes from element
    $(taskEl).removeClass("list-group");
}
$(".submit-btn").on("click", createTask);
$("#remove-tasks").on("click", deleteTasks);