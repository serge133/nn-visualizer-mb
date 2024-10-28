// What the cursor looks like hovering over the graph
import { ClassificationType } from "@/math/network";


type ShapeTypes = "circle" | "triangle";

// Make sure label prediction is of size shape
type CursorProps = {
  classification: ClassificationType;
  shapes: ShapeTypes[];
  x: number;
  y: number;
  maxNNOutput: number; // The max number in nnOutputs list
  labelPrediction: number; // Integer that gives the predicted label of the output
};

const COLORS = ["orange", "blue", "lime"];

const CursorPoint = (props: CursorProps) => {
  const classificationStyleFunction: {
    [key in ClassificationType]: () => [string, number];
  } = {
    binary: () => {
      // Classification of type binary has only one output
      const color = COLORS[props.labelPrediction];
      let opacity = 1;
      // Blue
      if (props.maxNNOutput >= 0.5) {
        // [0.5, 1] mapped to [0, 1]
        opacity = (props.maxNNOutput - 0.5) * 2;
      } else {
        // [0.5, 0] mapped to [0, 1]
        opacity = 1 - props.maxNNOutput * 2;
      }

      return [color, opacity];
    },
    categorical: () => {
      const color = COLORS[props.labelPrediction];
      const opacity = props.maxNNOutput;
      return [color, opacity];
    },
  };

  const [color, opacity] = classificationStyleFunction[props.classification]();

  return (
    <circle
      key={"Cursor"}
      r={20}
      cx={props.x}
      cy={props.y}
      opacity={1}
      stroke={color}
      fill={color}
      fillOpacity={opacity}
      strokeWidth={1}
    />
  );
};

export default CursorPoint;
