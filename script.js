//Clock
$(document).ready(function () {
    setInterval(() => {
        var now = moment();
        var readable = now.format("h:mm:ssa");
        $("#currentTime").text(readable);
    }, 1000);

    //Variables
    let now = moment();
    let date = now.format("dddd MMM Do YYYY");
    let h = now.format("H");

    //load local storage data on page when page is loaded
    var textEls = document.querySelectorAll(".text");
    for (t = 0; t < textEls.length; t++) {
        var textEl = textEls[t];
        var textData = localStorage.getItem(textEl.id);
        textEl.textContent = textData;
    }

    //Add date to the top of the page
    $("#currentDay").append(date);

    // set background color of the text area containers to green(future),red(now) and grey(past)   
    for (let i = 9; i < 18; i++) {
        if (i == h) {
            $("#color" + (i)).attr("style", "background: #FA5858");
        }
        else if (i < h) {
            $("#color" + (i)).attr("style", "background: #E6E6E6");
        }
        else if (i > h) {
            $("#color" + (i)).attr("style", "background: #82FA58");
        };
    };

    // Gives an array of all the html elements with class "save-img"
    var saveImgs = document.querySelectorAll('.save-img');


    for (p = 0; p < saveImgs.length; p++) {
        // This attaches the click event listener to each save button
        saveImgs[p].addEventListener("click", clickedElement);
    }

    function clickedElement(e) {
        // e.target.id looks like save-img9
        // we want to transform it to look like text9
        var textID = e.target.id.replace("save-img", "text");
        var textElement = document.getElementById(textID);
        localStorage.setItem(textID, textElement.value);
        console.log(e);
    }
});