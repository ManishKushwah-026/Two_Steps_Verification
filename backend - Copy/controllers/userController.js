const User = require("../models/User");

exports.createUser = async(req, res) => {
    try {
        //fetch data
        const {
            name, 
            age, 
            sex, 
            mobile, 
            govtIdType, 
            govtIssueId, 
            address="",
            state="",
            city="",
            country,
            pincode=""
        } = req.body;

        // validation
        const existingUser = await User.findOne({govtIssueId:govtIssueId});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exist",
            })
        }

        // entry create in database
        const user = await User.create({
            name,
            age,
            sex,
            mobile,
            govtIdType,
            govtIssueId,
            address,
            state,
            city,
            country,
            pincode
        })

        // return response
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            data:user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occurred while createing user"
        })
    }
}

exports.getAllUsers =  async(req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json({
            success: true,
            message: "fetched all users",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occurred while fetching all the users"
        })
    }
}

// {
//     "name" : "manish",
//     "age": "23",
//     "sex": "Male",
//     "mobile": "8789865457",
//     "govtIdType": "Aadhar",
//     "govtIssueId": "657898457865"
// }