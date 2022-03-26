const PbxCatalog = require('../models/PbxCatalog.model')

// Get Methods
const getAllPbxExtension = async (req, res) => {
  const PbxExtensions = await PbxCatalog.find({})
  res.send(PbxExtensions)
}

const getOnePbxExtension = async (req, res) => {}

const getPbxExtensionByFactory = async (req, res) => {}

// Post Methods

const postNewPbxExtension = async (req, res) => {}

const postPbxExtensions = async (req, res) => {
  const pbxs = await PbxCatalog.insertMany(req.body.pbx)
}

module.exports = {
  getAllPbxExtension,
  getOnePbxExtension,
  getPbxExtensionByFactory,
  postNewPbxExtension,
  postPbxExtensions,
}
