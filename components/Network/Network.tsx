'use client';

import { MODEL_VERSIONS, ModelType } from "@/math/models";
import {
  LayerType,
  NeuronType,
} from "@/math/network";
import { ReactElement, useEffect, useState } from "react";

function Neuron(props: {
  neuron?: NeuronType;
  activation: number;
  nid: string;
  threshold: number; 
}) {
  return (
    <div
      id={props.nid}
      className="border-2 h-20 w-20 rounded-full flex items-center justify-center bg-black"
      style={{
        borderColor: props.activation > props.threshold ? "lime" : "white"
      }}
    >
      {props.activation.toFixed(2)}
    </div>
  );
}

function Layer(props: { neurons: LayerType; activations: number[]; threshold: number }) {
  return (
    <div className="w-min grid gap-4 mr-24">
      {props.neurons.map((neuron, index) => (
        <Neuron
          key={neuron.id}
          nid={neuron.id}
          neuron={neuron}
          threshold={props.threshold}
          activation={props.activations[index]}
        />
      ))}
    </div>
  );
}

export default function Network(props: { version: MODEL_VERSIONS, activations: {[key: string]: number[]}, model: ModelType }) {
  const { version, activations, model } = props;
  // const [output, activations] = forward_propogation(
  //   props.inputs, // One dimensional list of numbers
  //   NETWORK_V1, // network with weights and biases
  //   ACTIVATIONS_V1 // activation functions
  // );

  const [lines, setLines] = useState<ReactElement[]>([]);

  // props.updateOutput(output);
  // function changeInput(e: ChangeEvent<HTMLInputElement>, index: number) {
  //   setInputs((prevInputs) => {
  //     const copyInputs = [...prevInputs];
  //     copyInputs[index] = +e.target.value;
  //     return copyInputs;
  //   });
  // }

  // Draws a line between the neurons of each layer
  // Parent needed to subtract out coordinates for relative positioning of svg line
  function connectDivs(parent_element: HTMLElement | null, div1: HTMLElement | null, div2: HTMLElement | null) {
    if (!(div1 && div2 && parent_element)) 
      throw new Error("Elements can not be connected")


    // Get the positions of the two divs
    const parent_rect = parent_element.getBoundingClientRect();
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    // Calculate the start and end points of the line
    // Coordinates relative to parent element
    const x1 = (rect1.left - parent_rect.left) + rect1.width;
    const y1 = (rect1.top - parent_rect.top) + rect1.height / 2;
    const x2 = (rect2.left - parent_rect.left);
    const y2 = (rect2.top - parent_rect.top) + rect2.height / 2;

    setLines((prevLines) => [
      ...prevLines,
      <line key={div1.id + div2.id} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" />,
    ]);
  }

  useEffect(() => {
    setLines([]);
    const parent_element = document.getElementById("neural_network");

    // Connecting the input layer to the neural network
    for (let i = 0; i < props.activations["A0"].length; i++) {
      const nid = `NEURON_${i}`;
      const prev_neuron_html = document.getElementById(nid);

      // Connecting to the first layer of the neural network
      for (const neuron of model.network[0]) {
        const next_neuron = document.getElementById(neuron.id);
        connectDivs(parent_element, prev_neuron_html, next_neuron);
      }
    }

    // Now connecting rest of the neural network 
    let prev_layer = 0;
    while (prev_layer < model.network.length - 1) {
      const next_layer = prev_layer + 1;
      for (const prev_neuron of model.network[prev_layer]) {
        const prev_neuron_html = document.getElementById(prev_neuron.id);
        for (const next_neuron of model.network[next_layer]) {
          const next_neuron_html = document.getElementById(next_neuron.id);
          connectDivs(parent_element, prev_neuron_html, next_neuron_html);
        }

      }

      prev_layer += 1;
    }

  }, [version]);

  return (
    <div className="container min-h-min min-w-min inline-block">
      <div className="flex flex-row w-min items-center relative z-30" id="neural_network">
        <svg className="absolute top-0 left-0 w-full h-full">{lines}</svg>
        {/* Input Layer */}
        <div className="w-min grid gap-4 mr-16">
          {(activations["A0"] ?? []).map((a: number, index: number) => (
            <Neuron nid={`NEURON_${index}`} key={index} activation={a} threshold={Infinity} />
          ))}
        </div>

        {model.network.map((layer, layer_index) => {
          const layer_activations = activations[`A${layer_index + 1}`];
          return (
            <Layer
              key={layer[0].bias}
              neurons={layer}
              threshold={model.activation_thresholds[layer_index]}
              activations={layer_activations}
            />
          );
        })}
      </div>
    </div>
  );
}
