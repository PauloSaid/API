import { Request, Response } from "express"
import UserServices from "../services/UserServices"
import {Prisma} from "@prisma/client"

class UserController{
    constructor(){}

    async listUsers(req: Request, res: Response){
        const users = await UserServices.findUsers() as Prisma.UsuarioCreateInput[];

        const filteredUsers = users.filter((user: Prisma.UsuarioCreateInput) => user.email != null)

        return res.status(200).json({
            status: "OK",
            users: filteredUsers,
        })
    }

    async createUser(req: Request, res: Response){
        const data: Prisma.UsuarioCreateInput = req.body;
        if(data){
            const newuser = UserServices.createUser(data);
            res.status(200).json({
                status: '20',
                newuser: newuser
            });
        }else {
            res.status(400).json({
                status: "ERROR",
                mensage: "Missing data"
            });
        }
        res.end('User created')
    }

    
}

export default new UserController();