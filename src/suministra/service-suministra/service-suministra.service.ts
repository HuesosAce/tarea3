import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SUMINISTRA } from 'models/models';
import { Model } from 'mongoose';
import { InterfaceSuministra } from '../interface-suministra/interface-suministra.interface';
import { SuministraDTO } from '../DTO/suministra.dto';

@Injectable()
export class ServiceSuministraService {
    constructor (@InjectModel(SUMINISTRA.name) private readonly model:Model<InterfaceSuministra>){}

    insertar(suministraDTO: SuministraDTO):Promise <InterfaceSuministra>{
        const newSuministra = new this.model(suministraDTO);
        return newSuministra.save();
    }

    todos():Promise <InterfaceSuministra []>{
        return this.model.find();
    }

    uno(id:string):Promise<InterfaceSuministra>{
        return this.model.findById(id);
    }

    actualizar(id:string, suministraDTO:SuministraDTO):Promise<InterfaceSuministra>{
        return this.model.findByIdAndUpdate(id,suministraDTO);
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:"Usuarios Eliminado"};
    }

    async insertarProveedor(suministraId:string, proveedorId:string): Promise<InterfaceSuministra>{
        return await this.model.findByIdAndUpdate(suministraId,{$addToSet:{proveedor:proveedorId},}, {new:true}, ).populate('proveedor');
    }

    async insertarPedido(suministraId:string, pedidoId:string): Promise<InterfaceSuministra>{
        return await this.model.findByIdAndUpdate(suministraId,{$addToSet:{pedido:pedidoId},}, {new:true}, ).populate('pedido');
    }
    
}
