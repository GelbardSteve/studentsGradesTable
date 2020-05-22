const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "La44w0rd",
  database: "students",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DB great");
  } else {
    console.log("DB not Connect");
  }
});

app.listen(3000, () =>
  console.log("Express server is running at port no: 3000")
);

///////////////////////////////////////////////////////////////
app.get("/students2", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Students2 INNER JOIN grades ON \
    students2.students_number = grades.students_number;",
    (err, rows, fields) => {
      if (!err) {
        let runOnResponse = "";
        function sortTheJson() {
          return new Promise(function (resolve) {
            rows.forEach((itm) => {
              runOnResponse += ` {
  "students_id": ${itm.students_id},
  "students_name": "${itm.students_name}",
  "students_number": ${itm.students_number},
    "grades": {
      "grade": "${itm.studentsGrades}"
    }
  },
`;
            });
            resolve();
          });
        }

        async function returnSortJson() {
          await sortTheJson();
          let jRemoveLastComma = runOnResponse.replace(/,\s*$/, "");
          let jsonResponse = "[" + jRemoveLastComma + "]";
          res.send(jsonResponse);
        }
        returnSortJson();
      } else {
        console.log(err);
      }
    }
  );
});

//add to students2 table
app.post("/students2", (req, res) => {
  let emp = req.body;
  var sql =
    "SET @students_id = ?; SET @students_name = ?; SET @students_number = ?;\
    CALL Students2Add(@students_id, @students_name, @students_number);";
  mysqlConnection.query(
    sql,
    [emp.students_id, emp.students_name, emp.students_number],
    (err, rows, fields) => {
      if (!err) res.status(200).json("successful");
      else console.log(err);
    }
  );
});

//add to grades table
app.post("/grades", (req, res) => {
  let emp = req.body;
  var sql =
    "SET @students_id = ?; SET @studentsGrades = ?; SET @students_number = ?;\
    CALL gradesAddUpdate(@students_id, @studentsGrades, @students_number);";
  mysqlConnection.query(
    sql,
    [emp.students_id, emp.studentsGrades, emp.students_number],
    (err, rows, fields) => {
      if (!err) res.status(200).json("successful");
      else console.log(err);
    }
  );
});

//update grades
app.put("/grades", (req, res) => {
  let emp = req.body;
  var sql =
    "SET @students_id = ?; SET @studentsGrades = ?; SET @students_number = ?; \
     CALL gradesAddUpdate(@students_id, @studentsGrades, @students_number);";
  mysqlConnection.query(
    sql,
    [emp.students_id, emp.studentsGrades, emp.students_number],
    (err, rows, fields) => {
      if (!err) res.status(200).json("Update succeed");
      else console.log(err);
    }
  );
});

//delete from students2 and grades
app.delete("/students2/:students_id", (req, res) => {
  mysqlConnection.query(
    "DELETE students2, grades \
      FROM students2 \
      INNER JOIN grades ON students2.students_number = grades.students_number \
      WHERE students2.students_id AND grades.students_id = ?;",
    [req.params.students_id],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json({ succeed: true });
      } else {
        console.log(err);
      }
    }
  );
});

//login for admin & students
//Students login
app.get("/students2/:students_number", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Students2 INNER JOIN grades ON \
    students2.students_number = grades.students_number WHERE students2.students_number = ?;",
    [req.params.students_number],
    (err, rows, fields) => {
      if (rows.length !== 0) {
        res.json(rows);
      } else {
        res.json("NotFound");
      }
    }
  );
});

//Admin Login
app.post("/login", (req, res, next) => {
  let emp = req.body;
  var sql = `SELECT * FROM login WHERE Name = "${emp.Name}" AND Password = "${emp.Password}"`;
  mysqlConnection.query(sql, [emp.Name, emp.Password], (err, rows, fields) => {
    if (rows.length !== 0) {
      res.json((status = 200));
    } else {
      res.json((status = 400));
    }
  });
});
//////////////////////////
