module.exports = (app, mysqlConnection) => {
  app.get("/students2/:students_number", (req, res) => {
    const emp = req.params;
    mysqlConnection.query(
      `SELECT * FROM Students2 INNER JOIN grades ON
      students2.students_number = grades.students_number 
      WHERE students2.students_number = ${emp.students_number};`,
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
