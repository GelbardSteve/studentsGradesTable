module.exports = (app, mysqlConnection) => {
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
};
