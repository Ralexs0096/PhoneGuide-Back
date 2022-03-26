const { Schema, model } = require('mongoose')

const PbxCatalogSchema = new Schema(
  {
    ext: { type: Number, unique: true },
    user: { type: String },
    dept: { type: String },
    city: { type: String },
    factory: { type: String },
    position: { type: String },
    state: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

module.exports = model('PbxCatalog', PbxCatalogSchema)
