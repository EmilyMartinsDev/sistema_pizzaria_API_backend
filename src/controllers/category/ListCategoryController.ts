import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryServer = new ListCategoryService();
        const category = await listCategoryServer.execute();

        return res.json(category)
    }
}

export { ListCategoryController }