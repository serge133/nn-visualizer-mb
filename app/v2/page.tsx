"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import MODEL_DATA from "@/public/data/network.data";
import { useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import NNGroup from "@/components/NNGroup";

const MODEL_VERSION = MODEL_VERSIONS.v2;

export default function Home() {
  const [inputs, setInputs] = useState<number[]>(
    Array(MODELS[MODEL_VERSION].inputLength).fill(0)
  );

  const model = MODELS[MODEL_VERSION];

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
          version={MODEL_VERSION}
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
        data={MODEL_DATA[MODEL_VERSION]}
        updateInputs={setInputs}
        animateDefault
      />
    </NNGroup>
  );
}
