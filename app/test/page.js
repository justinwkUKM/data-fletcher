// "use client";

// import { useEffect, useState } from "react";

// function page() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("api/test", { next: { revalidate: 5 } })
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p>{data.datetime}</p>
//       </div>
//     </main>
//   );
// }

// export default page;

"use client";

import { useEffect, useState } from "react";

function DB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/test", { next: { revalidate: 5 } })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p>{data.datetime}</p>
          </div>
        </main>
      );
}

export default DB;
