const Pass = require('../model/Pass.model');

//Create new pass 
const createPass = async (req, res) => {
    //catching data from front end to these attributes
    const { firstName, lastName, nic, validMonths, trainClass, fromStation, toStation, createdDate } = req.body;

    //create a object to store saved data to save in the mongo db database
    const pass = new Pass({
        firstName,
        lastName,
        nic,
        validMonths,
        trainClass,
        fromStation,
        toStation,
        createdDate,
    });

    //sending created pass object to the database 
    await pass.save()
        .then(() => res.json('Pass has been Created.'))
        .catch(err => res.status(400).json('Error  (Create): ' + err));
};

//Delete pass by id
const deletePass = async (req, res) => {
    console.log(req.params.id);
    Pass.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pass has been Deleted'))
        .catch(err => res.status(400).json('Error  (Delete): ' + err));
}

//get pass info by id
const getPassById = async (req, res) => {
    try {
        const pass = await Pass.findById(req.params.id);
        if (pass)
            res.json(pass)
        else {
            res.json("No pass record in the database!");
        }
    } catch (error) {
        res.status(500).send("Server Error  (GetById)" + error);
    }
};

//get all Pass records
const getPass = async (req, res) => {
    try {
        const pass = await Pass.find();
        res.json(pass)
    } catch (error) {
        res.status(500).send("Server Error (getAll) : " + error);
    }
}

//Update Exsisting Pass record
const updatePass = async (req, res) => {
    Pass.findByIdAndUpdate(req.params.id).
        then((exsistingPass) => {
            exsistingPass.firstName = req.body.firstName;
            exsistingPass.lastName = req.body.lastName;
            exsistingPass.nic = req.body.nic;
            exsistingPass.validMonths = req.body.validMonths;
            exsistingPass.trainClass = req.body.trainClass;
            exsistingPass.fromStation = req.body.fromStation;
            exsistingPass.toStation = req.body.toStation;
            exsistingPass.createdDate = Date.parse(req.body.createdDate);
            exsistingPass.save()
                .then((updatedPass) => res.json(updatedPass))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: (Update)" + error));
};

//export 
module.exports = {
    createPass,
    deletePass,
    getPassById,
    getPass,
    updatePass
};

