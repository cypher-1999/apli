import React, { Component } from "react";

import RadarChart from "react-svg-radar-chart";

import "../../App.css";

class RadarComponent extends Component {
  render() {
    return (
      <div>
        <RadarChart
          captions={{
            // columns
            O: "O",
            C: "C",
            E: "E",
            A: "A",
            N: "N",
          }}
          data={[
            // data
            {
              data: {
                O: 0.2,
                C: 0.4,
                E: 0.6,
                A: 0.8,
                N: 1,
              },
              meta: { color: "white" },
            },
          ]}
          size={350}
        />
      </div>
    );
  }
}

export default RadarComponent;
