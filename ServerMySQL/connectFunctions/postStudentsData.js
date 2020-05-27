module.exports = (app, mysqlConnection) => {
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
};
