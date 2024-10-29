"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import MODEL_DATA from "@/public/data/network.data";
import { ReactElement, useEffect, useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import ChooseNetworkDropdown from "@/components/ChooseNetworkDropdown";
import Credit from "@/components/Credit";
import DrawGrid from "@/components/DrawGrid";


export default function Home() {
  const [inputs, setInputs] = useState<number[]>(
    Array(MODELS[MODEL_VERSIONS.v1].inputLength).fill(0)
  );
  const [modelVersion, setModelVersion] = useState<MODEL_VERSIONS>(
    MODEL_VERSIONS.v1
  );

  const model = MODELS[modelVersion];

  const [output, activations] = forward_propogation(
    inputs,
    model.network,
    model.activation_functions
  );

  // function updateInputs(update: number[]) {
  //   setInputs(update);
  // }

  // Everytime model verion changes
  useEffect(() => {
    setInputs(Array(MODELS[modelVersion].inputLength).fill(0));
  }, [modelVersion]);
  // Input Length of input -> Model
  const interactivityGraph: { [key: number]: () => ReactElement } = {
    // If we have two inputs, we render the graph
    2: () => (
      <Graph
        nnOutput={output}
        nnInputs={inputs}
        classificationType={model.classificationType}
        width={600}
        height={600}
        data={MODEL_DATA[modelVersion]}
        updateInputs={setInputs}
        animateDefault
      />
    ),
    // If we have 100 inputs we render a draw grid
    100: () => (
      <DrawGrid nnOutputs={output} nnInputs={inputs} updateInputs={setInputs} />
    ),
  };

  return (
    <div className="w-full h-full p-5 overflow-auto relative">
      <div className="flex flex-row items-center justify-between mb-5">
        <ChooseNetworkDropdown
          changeNetworkVersion={setModelVersion}
          version={modelVersion}
        />
        <p className="font-mono">
        {model.description}  
        </p>
      </div>
      <div className="flex flex-row overflow-visible flex-nowrap">
        <Network
          activations={activations}
          model={model}
          version={modelVersion}
        />
        {interactivityGraph[MODELS[modelVersion].inputLength]()}
      </div>
      <Credit />
    </div>
  );
}
