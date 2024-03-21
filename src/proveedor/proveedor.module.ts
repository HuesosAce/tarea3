import { Module } from '@nestjs/common';
import { ControllerProveedorController } from './controller-proveedor/controller-proveedor.controller';
import { ServiceProveedorService } from './service-proveedor/service-proveedor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PROVEEDORES } from 'models/models';
import { ProveedorSchema } from './schema/proveedor.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: PROVEEDORES.name,
      useFactory: () => {
        return ProveedorSchema;
      }
    }])
  ],
  controllers: [ControllerProveedorController],
  providers: [ServiceProveedorService],
  exports:[ServiceProveedorService]

})
export class ProveedorModule { }
