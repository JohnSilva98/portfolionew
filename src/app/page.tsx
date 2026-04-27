import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <header>
        <h1 className="text-4xl font-bold text-primary">Jonathan Silva</h1>
        <a className=" h-2 w-2 bg-primary text-white px-4 py-2 rounded" href="https://wa.me/5511986332860/?text=Ola%20Jonathan%20gostaria%20de%20contratar%20seus%20servicos" target="_blank">
          Me Contrate
        </a>
        
       
       </header>
      </main>
    </div>
  );
}
