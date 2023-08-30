const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "ytuser",
});
// const pool = new Pool({
//   user: "drumil",
//   password: "XOWzUULb4dfJpnWWp558SA4aSMaoBBAs",
//   host: "dpg-cirtjp15rnujejticoi0-a",
//   port: 5432,
//   database: "ytuser",
// });
// module.exports = pool;
