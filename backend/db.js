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

export const GetFightsWithIndex = async function (offset) {
  try {
    const limit = 3;
    const query = `
          SELECT f.*, ft1.*, ft2.*
          FROM fight f
          LEFT JOIN fighter ft1 ON f.fighter1_id = ft1.fighter_id
          LEFT JOIN fighter ft2 ON f.fighter2_id = ft2.fighter_id
          ORDER BY f.fight_id
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

export const GetFighterById = async (id) => {
  const query = `SELECT * FROM fighter WHERE fighter_id = ${id}`;

  try {
    const result = await executeQuery(query, []);

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const calcFighterPrediction = (fighter1, fighter2) => {
  let f1 = 0;
  let f2 = 0;

  if (fighter1.height > fighter2.height) {
    f1 = f1 + 1;
  } else if (fighter1.height < fighter2.height) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.weight > fighter2.weight) {
    f1 = f1 + 1;
  } else if (fighter1.weight < fighter2.weight) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.wins > fighter2.wins) {
    f1 = f1 + 1;
  } else if (fighter1.wins < fighter2.wins) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.reach > fighter2.reach) {
    f1 = f1 + 1;
  } else if (fighter1.reach < fighter2.reach) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.stance == "Switch") {
    var stance1 = 3;
  } else if (fighter1.stance == "Southpaw") {
    stance1 = 2;
  } else {
    stance1 = 1;
  }

  if (fighter2.stance == "Switch") {
    var stance2 = 3;
  } else if (fighter2.stance == "Southpaw") {
    stance2 = 2;
  } else {
    stance2 = 1;
  }

  if (stance1 > stance2) {
    f1 = f1 + 1;
  } else if (stance1 < stance2) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.ranking < fighter2.ranking) {
    f1 = f1 + 2;
  } else if (fighter1.raking > fighter2.raking) {
    f2 = f2 + 2;
  } else {
    f1 = f1 + 2;
    f2 = f2 + 2;
  }
  const probFighter1 = (f1 * 100) / (f1 + f2);
  const probFighter2 = (f2 * 100) / (f1 + f2);

  return { fighter1: probFighter1, fighter2: probFighter2 };
};
