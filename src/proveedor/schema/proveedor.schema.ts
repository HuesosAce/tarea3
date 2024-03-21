import mongoose from "mongoose";

export const ProveedorSchema = new mongoose.Schema({
    fecha: {type: Date, required:true},
    total: {type: Number, required:true},
    estado: {type: String, required:true},
    metodo_pago: {type: String, required:true}
},{
    timestamps:true
});

ProveedorSchema.index({estado:1}, {unique:true});
ProveedorSchema.index({metodo_pago:1}, {unique:true});