// For hydration purposes (Next JS)
// export const network_v1 = create_network(WEIGHTS, BIAS);

import { NetworkType } from "./network";

// Compiled network
const NETWORK_V1 = [
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

export enum MODEL_VERSIONS {
  v1
}


export const MODELS: { [key in MODEL_VERSIONS]: NetworkType} = {
  [MODEL_VERSIONS.v1]: NETWORK_V1
}