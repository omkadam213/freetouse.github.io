let button = document.getElementById("maal")

button.addEventListener("click", function() {
    let boy = document.getElementById("firstname").value
    let girl = document.getElementById("lastname").value

    if (boy == "" || girl == "") {
        alert("please enter the fields");
    } else {
        var data = {
            boy: boy,
            girl: girl
        }

        var database = firebase.database();
        var ref = database.ref("lovers")

        ref.push(data)
    }
})