"use client";
import Network from "@/components/Network/Network";
import { useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import DrawGrid from "@/components/DrawGrid";
import NNGroup from "@/components/NNGroup";

const MODEL_VERSION = MODEL_VERSIONS.v4;

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
      <DrawGrid nnOutputs={output} nnInputs={inputs} updateInputs={setInputs} />
    </NNGroup>
  );
}
