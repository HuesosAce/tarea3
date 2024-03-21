import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ServiceProveedorService } from '../service-proveedor/service-proveedor.service';
import { ProveedorDTO } from '../DTO/proveedor.dto';


@Controller('api/v2/proveedores')
export class ControllerProveedorController {
    constructor (private proveedorServicio: ServiceProveedorService){}
    @Post()
    @UsePipes(new ValidationPipe())
    insertar(@Body() proveedor:ProveedorDTO){
        return this.proveedorServicio.insertar(proveedor);
    }
    @Get()
    todos(){
        return this.proveedorServicio.todos();
    }

    @Get(":id")
    uno(@Param("id") id:string){
        return this.proveedorServicio.uno(id);
    }

    @Put(":id")
    actualizar(@Param("id") id:string, @Body() ProveedorDTO: ProveedorDTO){
        return this.proveedorServicio.actualizar(id,ProveedorDTO);
    }

    @Delete(":id")
    eliminar(@Param("id") id:string){
        return this.proveedorServicio.eliminar(id);
    }
}
