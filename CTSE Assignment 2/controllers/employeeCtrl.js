const Employee = require('../models/employeeModel') 

const employeeCtrl = {
    getEmployee: async(req, res) =>{
        try {
            const employee = await Employee.find()
            res.json(employee)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createEmployee: async(req, res) =>{
        try {
            const {name, title, age, description, images, salary} = req.body;
            // if(!images) return res.status(400).json({msg: "No image upload"})

            const employee = await Employee.findOne({name})
            if(employee)
                return res.status(400).json({msg: "This employee already exists."})

            const newEmployee = new Employee({
                name, title: title.toLowerCase(), age, description, images, salary
            })

            await newEmployee.save()
            res.json({msg: "Created a New Emplyee"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteEmployee: async(req, res) =>{
        try {
            await Employee.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Employee"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateEmployee: async(req, res) =>{
        try {
            const {name, title, age, description, images, salary} = req.body;
            // if(!images) return res.status(400).json({msg: "No image upload"})

            await Employee.findOneAndUpdate({_id: req.params.id}, {
                name, title: title.toLowerCase(), age, description, images, salary
            })

            res.json({msg: "Updated a Employee"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = employeeCtrl