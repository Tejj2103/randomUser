const User = require("../schema/userschema");


const saveUserData = (data) => {
    data.forEach((data) => {
        var user = new User({
            name: data.name,
            gender: data.gender,
            location: {
                street: {
                    number: data.location.street.number,
                    name: data.location.street.name,
                },
                city: data.location.city,
                state: data.location.state,
                postcode: data.location.postcode,
            },
            email: data.email,
            dob: {
                date: data.dob.date,
                age: data.dob.age
            },
            registered: {
                date: data.registered.date,
                age: data.registered.age
            },
            phone: data.phone,
            cell: data.cell,
            user_id: data.id,
            nat: data.nat,
        });
        user.save().then((data) => { console.log("saved in db") });
    });
};

module.exports = saveUserData;