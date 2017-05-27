/*
   Calculating are of circle
*/
function areaOfCircle() {
   
    var constPI = 3.14;

    /* assumed values will be always numeric, validation is not done */
    var radius = document.getElementById("txtRadius").value;
    console.log("Radius :" + radius);

    var area = constPI * radius * radius;
    document.getElementById("lblArea").innerText = "Area of circle is " + area;
    console.log("Area of circle is :" + area);

}