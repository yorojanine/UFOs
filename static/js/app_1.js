// import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

doubleAddition = (c, d) => addition(c, d) * 2;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 listLoop(friends);

 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
    console.log("I love" + vegetables[i]) ;
    }
////////start for page building

// data.forEach((dataRow) => {
//     let row = tbody.append("tr");
//     Object.values(dataRow).forEach((val) => {
//     let cell = row.append("td");
//     cell.text(val);
//     }
//     );
// });

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  //function handleClick() {
function handleChange() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;

    // if-statement syntax
    //if ( condition ) { code to execute }

    // pseudocode practice
    //if (a date is entered) {
    //    Filter the default data to show only the date entered
    //};

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    };

 // d3.selectAll("#filter-btn").on("click", handleClick);
 d3.selectAll("input").on("change", handleChange);

  buildTable(tableData);