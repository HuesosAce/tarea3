import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { PedidoModule } from './pedido/pedido.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SuministraModule } from './suministra/suministra.module';
@Module({
  imports: [ProveedorModule, PedidoModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    SuministraModule,
  ]

  ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
