import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProveedorDTO{
    @IsNotEmpty()
    readonly fecha: Date;
    @IsNotEmpty()
    @IsNumber()
    readonly total: number;
    @IsNotEmpty()
    @IsString()
    readonly estado: string;
    @IsNotEmpty()
    @IsString()
    readonly metodo_pago: string;
}