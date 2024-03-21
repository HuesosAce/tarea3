import { Module } from '@nestjs/common';
import { ControllerSuministraController } from './controller-suministra/controller-suministra.controller';
import { ServiceSuministraService } from './service-suministra/service-suministra.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SUMINISTRA } from 'models/models';
import { SuministraSchema } from './schema/suministra.schema';
import { ProveedorModule } from 'src/proveedor/proveedor.module';
import { PedidoModule } from 'src/pedido/pedido.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:SUMINISTRA.name,
      useFactory: ()=> SuministraSchema.plugin(require('mongoose-autopopulate')),
    }]),
    ProveedorModule,
    PedidoModule
  ],
  controllers: [ControllerSuministraController],
  providers: [ServiceSuministraService]
})
export class SuministraModule {}
