module.exports = (app, mysqlConnection) => {
  //Admin Login
  app.post("/login", (req, res, next) => {
    const emp = req.body;
    const sql = `SELECT * FROM login 
    WHERE Name = "${emp.Name}" AND Password = "${emp.Password}"`;
    mysqlConnection.query(sql, (err, rows, fields) => {
      if (rows.length !== 0) {
        res.json((status = 200));
      } else {
        res.json((status = 400));
      }
    });
  });
  //////////////////////////
};
