const { Schema, model } = require('mongoose')

const PbxCatalogSchema = new Schema(
  {
    ext: { type: Number, unique: true, required: true },
    user: { type: String },
    dept: { type: String, required: true },
    city: { type: String },
    factory: { type: String, required: true },
    position: { type: String },
    state: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

module.exports = model('PbxCatalog', PbxCatalogSchema)
