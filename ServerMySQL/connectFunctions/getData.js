module.exports = (app, mysqlConnection) => {
  ///////////////////////////////////////////////////////////////
  app.get("/students2", (req, res) => {
    mysqlConnection.query(
      "SELECT * FROM Students2 INNER JOIN grades ON \
      students2.students_number = grades.students_number;",
      (err, rows, fields) => {
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
};
