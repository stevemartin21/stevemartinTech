var question = document.getElementsByClassName("question");
var icon = document.querySelectorAll('fa-arrow-down');
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        // This is a toggle method to go back and forth ont he next element sibling which is the answer div
        this.classList.toggle("active");
        // This represents the variable question which represents every representation of the variable class
        /* back and forth from answer to question and back */
        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}

// fa aarow up

// element.classList.remove("mystyle");

// My Listy


function listSearch() {
    //  Name Variables 
    let input;
    let filter;
    let ul;
    let li;
    let link;
    let i;

    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("teamList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        link = li[i].getElementsByTagName("a")[0];
        if (link.text.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

var thumb = document.querySelectorAll('.thumb');
console.log(thumb);

value.style.display= 'none';

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}