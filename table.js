function makeTable() {
  var table1 = document.getElementById("tab1");
  var rowCol = document.getElementById("rowsCol").value;

  for (var rowIndex = 0; rowIndex < rowCol; rowIndex++) {
    var tr = document.createElement("tr");

    for (var collIndex = 0; collIndex < rowCol; collIndex++) {
      var td = document.createElement("td");
      var inputTdOne = document.createElement("input");
      //   inputTdOne.setAttribute("id", value1);
      td.appendChild(inputTdOne);
      tr.appendChild(td);
    }
    table1.appendChild(tr);
  }

  var table2 = document.getElementById("tab1");
  var rowCol = document.getElementById("rowsCol").value;

  for (var rowIndex = 0; rowIndex < rowCol; rowIndex++) {
    var tr = document.createElement("tr");

    for (var collIndex = 0; collIndex < rowCol; collIndex++) {
      var td = document.createElement("td");
      var inputTdTwo = document.createElement("input");
      //   inputTdTwo.setAttribute("id", value2);
      td.appendChild(inputTdTwo);
      tr.appendChild(td);
    }

    table2.appendChild(tr);
  }

  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Tambah");
  x.appendChild(t);
  document.body.appendChild(x);
  x.addEventListener("click", function () {
    var hasil1 = document.getElementById("hasil1");
    var rowCol = document.getElementById("rowsCol").value;

    for (var rowIndex = 0; rowIndex < rowCol; rowIndex++) {
      var tr = document.createElement("tr");

      for (var collIndex = 0; collIndex < rowCol; collIndex++) {
        var td = document.createElement("td");
        var inputHasil = document.createTextNode("1");
        td.appendChild(inputHasil);
        tr.appendChild(td);
      }

      hasil1.appendChild(tr);
    }
  });
}

document.getElementById("make").addEventListener("click", makeTable);
