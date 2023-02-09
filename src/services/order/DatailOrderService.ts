import prismaClient from "../../prisma";

interface DatailRequest{
    order_id: string;
}

class DatailOrderService{
    async execute({order_id}: DatailRequest){

        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product: true,
                order: true
            }
        });

        return orders
    }
}

export { DatailOrderService }