import prisma from '@app/libs/prismadb'
export const GET = async (request) => {
    try {
        const cars = await prisma.car.findMany()
        console.log(cars)
        return new Response(JSON.stringify(cars), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
} 

export const POST = async (request) => {
    const data = await request.json();
    console.log(data)
    try {
        const car = await prisma.car.create({
            data:{
                make: data.make,
                model: data.model,
                year: data.year,
                color: data.color,
            }
          });
        console.log(car);
        return new Response(JSON.stringify(car), { status: 201 });
      } catch (error) {
        return new Response({error}, { status: 500 });
      }
}