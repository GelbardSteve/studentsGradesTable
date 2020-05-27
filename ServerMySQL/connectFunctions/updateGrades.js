module.exports = (app, mysqlConnection) => {
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
}