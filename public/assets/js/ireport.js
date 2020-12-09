// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-solved").on("click", function (event) {
        var id = $(this).data("id");
        console.log("id", id);
        var newsolved = $(this).data("newsolved");
        console.log("newsolved", newsolved);

        var newSolvedState = {
            solved: newsolved,
        };
        console.log("newSolvedState", newSolvedState);
        // Send the PUT request.
        $.ajax("/api/ireport/" + id, {
            type: "PUT",
            data: newSolvedState
        }).then(
            function () {
                console.log("changed solved to", newsolved);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("event_report")
        var newReport = {
            event_name: $("#event_report").val().trim(),
            place_name: $("#place_report").val().trim()

        };
        console.log(newReport);

        // Send the POST request.
        $.ajax("/api/ireport", {
            type: "POST",
            data: newReport
        }).then(
            function () {
                console.log("created new report");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
