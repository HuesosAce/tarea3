import { Module } from '@nestjs/common';
import { ControllerPedidoController } from './controller-pedido/controller-pedido.controller';
import { ServicePedidoService } from './service-pedido/service-pedido.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PEDIDOS } from 'models/models';
import { PedidoSchema } from './schema/pedido.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync ([{
     name: PEDIDOS.name,
     useFactory:() => {
      return PedidoSchema;
     }
    }])
  ],
  controllers: [ControllerPedidoController],
  providers: [ServicePedidoService],
  exports: [ServicePedidoService]
})
export class PedidoModule {}
