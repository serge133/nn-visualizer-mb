import { makeClassification } from "@/math/network";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

// 100 Grid Elements
const NUM_INPUTS = 100;

type DrawGridProps = {
  updateInputs: Dispatch<SetStateAction<number[]>>;
  nnInputs: number[];
  nnOutputs: number[]
};
const DrawGrid = (props: DrawGridProps) => {
  // Initial grid state (all cells set to black)
  // One dimensional input array
  // Data collection for training purposes
  const store = useRef<number[][]>([]);

  const [isDrawing, setIsDrawing] = useState(false); // Track if drawing is active

  // Handle mouse down event (start drawing)
  const handleMouseDown = (index: number) => {
    setIsDrawing(true);
    updateCellColor(index);
  };

  // Handle mouse up event (stop drawing)
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Handle mouse enter event (draw while hovering)
  const handleMouseEnter = (index: number) => {
    if (isDrawing) {
      updateCellColor(index);
    }
  };

  const handlePrintExamples = () => console.log(store.current);
  const handleClear = () => props.updateInputs(Array(NUM_INPUTS).fill(0));
  const storeExample = () => {
    store.current.push(props.nnInputs);
    handleClear();
  };

  // Update cell color to white
  const updateCellColor = (index: number) => {
    props.updateInputs((prevGrid: number[]) => {
      const newGrid = prevGrid.map((v, i) => {
        if (index === i) {
          return 1;
        }
        return v;
      });
      return newGrid;
    });
  };

  const classifiction = makeClassification("categorical", props.nnOutputs);
  return (
    <div>
      <span className="font-bold font-mono">Model Predicts {classifiction.label}</span>
      <div
        className="grid grid-cols-10 grid-rows-10 border-2"
        style={{ width: 500, height: 500 }}
        onMouseLeave={handleMouseUp} // Stop drawing if mouse leaves the grid
      >
        {props.nnInputs.map((value, index) => (
          <div
            key={index}
            className="w-full h-full"
            style={{ backgroundColor: value === 1 ? "white" : "black" }}
            onMouseDown={() => handleMouseDown(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseUp={handleMouseUp}
          />
        ))}
      </div>
      <div className="flex justify-evenly text-slate-500">
        <button onClick={handleClear} className="text-rose-500">Clear Grid</button>
        <button onClick={handlePrintExamples}>Print Examples</button>
        <button onClick={storeExample}>Store Example</button>
      </div>
    </div>
  );
};

export default DrawGrid;
