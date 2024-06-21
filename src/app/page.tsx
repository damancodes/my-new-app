import Image from "next/image";

export default function Home() {
  return (
    <>
      <p>Hey {process.env.myname} here </p>
    </>
  );
}
