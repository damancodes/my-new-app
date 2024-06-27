import Image from "next/image";

export default function Home() {
  return (
    <>
      <p>{process.env.greeting} </p>
    </>
  );
}
