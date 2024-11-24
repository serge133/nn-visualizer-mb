export type NeuronType = {
  id: string;
  weights: number[];
  bias: number;
};

export type LayerType = NeuronType[];

export type NetworkType = LayerType[];

export type ClassificationType = "binary" | "categorical";

export function relu_activation(layer: number[]): number[] {
  return layer.map((activation_val) => Math.max(activation_val, 0));
}

export function sigmoid_activation(layer: number[]): number[] {
  return [1 / (1 + Math.exp(-layer[0]))];
}

export function softmax_activation(layer: number[]): number[] {
  // Calculates sum(exp(layer))
  const total_exp_sum = layer.reduce(
    (accumulator, activationVal) => accumulator + Math.exp(activationVal),
    0
  );
  return layer.map(
    (activation_val) => Math.exp(activation_val) / total_exp_sum
  );
}

// The simplest activation function
export const linear_activation = (x: number) => x;

// Data Structure
function create_neuron(
  weights: number[],
  bias: number,
  layer_num: number,
  neuron_num: number
): NeuronType {
  return {
    id: `NEURON ${layer_num}-${neuron_num}`,
    weights,
    bias,
  };
}

// Data Structure
// Creates neural network layer (not including the input layer!)
// Weights is now a matrix
function create_layer(
  weights: number[][],
  bias: number[],
  layer_num: number
): LayerType {
  const layer: NeuronType[] = [];

  for (let i = 0; i < weights.length; i++) {
    const neuron_weights = weights[i];
    const neuron_bias = bias[i];
    layer.push(create_neuron(neuron_weights, neuron_bias, layer_num, i));
  }

  return layer;
}

// Data structure
// Weights is 3 dimensions, first dimension representing which layer the weights belong to
export function create_network(
  weights: number[][][],
  bias: number[][]
): NetworkType {
  // const network = [];
  // ? Old Way
  // for (let layer = 0; layer < weights.length; layer++) {
  //     network.push(create_layer(weights[layer], bias[layer]));
  // }

  const network = weights.map((layer_weights, idx) =>
    create_layer(layer_weights, bias[idx], idx + 1)
  );
  return network;
}

// Does forward prop on one neuron in the network, given the inputs
function forward_prop_neuron(
  input: number[],
  neuron: { weights: number[]; bias: number }
): number {
  // if (input.length != neuron.weights.length)
  // throw new Error("Neuron number of weights must match number of inputs!!");
  return (
    input.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * neuron.weights[idx],
      0
    ) + neuron.bias
  );
}

// Forward Propagation given a network
export function forward_propogation(
  input: number[],
  network: LayerType[],
  activation_functions: Function[]
): [number[], { [key: string]: number[] }] {
  const num_layers = network.length; // excluding the input ofc

  // Saves all the calculations of each layer, used to display the calculated values
  const cache: { [key: string]: number[] } = {};
  cache["A0"] = input; // 0th layer is the input
  let last_activation = "A0";

  // I will keep this loop because at most we will have 7 layers, so this is not really a bottleneck
  for (let layer = 0; layer < num_layers; layer++) {
    // activations
    const Z = network[layer].map((neuron, idx) => {
      // Neuron is of type { weights: number[], bias: number }
      const prev_layer_activations = cache[`A${layer}`];
      return forward_prop_neuron(prev_layer_activations, neuron);
    });

    cache[`Z${layer + 1}`] = Z;

    // Applies activation
    const A = activation_functions[layer](Z);
    cache[`A${layer + 1}`] = A;
    last_activation = `A${layer + 1}`;
  }

  return [cache[last_activation], cache];
}

export const makeClassification = (
  type: ClassificationType,
  nnOutput: number[]
) => {
  switch (type) {
    case "binary":
      return { label: Math.round(nnOutput[0]), value: nnOutput[0] };
    case "categorical":
      return nnOutput.reduce(
        (max, currentValue, currentIndex) => {
          if (currentValue > max.value) {
            return { label: currentIndex, value: currentValue };
          }
          return max;
        },
        { label: 0, value: 0 }
      );
    default:
      throw new Error("Classification type is incorrect");
  }
};

function network_summary(network: NetworkType): void {
  console.log(`NETWORK SUMMARY
    Layers = ${network.length},
    // We are not including the input layer
    Nodes per layer = [${network
      .map((layer, idx) => `Layer ${idx}: ${layer.length}`)
      .join(", ")}]
    `);

  console.log(network);
}