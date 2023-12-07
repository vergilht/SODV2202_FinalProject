import sql from "mssql";

export const config = {
  server: 'localhost',
  user: 'user',
  password: 'user',
  database: 'FightPrediction',
  options:{
    trustServerCertificate: true
  }
};;
// Function to handle common database connection setup and closing
const executeQuery = async (query, params) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();

    // Add parameters to the request
    if (params) {
      params.forEach(({ name, type, value }) => {
        request.input(name, type, value);
      });
    }
    // Execute the query and return the result
    const result = await request.query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error executing query:", err);
    throw err;
  } finally {
    try {
      // Close the connection
      await sql.close();
    } catch (err) {
      console.error("Error closing connection:", err);
    }
  }
};

// GET fights
export const GetFights = async function () {
  const query = `
      SELECT * FROM fight
      `;

  try {
    const result = await executeQuery(query, []);

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// GET Fighters

export const GetFighters = async function () {
  const query = `
      SELECT * FROM fighter
      `;

  try {
    const result = await executeQuery(query, []);

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
