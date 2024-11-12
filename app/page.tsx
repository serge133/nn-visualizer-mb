import Image from "next/image";
import Signature from "@/public/signature.png";
import { ReactNode } from "react";
import Link from "next/link";

export default function Home() {
  const P = ({ children }: { children: string | ReactNode }) => (
    <>
      <p>{children}</p>
      <br />
    </>
  );
  return (
    <div className="w-full h-full overflow-auto">
      <div className="paper font-mono w-full lg:w-2/3">
        <h1 className="font-bold text-xl">Message from Creator</h1>
        <br />
        <P>
          Hey, I’m Michael Batrakov, and I’m really excited to share one of my
          most ambitious projects so far: a Neural Network Visualizer built with
          Next.js. This project brings together three of my biggest
          passions — Machine Learning, Data Visualization, and Web
          Development — into one interactive experience.
        </P>
        <P>
          What sets this project apart is that I built the forward propagation
          entirely from scratch in TypeScript, showcasing my expertise in data
          structures and low-level algorithm design — no external libraries
          involved. I created this platform as both a learning tool for myself
          and a resource for others to grasp the inner workings of deep neural
          networks.
        </P>
        <P>
          For model v4, a handwritten digit recognizer, I even collected all the
          data myself — no downloads or external datasets were used. My skills in
          algorithms are further highlighted through data augmentation
          techniques, where I shifted digit positions within a 10x10 matrix to
          expand the dataset and improve training. For a closer look at the
          process, check out the detailed steps in the
          <a
            href="https://colab.research.google.com/drive/15M43XMWcooOzF02Js5jCcnSvA8oRWaI1?usp=sharing"
            className="text-rose-500"
            target="_blank"
          >
            {" "}
            Training Link
          </a>.
        </P>
        <P>
          Ultimately, this project is more than just a visualization tool — it’s a
          way to demystify deep neural networks. I hope it inspires others
          to dive deeper into machine learning and see the beauty in these
          algorithms!
        </P>
        <P>
          P.S. If you have any questions or concerns send me an email at
          mishou@g.ucla.edu
        </P>
        <P>
          P.P.S. Feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/michaelbatrakov/"
            target="_blank"
            className="text-rose-500"
          >
            LinkedIn
          </a>
        </P>
        <P>
          Try{" "}
          <Link className="text-rose-500" href="/v1">
            Model V1
          </Link>
        </P>
        <Image style={{ backgroundColor: "#fbfbfb"}} height={50} src={Signature} alt="Michael Batrakov" />
      </div>
    </div>
  );
}
