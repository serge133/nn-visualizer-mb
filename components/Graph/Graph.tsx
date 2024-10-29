"use client";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
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
  animateDefault: boolean;
};

const COLORS = ["orange", "blue", "lime"];
const SPEED = 0.1;

const MAX_DIAMETER = 32;
const OUTWARD_PROPOLSION = 0.007;
const PI2 = Math.PI * 2;

export default function Graph({
  width,
  height,
  data,
  updateInputs,
  nnOutput,
  nnInputs,
  classificationType,
  animateDefault
}: ScatterplotProps) {

  const [sleepAnimate, setSleepAnimate] = useState<boolean>(animateDefault);
  const [animateCheckbox, setAnimateCheckbox] = useState<boolean>(animateDefault);

  // Width and height are same!!
  const scale = d3
  .scaleLinear()
  .domain([-35, 35]) // data goes from -30 to 30
  .range([0, width]); // axis goes from 0 to 300

  useEffect(() => {
    if (!sleepAnimate)
      return;
    let theta = 0; // Initial angle 
    let phi = 0;
    // We want a radius that expands and contracts
    // We can use a sin function!! 
    let radius = MAX_DIAMETER * Math.cos(phi);
    
    const intervalId = setInterval(() => {
      radius = MAX_DIAMETER * Math.cos(phi); 
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);

      theta += SPEED;
      phi += OUTWARD_PROPOLSION
      // To avoid this number exploding
      phi = phi % PI2; 
      theta = theta % PI2;


      updateInputs([x, y]);
    }, 50)

    return () => clearInterval(intervalId);
  }, [sleepAnimate, animateCheckbox]);

  

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
    setSleepAnimate(false);
  };

  const onClickAnimateCheckbox = () => {
    const newVal = !animateCheckbox;
    setAnimateCheckbox(newVal);
    setSleepAnimate(newVal);
  }

  const classification = makeClassification(classificationType, nnOutput);

  return (
    <div className="inline-block">
      <h1 className="text-slate-500">Model Predicts {classification.label}</h1>
      <div className="border rounded-md border-slate-700 cursor-none" style={{ borderColor: COLORS[classification.label]}}>
        <svg
          width={width}
          height={height}
          onMouseMove={onMouseOverGraph}
          onMouseLeave={() => setSleepAnimate(animateDefault && animateCheckbox)}
          ref={graphRef}
        >
          <CursorPoint
            classification={classificationType}
            maxNNOutput={classification.value}
            labelPrediction={classification.label}
            x={scale(nnInputs[0])}
            y={scale(nnInputs[1])}
          />
          {points}
        </svg>
      </div>
      <label>
        <input 
            type="checkbox" 
            checked={animateCheckbox}
            className="mr-2"
            onChange={onClickAnimateCheckbox} 
          />
          Animate (No Hover)
      </label>
    </div>
  );
}
