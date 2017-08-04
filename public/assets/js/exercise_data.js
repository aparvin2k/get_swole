$(document).ready(function() {

  var exerciseInput = $("#exercise-name");
  var exerciseList = $("tbody");
  var exerciseContainer = $(".exercise-container")

  $(document).on("submit", "#exercise-form", handleExerciseSubmit);
  $(document).on("click", ".delete-exercise", handleDeleteButtonPress);

  var url = window.location.search;
  var exerciseId;

  if (url.indexOf("?exercise_id=") !== -1) {
    exerciseId = url.split("=")[1];
    getExerciseData(exerciseId, "exercise");
  }

    getExercises();

  // A function to handle what happens when the form is submitted to create a new Author
    function handleExerciseSubmit(event) {
      event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
      if (!exercise_nameInput.val().trim() || !weightInput.val().trim() || !set_1Input.val() || !set2Input.val() || !set3Input.val()) {
          return;
      }
    // Constructing a newPost object to hand to the database
      var newExercise = {
          exercise_name: $("#exercise-name")
            .val()
            .trim(),
          weight: $("#row-weight")
            .val()
            .trim(),
          set_1: $("#row-set1")
            .val(),
          set_2: $("#row-set2")
            .val(),
          set_3: $("#row-set3")
            .val()
        };
        console.log(newExercise);
        submitExercise(newExercise);
      }

  // Submits a new post and brings user to blog page upon completion
  function submitExercise(post) {
    $.post("/api/exercise", post, function() {
      window.location.href = "/index";
    });
  }

  // Function for creating a new list row for authors
  function createExerciseRow(exerciseData) {
    console.log(exerciseData);
    var newTr = $("<tr>");
    newTr.data("exercises", exerciseData);
    newTr.append("<td>" + exerciseData.exercise_name + "</td>");
    newTr.append("<td>" + exerciseData.weight + "</td>");
    newTr.append("<td>" + exerciseData.set_1 + "</td>");
    newTr.append("<td>" + exerciseData.set_2 + "</td>");
    newTr.append("<td>" + exerciseData.set_3 + "</td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-exercise'>Delete Exercise</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getExercises() {
    $.get("/api/index", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createExerciseRow(data[i]));
      }
      renderExerciseList(rowsToAdd);
      $("#exercise-name").val("");
      $("#row-weight").val("");
      $("#row-set1").val("");
      $("#row-set2").val("");
      $("#row-set3").val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderExerciseList(rows) {
    exerciseList.children().not(":last").remove();
    exerciseContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      exerciseList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no exercises
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.html("You must enter your Exercise before you can post it to the page.");
    exerciseContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/index/" + id
    })
    .done(getExercisess);
  }
});