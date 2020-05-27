module.exports = (app, mysqlConnection) => {
  //login for students
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
};
