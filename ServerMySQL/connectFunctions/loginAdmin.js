module.exports = (app, mysqlConnection) => {
  //Admin Login
  app.post("/login", (req, res, next) => {
    let emp = req.body;
    var sql = `SELECT * FROM login WHERE Name = "${emp.Name}" AND Password = "${emp.Password}"`;
    mysqlConnection.query(
      sql,
      [emp.Name, emp.Password],
      (err, rows, fields) => {
        if (rows.length !== 0) {
          res.json((status = 200));
        } else {
          res.json((status = 400));
        }
      }
    );
  });
  //////////////////////////
};
