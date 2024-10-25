export type NeuronType = {
    id: string;
    weights: number[];
    bias: number;
}

export type LayerType = NeuronType[];

export type NetworkType = LayerType[];


function relu_activation(x: number): number {
    return Math.max(x, 0);
}

function sigmoid_activation(x: number): number {
    return 1 / (1 + Math.exp(-x));
}

// The simplest activation function
const linear_activation = (x: number) => x;

// Data Structure 
function create_neuron(weights: number[], bias: number): NeuronType {
    return {
        id: "NEURON_" + Math.random().toFixed(6).substring(2, 7),
        weights,
        bias
    }
}

// Data Structure
// Creates neural network layer (not including the input layer!)
// Weights is now a matrix 
function create_layer(weights: number[][], bias: number[]): LayerType {
    const layer: NeuronType[] = [];

    for (let i = 0; i < weights.length; i++) {
        const neuron_weights = weights[i];
        const neuron_bias = bias[i];
        layer.push(create_neuron(neuron_weights, neuron_bias));
    };   

    return layer;
}

// Data structure 
// Weights is 3 dimensions, first dimension representing which layer the weights belong to
export function create_network(weights: number[][][], bias: number[][]): NetworkType {
    // const network = [];
    // ? Old Way
    // for (let layer = 0; layer < weights.length; layer++) {
    //     network.push(create_layer(weights[layer], bias[layer]));
    // }

    const network = weights.map((layer_weights, idx) => create_layer(layer_weights, bias[idx]));
    return network;
}

// Does forward prop on one neuron in the network, given the inputs
function forward_prop_neuron(input: number[], neuron: { weights: number[], bias: number}): number {
    // if (input.length != neuron.weights.length) 
        // throw new Error("Neuron number of weights must match number of inputs!!");
    return input.reduce((accumulator, currentValue, idx) => accumulator + currentValue * neuron.weights[idx], 0) + neuron.bias
}

// Forward Propagation given a network 
export function forward_propogation(input: number[], network: LayerType[], activation_functions: Function[]): [number[], { [key: string]: number[] }] {
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

        const A = Z.map(activation_val => activation_functions[layer](activation_val));
        cache[`A${layer + 1}`] = A;
        last_activation = `A${layer + 1}`;
    }

    return [cache[last_activation], cache]
}


function network_summary(network: NetworkType): void {
    console.log(`NETWORK SUMMARY
    Layers = ${network.length},
    // We are not including the input layer
    Nodes per layer = [${network.map((layer, idx) => `Layer ${idx}: ${layer.length}`).join(", ")}]
    `);

    console.log(network);
}

// * --------- NETWORK V1 ---------
// The thresholds of each layer that cause neuron to glow (not including input)
export const ACTIVATION_THRESHOLDS_V1 = [0, 0.5];
// Activation function of each layer
export const ACTIVATIONS_V1 = [
    relu_activation,
    sigmoid_activation
];

// Weights of V1 network 
export const WEIGHTS_V1 = [
    [[ 0.34660286, -0.01123584], [-0.16000803,  0.37327516], [-0.20330293, -0.285043  ], [ 0.03866423,  0.00664284]], // First Layer
    [[-0.819887  , -0.60944384, -0.60550654,  0.81135994]] // Output Layer
]

// Bias of V1 Network 
export const BIAS_V1 = [
    [-1.3854994, -1.2200477, -0.6707291,  2.2454503],
    [1.962239]
]

// For hydration purposes (Next JS)
// export const network_v1 = create_network(WEIGHTS, BIAS);
// Compiled network
export const NETWORK_V1 = [
    [
        {
            "id": "NEURON_75921",
            "weights": [
                0.34660286,
                -0.01123584
            ],
            "bias": -1.3854994
        },
        {
            "id": "NEURON_79786",
            "weights": [
                -0.16000803,
                0.37327516
            ],
            "bias": -1.2200477
        },
        {
            "id": "NEURON_96141",
            "weights": [
                -0.20330293,
                -0.285043
            ],
            "bias": -0.6707291
        },
        {
            "id": "NEURON_65776",
            "weights": [
                0.03866423,
                0.00664284
            ],
            "bias": 2.2454503
        }
    ],
    [
        {
            "id": "NEURON_82556",
            "weights": [
                -0.819887,
                -0.60944384,
                -0.60550654,
                0.81135994
            ],
            "bias": 1.962239
        }
    ]
];