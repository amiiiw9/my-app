"use client";

export default function Contacts() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 py-8 w-screen h-96">
        <h1 className="font-bold text-4xl">Contacts</h1>
        <p className="flex items-center justify-center text-center">
          Want to know more or just chat?
          <br /> You are welcome!
        </p>
        <button className="border border-black rounded-full text-white bg-black py-2 px-4">
          Send message
        </button>
      </div>
    </>
  );
}
