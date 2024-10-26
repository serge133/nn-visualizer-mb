"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import BackgroundIMAGE from "@/public/images/network_v1.jpg";
import Image from "next/image";
import MODEL_DATA from "@/public/data/network.data";
import { useState } from "react";
import { ACTIVATIONS_V1, forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import ChooseNetworkDropdown from "@/components/ChooseNetworkDropdown";

export default function Home() {
  const [inputs, setInputs] = useState<number[]>([0, 0]);
  const [modelVersion, setModelVersion] = useState<MODEL_VERSIONS>(
    MODEL_VERSIONS.v1
  );
  const [output, activations] = forward_propogation(
    inputs,
    MODELS[modelVersion],
    ACTIVATIONS_V1
  );

  function updateInputs(update: number[]) {
    setInputs(update);
  }

  return (
    <div className="w-full h-full p-5 overflow-auto relative">
        <div
          className="absolute top-0 left-0 -z-50"
          style={{ width: 1550, height: 850 }}
        >
          <Image
            src={BackgroundIMAGE}
            alt="Test"
            // objectFit="cover"
            // layout="fill"
          />
        </div>
      <div className="flex flex-row">
        <Network activations={activations} network={MODELS[modelVersion]} />
        <Graph
          nnOutput={output}
          nnInputs={inputs}
          width={600}
          height={600}
          data={MODEL_DATA[modelVersion]}
          updateInputs={updateInputs}
        />
      </div>
      <ChooseNetworkDropdown
        changeNetworkVersion={setModelVersion}
        version={modelVersion}
      />
    </div>
  );
}
