"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import Image, { StaticImageData } from "next/image";
import MODEL_DATA from "@/public/data/network.data";
import { ReactElement, useEffect, useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import ChooseNetworkDropdown from "@/components/ChooseNetworkDropdown";
import V1NetworkImage from "@/public/images/network_v1.jpg";
import V2NetworkImage from "@/public/images/network_v2.jpg";
import V3NetworkImage from "@/public/images/network_v3.jpg";
import V4NetworkImage from "@/public/images/network_v4.jpg";
import Credit from "@/components/Credit";
import DrawGrid from "@/components/DrawGrid";

const BG_IMAGES: { [key in MODEL_VERSIONS]: StaticImageData } = {
  [MODEL_VERSIONS.v1]: V1NetworkImage,
  [MODEL_VERSIONS.v2]: V2NetworkImage,
  [MODEL_VERSIONS.v3]: V3NetworkImage,
  [MODEL_VERSIONS.v4]: V4NetworkImage
};

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
  const interactivityGraph: {[key: number]: () => ReactElement } = {
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
    100: () => <DrawGrid nnOutputs={output} nnInputs={inputs} updateInputs={setInputs} />,
  };

  return (
    <div className="w-full h-full p-5 overflow-auto relative">
      <ChooseNetworkDropdown
        changeNetworkVersion={setModelVersion}
        version={modelVersion}
      />
      <div
        className="absolute top-10 left-0 -z-50"
        style={{ width: 1550, height: 850 }}
      >
        <Image src={BG_IMAGES[modelVersion]} alt="Test" />
      </div>
      <div
        className="flex flex-row overflow-visible flex-nowrap"
        style={{ width: 1550 }}
      >
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
