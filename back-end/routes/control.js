const router = require('express').Router();
const contolController = require('../controllers/controlController')
router.post('/forgot-password/verify-email',  contolController.verify_email)
const { verifyUserToken, IsUser, IsAdmin } = require('../middlewares/auth')


router.use(verifyUserToken);

router.put('/update-user', IsUser, contolController.update_user)



router.put('/forgot-password/change-password', IsUser, contolController.change_password)

module.exports = router;