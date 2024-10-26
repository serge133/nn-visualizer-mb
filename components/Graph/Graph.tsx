"use client";
import * as d3 from "d3";
import { useRef } from "react";

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number; label: number }[];
  updateInputs: (update: number[]) => void;
  nnOutput: number[];
  nnInputs: number[];
};

export default function Graph({
  width,
  height,
  data,
  updateInputs,
  nnOutput,
  nnInputs,
}: ScatterplotProps) {
  // Width and height are same!!
  const scale = d3
    .scaleLinear()
    .domain([-35, 35]) // data goes from -30 to 30
    .range([0, width]); // axis goes from 0 to 300

  const scaleBack = d3.scaleLinear().domain([0, width]).range([-35, 35]);

  const graphRef = useRef(null);

  const points = data.map((d, i) => {
    const color = d.label === 1 ? "blue" : "orange";
    return (
      <circle
        key={i}
        r={5}
        cx={scale(d.x)}
        cy={scale(d.y)}
        opacity={1}
        stroke={color}
        fill={color}
        fillOpacity={0.2}
        strokeWidth={1}
      />
    );
  });

  const onMouseOverGraph = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    let [x, y] = d3.pointer(event);
    x = scaleBack(x);
    y = scaleBack(y);
    // Rounds to nearest half
    x = Math.round(x * 2) / 2;
    y = Math.round(y * 2) / 2;
    updateInputs([x, y]);
  };

  const colors = ["orange", "blue"];
  const CursorPoint = () => {
    let color = "blue";
    let opacity = 1;
    switch(nnOutput.length) {
      // Binary Classification
      case 1:
        color = colors[Math.round(nnOutput[0])];
        opacity = 1;
    
        // Blue
        if (nnOutput[0] >= 0.5) {
          // [0.5, 1] mapped to [0, 1]
          opacity = (nnOutput[0] - 0.5) * 2;
        } else {
          // [0.5, 0] mapped to [0, 1] 
          opacity =  1 - nnOutput[0] * 2;
        }
        break;
      default:
        break;
    }

    return (
      <circle
        key={"Cursor"}
        r={20}
        cx={scale(nnInputs[0])}
        cy={scale(nnInputs[1])}
        opacity={1}
        stroke={color}
        fill={color}
        fillOpacity={opacity}
        strokeWidth={1}
      />
    );
  };

  return (
    <div className="inline-block">
      <div className="border rounded-md border-slate-700 cursor-pointer">
        <svg
          width={width}
          height={height}
          onMouseMove={onMouseOverGraph}
          ref={graphRef}
        >
          {/* Cursor Point */}
          <CursorPoint />
          {points}
        </svg>
      </div>
    </div>
  );
}
