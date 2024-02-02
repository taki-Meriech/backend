const Exercise= require('../models/Exercise')

function SaveExercis(req, res) {
        const newExercice = new Exercise(req.body);
        newExercice.save()
            .then(() => {
                res.json('Exercise Saved');
            })
            .catch((err) => {
                console.log('Error'+err);
            });
    }

function Delete_Exercise(req, res){
    const id = req.params.id;
    Exercise.findByIdAndDelete(id)
        .then(() => {
            res.json('Deleted')
        })
        .catch((err) => {
            res.status(400).json('the error'+ err)
        });
}
function show_exercise(req, res){
    Exercise.find()
    .then((workouts) => {
       res.json(workouts)
    })
    .catch((err) => {
        res.status(400).json("Error" + err)
    });
}

module.exports={
    show_exercise,
    Delete_Exercise,
    SaveExercis
}