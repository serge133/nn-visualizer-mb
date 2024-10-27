// For hydration purposes (Next JS)
// export const network_v1 = create_network(WEIGHTS, BIAS);

import {
  ClassificationType,
  NetworkType,
  relu_activation,
  sigmoid_activation,
} from "./network";

// * --------- NETWORK V1 ---------
// Weights of V1 network
const WEIGHTS_V1 = [
  [
    [0.34660286, -0.01123584],
    [-0.16000803, 0.37327516],
    [-0.20330293, -0.285043],
    [0.03866423, 0.00664284],
  ], // First Layer
  [[-0.819887, -0.60944384, -0.60550654, 0.81135994]], // Output Layer
];

// Bias of V1 Network
const BIAS_V1 = [[-1.3854994, -1.2200477, -0.6707291, 2.2454503], [1.962239]];
// The thresholds of each layer that cause neuron to glow (not including input)
export const ACTIVATION_THRESHOLDS_V1 = [0, 0.5];
// Activation function of each layer
export const ACTIVATIONS_V1 = [relu_activation, sigmoid_activation];

// Compiled network
const NETWORK_V1 = [
  [
    {
      id: "NEURON_75921",
      weights: [0.34660286, -0.01123584],
      bias: -1.3854994,
    },
    {
      id: "NEURON_79786",
      weights: [-0.16000803, 0.37327516],
      bias: -1.2200477,
    },
    {
      id: "NEURON_96141",
      weights: [-0.20330293, -0.285043],
      bias: -0.6707291,
    },
    {
      id: "NEURON_65776",
      weights: [0.03866423, 0.00664284],
      bias: 2.2454503,
    },
  ],
  [
    {
      id: "NEURON_82556",
      weights: [-0.819887, -0.60944384, -0.60550654, 0.81135994],
      bias: 1.962239,
    },
  ],
];

// * --------- NETWORK V2 ---------
const WEIGHTS_V2 = [
  [
    [-0.34477118, -1.6760575],
    [0.31985378, 0.05698782],
    [0.9938797, 0.37092927],
    [0.5316709, 0.05891604],
    [-0.3936875, 0.2678236],
    [-0.6676354, -0.23336759],
  ],
  [
    [1.7718524, 0.1253783, 0.05593611, 0.8161352, -0.5778513, -0.32674235],
    [-0.387093, 0.11015438, -0.6425315, 0.01890373, -0.12255807, -0.67158157],
    [0.12292493, -2.2577233, 0.04268863, -0.23945038, 0.824801, 0.16089681],
    [
      -0.5992771, -0.34958652, -0.35315248, -0.5255966, -0.03629249,
      -0.34147778,
    ],
    [-0.53602463, -0.5711668, 0.7213426, -1.7292765, -0.11530387, -1.7924851],
    [0.52787155, 0.15420282, -0.06676751, 0.09076008, 1.7018548, 0.17385295],
  ],
  [[0.566249, 0.51702875, -0.6228413, -0.10376287, -1.122004, -0.55353564]],
];

const BIAS_V2 = [
  [1.2334526, -1.3812139, -0.24565703, -3.3825176, -3.5829697, -0.02190185],
  [-1.1887258, -0.41817272, -1.3184562, -0.20588127, 0.25860855, -2.6970034],
  [1.1585021],
];

const NETWORK_V2 = [
  [
    {
      id: "NEURON_11136",
      weights: [-0.34477118, -1.6760575],
      bias: 1.2334526,
    },
    {
      id: "NEURON_35617",
      weights: [0.31985378, 0.05698782],
      bias: -1.3812139,
    },
    {
      id: "NEURON_52199",
      weights: [0.9938797, 0.37092927],
      bias: -0.24565703,
    },
    {
      id: "NEURON_68952",
      weights: [0.5316709, 0.05891604],
      bias: -3.3825176,
    },
    {
      id: "NEURON_03907",
      weights: [-0.3936875, 0.2678236],
      bias: -3.5829697,
    },
    {
      id: "NEURON_71160",
      weights: [-0.6676354, -0.23336759],
      bias: -0.02190185,
    },
  ],
  [
    {
      id: "NEURON_61495",
      weights: [
        1.7718524, 0.1253783, 0.05593611, 0.8161352, -0.5778513, -0.32674235,
      ],
      bias: -1.1887258,
    },
    {
      id: "NEURON_75033",
      weights: [
        -0.387093, 0.11015438, -0.6425315, 0.01890373, -0.12255807, -0.67158157,
      ],
      bias: -0.41817272,
    },
    {
      id: "NEURON_47197",
      weights: [
        0.12292493, -2.2577233, 0.04268863, -0.23945038, 0.824801, 0.16089681,
      ],
      bias: -1.3184562,
    },
    {
      id: "NEURON_67004",
      weights: [
        -0.5992771, -0.34958652, -0.35315248, -0.5255966, -0.03629249,
        -0.34147778,
      ],
      bias: -0.20588127,
    },
    {
      id: "NEURON_22291",
      weights: [
        -0.53602463, -0.5711668, 0.7213426, -1.7292765, -0.11530387, -1.7924851,
      ],
      bias: 0.25860855,
    },
    {
      id: "NEURON_42131",
      weights: [
        0.52787155, 0.15420282, -0.06676751, 0.09076008, 1.7018548, 0.17385295,
      ],
      bias: -2.6970034,
    },
  ],
  [
    {
      id: "NEURON_38332",
      weights: [
        0.566249, 0.51702875, -0.6228413, -0.10376287, -1.122004, -0.55353564,
      ],
      bias: 1.1585021,
    },
  ],
];

export enum MODEL_VERSIONS {
  v1,
  v2,
}

export type ModelType = {
  network: NetworkType;
  activation_thresholds: number[];
  activation_functions: Function[];
  classificationType: ClassificationType;
};

export const MODELS: { [key in MODEL_VERSIONS]: ModelType } = {
  [MODEL_VERSIONS.v1]: {
    network: NETWORK_V1,
    classificationType: "binary",
    activation_thresholds: ACTIVATION_THRESHOLDS_V1,
    activation_functions: ACTIVATIONS_V1,
  },
  [MODEL_VERSIONS.v2]: {
    network: NETWORK_V2,
    classificationType: "binary",
    activation_thresholds: [0, 0, 0.5],
    activation_functions: [relu_activation, relu_activation, sigmoid_activation]
  }
};

// console.log(create_network(WEIGHTS_V2, BIAS_V2))
