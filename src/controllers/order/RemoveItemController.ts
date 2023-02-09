import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";


class RemoveItemController{
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string;

        const removeItemService = new RemoveItemService();
        const orderRemove = await removeItemService.execute({
            item_id
        });

       return res.json(orderRemove)
    }
}
export { RemoveItemController}