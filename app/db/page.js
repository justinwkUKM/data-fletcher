"use client";

import { useEffect, useState } from "react";

function DB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/prompt", { next: { revalidate: 60 } })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id} {item.prompt}{" "}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default DB;
