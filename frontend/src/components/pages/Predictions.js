import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Card, Row, Col, Dropdown, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Predictions() {
  const [fighters, setFighters] = useState([]);
  const [fighter1, setFighter1] = useState();
  const [fighter2, setFighter2] = useState();
  const [prediction, setPrediction] = useState();

  const fetchPredictions = async (id1, id2) => {
    try {
      const response = await Axios.get(
        `/api/predictions?fighterId1=${id1}&fighterId2=${id2}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching fighters prediction:", error);
    }
  };

  const onButtonClick = async () => {
    if (fighter1 && fighter2) {
      const predictionResult = await fetchPredictions(fighter1, fighter2);
      setPrediction(predictionResult);
    }
  };

  const fetchFighters = async () => {
    try {
      const response = await Axios.get("/api/fighters");
      setFighters(response.data);
    } catch (error) {
      console.error("Error fetching fighters:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFighters();
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>Predict who is going to win next</h4>
      <div>
        <Card className="text-center m-3">
          <Form.Select
            name="fighter1"
            onChange={({ target }) => setFighter1(target.value)}
          >
            <option>Select Fighter 1</option>
            {fighters.map(({ fighter_id, fighter_fname }) => (
              <option value={fighter_id} key={fighter_id}>
                {fighter_fname}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            name="fighter2"
            onChange={({ target }) => setFighter2(target.value)}
          >
            <option>Select Fighter 2</option>
            {fighters.map(({ fighter_id, fighter_fname }) => (
              <option value={fighter_id} key={fighter_id}>
                {fighter_fname}
              </option>
            ))}
          </Form.Select>
          {/* useState prediction to exib the div result only after prediction is defined by the onclick */}
          {prediction && (
            <div className="text-center m-3">
              <h3>Chances of winning</h3>
              <div>
                {prediction.fighter1.fighter_fname}{" "}
                {prediction.fighter1.fighter_lname}
                {": "}
                {prediction.fighter1.prediction}
              </div>
              <div>
                {prediction.fighter2.fighter_fname}{" "}
                {prediction.fighter2.fighter_lname}
                {": "}
                {prediction.fighter2.prediction}
              </div>
            </div>
          )}

          <Button variant="primary" onClick={onButtonClick}>
            Predict winner
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default Predictions;
