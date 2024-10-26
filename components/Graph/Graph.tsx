"use client";
import * as d3 from "d3";
import { MouseEventHandler, useRef } from "react";

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

  const onMouseOverGraph = (e: MouseEventHandler<SVGSVGElement>) => {
    let [x, y] = d3.pointer(e);
    x = scaleBack(x);
    y = scaleBack(y);
    x = Math.round(x);
    y = Math.round(y);
    updateInputs([x, y]);
  };

  const CursorPoint = () => {
    let color = "blue";
    let opacity = 1;

    // Blue
    if (nnOutput[0] >= 0.5) {
      color = "blue";
      opacity = (nnOutput[0] * 2) - 0.5;
    } else {
      opacity =  1 - nnOutput[0] * 2;
      color = "orange";
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
      <div className="border rounded-md border-slate-700 border-rose-500 cursor-pointer">
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
