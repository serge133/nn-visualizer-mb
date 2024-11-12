// Container component for neural networks

import { ReactNode } from "react";

// Styling function 
export default function NNGroup({ children, network, description }: { children: ReactNode; network: JSX.Element; description: string; }) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row flex-wrap h-full overflow-auto px-5">
      <div className="flex flex-col max-h-full flex-1 items-center w-fit">
        <p className="text-center font-mono rounded-sm mb-2 font-bold">
          {description}
        </p>
        {network}
      </div>
        {children}
      </div>
    </div>
  );
}
