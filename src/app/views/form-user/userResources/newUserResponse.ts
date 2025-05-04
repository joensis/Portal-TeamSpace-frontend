import { NewUsers } from "./models/NewUsers";

export interface NewUserResponse extends Object{
    id: number,
    message: string,
    newUser: NewUsers


}