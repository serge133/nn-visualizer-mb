"use client";
import Graph from "@/components/Graph/Graph";
import Network from "@/components/Network/Network";
import Image, { StaticImageData } from "next/image";
import MODEL_DATA from "@/public/data/network.data";
import { useState } from "react";
import { forward_propogation } from "@/math/network";
import { MODELS, MODEL_VERSIONS } from "@/math/models";
import ChooseNetworkDropdown from "@/components/ChooseNetworkDropdown";
import V1NetworkImage from "@/public/images/network_v1.jpg";
import V2NetworkImage from "@/public/images/network_v2.jpg";
import Credit from "@/components/Credit";

const BG_IMAGES: { [key in MODEL_VERSIONS]: StaticImageData } = {
  [MODEL_VERSIONS.v1]: V1NetworkImage,
  [MODEL_VERSIONS.v2]: V2NetworkImage

}

export default function Home() {
  const [inputs, setInputs] = useState<number[]>([0, 0]);
  const [modelVersion, setModelVersion] = useState<MODEL_VERSIONS>(
    MODEL_VERSIONS.v1
  );

  const model = MODELS[modelVersion];

  const [output, activations] = forward_propogation(
    inputs,
    model.network,
    model.activation_functions
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
            src={BG_IMAGES[modelVersion]}
            alt="Test"
          />
        </div>
      <div className="flex flex-row">
        <Network activations={activations} model={model} version={modelVersion} />
        <Graph
          nnOutput={output}
          nnInputs={inputs}
          classificationType={model.classificationType}
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
      <Credit />
    </div>
  );
}
