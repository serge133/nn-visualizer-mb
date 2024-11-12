"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import MODEL_DATA from "@/public/data/network.data";
import { useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import NNGroup from "@/components/NNGroup";

export default function Home() {
  const [inputs, setInputs] = useState<number[]>(
    Array(MODELS[MODEL_VERSIONS.v1].inputLength).fill(0)
  );
  const modelVersion = MODEL_VERSIONS.v1;

  const model = MODELS[modelVersion];

  const [output, activations] = forward_propogation(
    inputs,
    model.network,
    model.activation_functions
  );

  return (
    <NNGroup
      network={
        <Network
          activations={activations}
          model={model}
          version={modelVersion}
        />
      }
      description={model.description}
    >
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
    </NNGroup>
  );
}
