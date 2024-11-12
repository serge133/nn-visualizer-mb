export default function Tooltip(props: { title: string; show: boolean; children: string }) {
  return (
    props.show && (
      <div className="text-white absolute top-2/4 w-48 -right-2 p-2 rounded-md -translate-y-1/4 translate-x-full	bg-rose-700 z-50 font-normal font-mono">
        <h1 className=" font-bold bg-rose-800 rounded-md p-2 text-center">{props.title}</h1>
        <p className="whitespace-pre-line">{props.children}</p>
      </div>
    )
  );
}
