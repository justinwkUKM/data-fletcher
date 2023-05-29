const getTime = async () => {
    const data = await fetch(
  "http://worldtimeapi.org/api/timezone/America/New_York", {next:{revalidate:5}} 
    );
    const time = await data.json();
    return time;
  };

export const GET = async (request) => {
    try {
        // The result is an object with a `text` property.
        const test = await getTime();
        return new Response(JSON.stringify(test), { status: 200 });
      } catch (error) {
        return new Response("Failed to fetch", { status: 500 });
      }
}