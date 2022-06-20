document.getElementById("but").addEventListener("click", all, false);
let re = /[a-wA-W]/;
function all() {
    let result = document.getElementById("input").value;
    if (result == "155" || result == "x = 155" || result == "x=155") {
        document.getElementById("there").innerHTML = "<div class='yes'><a title='Close' id='zakr' onclick='complete()' href='#'>&#10006;</a>Right! &#128515; &#128515; &#128515;</div>";
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                // Escape
                $(".yes").hide();
            }
        });
    } else if (re.test(result) === true) {
        alert("Please input your answer");
    } else if (result == "") {
        return;
    } else {
        document.getElementById("there").innerHTML = "<div class='no'><a title='Close' id='zokr' onclick='complete2()' href='#'>&#10006;</a>You should revise the math!</div>";
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                // Escape
                $(".no").hide();
            }
        });
    }
}
function complete() {$(".yes").hide();}
function complete2() {$(".no").hide();}
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        // Enter
        document.getElementById("but").click();
    }
});
//document.getElementById("color").value = document.body.style.backgroundColor;