import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ServicePedidoService } from '../service-pedido/service-pedido.service';
import { PedidoDTO } from '../DTO/pedido.dto';


@Controller('api/v2/pedidos')
export class ControllerPedidoController {
    constructor(private pedidoServicio: ServicePedidoService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    insertar(@Body() pedido: PedidoDTO) {
        return this.pedidoServicio.insertar(pedido);
    }

    @Get()
    todos() {
        return this.pedidoServicio.todos();
    }

    @Get(":id")
    uno(@Param("id") id: string) {
        return this.pedidoServicio.uno(id);
    }

    @Put(":id")
    actualizar(@Param("id") id: string, @Body() pedido: PedidoDTO) {
        return this.pedidoServicio.actualizar(id, pedido);
    }

    @Delete(":id")
    eliminar(@Param("id") id: string) {
        return this.pedidoServicio.eliminar(id);
    }
}
