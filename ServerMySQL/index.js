const mysql = require("mysql");
const express = require("express");
var app = express();
const cors = require("cors");
const getFunc = require("./exportsFunctions");

app.use(cors());
app.use(express.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "La44w0rd",
  database: "students",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DB Connect");
  } else {
    console.log("DB not Connect");
  }
});

app.listen(3000, () =>
  console.log("Express server is running at port no: 3000!")
);

getFunc.getData(app, mysqlConnection);
getFunc.postStudentsData(app, mysqlConnection);
getFunc.postGradesData(app, mysqlConnection);
getFunc.updateGrades(app, mysqlConnection);
getFunc.deleteData(app, mysqlConnection);
getFunc.loginStudents(app, mysqlConnection);
getFunc.loginAdmin(app, mysqlConnection);
