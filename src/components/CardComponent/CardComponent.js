import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import RadarComponent from "../Radar/Radar";
import dp from "../../images/images.png";
import "../../App.css";
const CardComponent = () => (
  <div className="col-12 col-md-5 mt-3">
    <Card className="mb-3">
      <CardBody
        style={{
          backgroundColor: "#1c3334",
          color: "white",
        }}
        className=""
      >
        <div className="dp">
          <CardImg className="rounded-circle" src={dp} alt="profile pic" />
        </div>
        <CardTitle className="text-center">
          <h3>Aashish</h3>
          <div className="col-12">
            <RadarComponent />
          </div>
        </CardTitle>
      </CardBody>
    </Card>
  </div>
);
export default CardComponent;
