"use client";
import Network from "@/components/Network/Network";
import { useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import DrawGrid from "@/components/DrawGrid";

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
    <div className="w-full h-full relative">
      <div className="flex flex-row flex-nowrap h-full overflow-auto justify-between px-5">
        <div className="flex flex-col items-center overflow-auto max-h-full flex-1 mr-5">
          <p className="text-center font-mono rounded-sm mb-2 font-bold">
            {model.description}
          </p>
          <Network
            activations={activations}
            model={model}
            version={MODEL_VERSION}
          />
        </div>
      

      <DrawGrid nnOutputs={output} nnInputs={inputs} updateInputs={setInputs} />
      </div>
    </div>
  );
}
