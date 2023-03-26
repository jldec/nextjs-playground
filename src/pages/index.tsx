import Logo from "@/components/Logo";
import Testdata from "@/components/Testdata";
import { useState } from "react";

function TestButton({
  id,
  setId,
}: {
  id: string;
  setId: (id: string) => void;
}) {
  return (
    <button
      className="btn-primary btn my-4 mr-2 rounded-md normal-case"
      onClick={() => setId(id)}
    >
      {id}
    </button>
  );
}

export default function Home() {
  const [id, setId] = useState("1");
  return (
    <div className="min-h-screen">
      <header className="navbar bg-slate-200 px-4">
        <Logo />
      </header>
      <main className="container m-auto">
        <h2 className="text-2xl font-bold mt-4">Testdata</h2>
        <TestButton id="1" setId={setId} />
        <TestButton id="2" setId={setId} />
        <TestButton id="3" setId={setId} />
        <Testdata id={id} />
      </main>
    </div>
  );
}
