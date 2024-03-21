import { IsNotEmpty, IsString } from "class-validator";


export class PedidoDTO {
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    @IsNotEmpty()
    @IsString()
    readonly producto_suministrado: string;
    @IsNotEmpty()
    @IsString()
    readonly contacto: string;
    @IsNotEmpty()
    @IsString()
    readonly telefono: string;
}