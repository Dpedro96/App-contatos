export default class Contato{
    private _id: string;
    private _nome: string;
    private _telefone: number;
    private _email: string;
    constructor(nome: string, telefone: number, email: string){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
}