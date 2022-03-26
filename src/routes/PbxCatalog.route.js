const { Router } = require('express')
const {
  getAllPbxExtension,
  getOnePbxExtension,
  getPbxExtensionByFactory,
  postNewPbxExtension,
  postPbxExtensions,
} = require('../controllers/PbxCatalog.controller')
const router = Router()

router.get('/', getAllPbxExtension)
router.get('/:id', getOnePbxExtension)
router.get('/:fact', getPbxExtensionByFactory)
router.post('/', postNewPbxExtension)
router.post('/many', postPbxExtensions)

module.exports = router
