import { InterfacePedido } from "src/pedido/interface-pedido/interface-pedido.interface";
import { InterfaceProveedor } from "src/proveedor/interface-proveedor/interface-proveedor.interface"

export interface InterfaceSuministra extends Document{
    proveedor: InterfaceProveedor[];
    pedido : InterfacePedido[];

}
