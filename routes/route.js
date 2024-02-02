const express= require('express')
const router= express.Router();
const {  show_exercise,
    Delete_Exercise, SaveExercis}= require('../controller/article')

router.get('/',show_exercise )
router.post('/',  SaveExercis)
router.delete('/:id',Delete_Exercise)

module.exports = router;