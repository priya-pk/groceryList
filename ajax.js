function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var Jlist = response.grocery;
            var output = "";
            for (var i = 0; i < Jlist.length; i++) {
                output += "<tr><td>" + Jlist[i].slNo + "</td><td>" + Jlist[i].Name + "</td><td>" + Jlist[i].Quantity + "</td><td>" + Jlist[i].Unit + "</td><td>" + Jlist[i].Department + "</td><td>" + Jlist[i].Notes + "</td></tr>"
            }
            document.getElementById("content").innerHTML = output;
        }
    }
    xhttp.open("GET", "list.json", true);
    xhttp.send();
}

















