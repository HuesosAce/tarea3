import mongoose from "mongoose";

export const SuministraSchema = new mongoose.Schema(
    {
        proveedor: [{type:mongoose.Schema.Types.ObjectId, ref: 'proveedor'}],
    },
    {
        timestamps: true,
    }
);