$(document).ready(function() {
    /*
    $ ('h2').css("text-decoration", "underline"); //underlines all h2 elements
    $ ('ul').css("border", "solid 1px #ccc"); //adds a 1px border to all lists
    */
    //instead
    $ ('h2').addClass("underline");
    $ ('ul').addClass("border");
});

//$("tr:odd").addClass("odd"); //adds class to all odd rows of the table
//$("tr:even").addClass("even"); //adds class to all even rows of the table