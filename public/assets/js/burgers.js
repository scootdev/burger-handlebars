$(() => {
    $(".eat-burger").on("click", function(event) {
        const id = $(this).data("id");

        const eaten = {
            eaten: true
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: eaten
        }).then(() => {
            console.log("burger eaten");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            eaten: 0
        };

        $.ajax(`/api/burgers`, {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("cooked new burger");
            location.reload();
        });
    });

    $(".return-burger").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(() => {
            console.log(`returned burger ${id}`);
            location.reload();
        });
    });
});