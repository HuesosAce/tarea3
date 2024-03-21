import mongoose from "mongoose";

export const PedidoSchema = new mongoose.Schema({
    nombre: {type: String, required:true},
    producto_suministrado: {type: String, required:true},
    contacto: {type: String, required:true},
    telefono: {type: String, required:true}
},{
    timestamps:true
});

PedidoSchema.index({contacto:1}, {unique:true});
PedidoSchema.index({telefono:1}, {unique:true});