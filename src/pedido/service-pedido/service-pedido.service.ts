import { HttpStatus, Injectable } from '@nestjs/common';
import { PedidoDTO } from '../DTO/pedido.dto';
import { InterfacePedido } from '../interface-pedido/interface-pedido.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PEDIDOS } from 'models/models';
import { Model } from 'mongoose';

@Injectable()
export class ServicePedidoService {
    constructor(@InjectModel(PEDIDOS.name) private readonly modelo:Model<InterfacePedido>){}

    async insertar (pedidoDTO: PedidoDTO): Promise<InterfacePedido>{
        const newPedido = new this.modelo({...pedidoDTO});
        return await newPedido.save();
    }

    async todos(): Promise<InterfacePedido []>{
        return await this.modelo.find();
    }

    async uno(id:string): Promise<InterfacePedido>{
        return await this.modelo.findById(id);
    }

    async actualizar (id: string, pedidoDTO: PedidoDTO): Promise<InterfacePedido>{
        const pedido = {...pedidoDTO};
        return await this.modelo.findByIdAndUpdate(id,pedido,{new:true});
    }

    async eliminar ( id: string ){
        await this.modelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK};
    }

}
