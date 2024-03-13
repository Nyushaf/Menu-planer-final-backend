const WeekModel = require('./WeekModel');

module.exports.getWeek = async (req, res) => {
    const { auth0_id } = req.query;
    const myWeek = await WeekModel.find({ auth0_id });
    res.send(myWeek)
}

module.exports.saveWeek = (req, res) => {
    const { auth0_id, weekName, days } = req.body;
    const newWeek = new WeekModel({ auth0_id, weekName, days });
    newWeek.save()
        .then((savedWeek) => {
            console.log('Week saved:', savedWeek);
            res.status(201).send(savedWeek);
        })
        .catch((error) => {
            console.error('Error saving week:', error);
            res.status(500).send('Error saving week');
        });
}

module.exports.deleteWeek = (req, res) => {
    const { weekId } = req.body;
    WeekModel.findByIdAndDelete(weekId)
        .then(() => {
            res.status(200).json({ message: 'Неделя успешно удалена' });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
}

module.exports.editWeek = (req, res) => {
    const { weekId, auth0_id, weekName, days } = req.body;
    WeekModel.findByIdAndUpdate(weekId, { auth0_id, weekName, days })
        .then(() => {
            res.status(200).json({ message: 'Неделя успешно отредактирована' });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
}