export interface LoginResponse extends Object{
    message:string,
    nameUser: string,
    emailUser: string,  
    token: string
}