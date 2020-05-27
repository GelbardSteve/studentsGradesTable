module.exports = (app, mysqlConnection) => {
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
};
