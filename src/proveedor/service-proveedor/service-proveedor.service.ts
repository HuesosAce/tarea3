import { HttpStatus, Injectable } from '@nestjs/common';
import { PROVEEDORES } from 'models/models';
import { InterfaceProveedor } from '../interface-proveedor/interface-proveedor.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProveedorDTO } from '../DTO/proveedor.dto';

@Injectable()
export class ServiceProveedorService {
    constructor(@InjectModel(PROVEEDORES.name) private readonly modelo:Model<InterfaceProveedor>){}

    async insertar (proveedor: ProveedorDTO): Promise<InterfaceProveedor>{
        const newProveedor = new this.modelo({...proveedor});
        return await newProveedor.save();
    }

    async todos(): Promise<InterfaceProveedor []>{
        return await this.modelo.find();
    }

    async uno(id:string): Promise<InterfaceProveedor>{
        return await this.modelo.findById(id);
    }

    async actualizar (id: string, proveedorDTO: ProveedorDTO): Promise<InterfaceProveedor>{
        const proveedor = {...proveedorDTO};
        return await this.modelo.findByIdAndUpdate(id,proveedor,{new:true});
    }

    async eliminar ( id: string ){
        await this.modelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK};
    }
}
