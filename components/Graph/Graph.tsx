"use client";
import * as d3 from "d3";
import { useRef } from "react";
import CursorPoint from "@/components/CursorPoint";
import { ClassificationType, makeClassification } from "@/math/network";

type ScatterplotProps = {
  width: number;
  height: number;
  data: { x: number; y: number; label: number }[];
  updateInputs: (update: number[]) => void;
  nnOutput: number[];
  nnInputs: number[];
  classificationType: ClassificationType;
};

const COLORS = ["orange", "blue", "lime"]
export default function Graph({
  width,
  height,
  data,
  updateInputs,
  nnOutput,
  nnInputs,
  classificationType,
}: ScatterplotProps) {
  // Width and height are same!!
  const scale = d3
    .scaleLinear()
    .domain([-35, 35]) // data goes from -30 to 30
    .range([0, width]); // axis goes from 0 to 300

  const scaleBack = d3.scaleLinear().domain([0, width]).range([-35, 35]);

  const graphRef = useRef(null);

  const points = data.map((d, i) => {
    const color = COLORS[d.label];
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

  let classification = makeClassification(classificationType, nnOutput);
  console.log(classification)
  return (
    <div className="inline-block">
      <div className="border rounded-md border-slate-700 cursor-none">
        <svg
          width={width}
          height={height}
          onMouseMove={onMouseOverGraph}
          ref={graphRef}
        >
          <CursorPoint
            classification={classificationType}
            shapes={["circle", "circle", "circle"]}
            maxNNOutput={classification.value}
            labelPrediction={classification.label}
            x={scale(nnInputs[0])}
            y={scale(nnInputs[1])}
          />
          {points}
        </svg>
      </div>
    </div>
  );
}
