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
  await PbxCatalog.insertMany(req.body)

  res.send('Ok!')
}

module.exports = {
  getAllPbxExtension,
  getOnePbxExtension,
  getPbxExtensionByFactory,
  postNewPbxExtension,
  postPbxExtensions,
}
