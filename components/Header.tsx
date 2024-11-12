"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const StyledLink = (props: { href: string; children: string; className?: string; }) => {
    return (
        <Link
          href={props.href}
          className={`${props.className} p-1 rounded-sm hover:bg-rose-500 hover:text-white duration-500 ${props.href === pathname ? "bg-rose-500 text-white" : "text-slate-400"}`}
        >
          {props.children}
        </Link>
    );
  };

  return (
    <div className="flex flex-row items-center pl-5 mb-2 font-mono">
      <div className="flex-1 rounded-sm text-xl font-bold">
        <StyledLink href="/" className="mr-5">Home</StyledLink>
        Model(
        <StyledLink href="/v1">V1</StyledLink>{" | "}
        <StyledLink href="/v2">V2</StyledLink>{" | "}
        <StyledLink href="/v3">V3</StyledLink>{" | "}
        <StyledLink href="/v4">V4</StyledLink>)
      </div>
      <div className="text-right pr-2">
        <span className="font-bold">Michael Batrakov</span>
        <br />
        <a
          href="https://www.linkedin.com/in/michaelbatrakov/"
          target="_blank"
          className="text-rose-500"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://colab.research.google.com/drive/15M43XMWcooOzF02Js5jCcnSvA8oRWaI1?usp=sharing"
          className="text-rose-500"
          target="_blank"
        >
          {" "}
          Training Link
        </a>
      </div>
    </div>
  );
}
