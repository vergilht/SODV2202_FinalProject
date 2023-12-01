import sql from "mssql";

export const config = {
  server: "localhost",
  port: 57000,
  user: "user",
  password: "user",
  database: "FightPrediction",
  options: {
    trustServerCertificate: true,
  },
};
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
/*export const GetFights = async function () {
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
}; */

export const GetFightsWithIndex = async function (offset) {
  try {
    const limit = 5;
    const query = `
      SELECT * FROM fight
      ORDER BY fight_id 
      OFFSET ${offset} ROWS 
      FETCH NEXT ${limit} ROWS ONLY;
      `;

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
      SELECT * FROM Fighters
      `;

  try {
    const result = await executeQuery(query, []);

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
