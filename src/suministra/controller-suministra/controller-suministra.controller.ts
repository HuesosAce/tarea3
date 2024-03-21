import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceSuministraService } from '../service-suministra/service-suministra.service';
import { ServiceProveedorService } from 'src/proveedor/service-proveedor/service-proveedor.service';
import { ServicePedidoService } from 'src/pedido/service-pedido/service-pedido.service';
import { SuministraDTO } from '../DTO/suministra.dto';

@Controller('api/v2/suministra')
export class ControllerSuministraController {
    constructor(private readonly serviceSuministraService: ServiceSuministraService,private readonly serviceProveedorService: ServiceProveedorService,private readonly servicePedidoService: ServicePedidoService) {}


    @Post()
    insertar(@Body() suministraDTO: SuministraDTO){
    return this.serviceSuministraService.insertar(suministraDTO);
    }

    @Get()
    todos(){
        return this.serviceSuministraService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.serviceSuministraService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() suministraDTO:SuministraDTO){
        return this.serviceSuministraService.actualizar(id, suministraDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.serviceSuministraService.eliminar(id);
    }

    @Post(':suministraId/proveedor/:proveedorId')
    async agregarProveedor(
        @Param('suministraId') suministraId:string,
        @Param('proveedorId') proveedorId:string,
        
    ){
        const proveedor = await this.serviceProveedorService.uno(proveedorId);
        if(!proveedor ) throw new Error(' Proveedor no encontrado');
        return this.serviceSuministraService.insertarProveedor(suministraId,proveedorId);
    }
    @Post(':suministraId/pedido/:pedidoId')
    async agregarPedido(
        @Param('suministraId') suministraId:string,        
        @Param('pedidoId') pedidoId:string,
    ){
        const pedido = await this.servicePedidoService.uno(pedidoId);
        if(!pedido ) throw new Error(' Pedido no encontrado');
        return this.serviceSuministraService.insertarPedido(suministraId,pedidoId);
    }


}


