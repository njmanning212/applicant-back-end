import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:profileId', checkAuth, profilesCtrl.show)
router.post('/:jobId/resume', checkAuth, profilesCtrl.createResume)
router.post('/:jobId/brand', checkAuth, profilesCtrl.createBrandStatement)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)


export { router }
