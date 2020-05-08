const User = require('../schema/userschema');
const maleUsers = require('../model/maleData');
const femaleUsers = require('../model/femaleData');

const getUserData = async () => {
    var maleData = await User.find({ gender: "male" }).then((data) => {
        var maleRes = [];
        data.forEach((item) => {
            var male = {
                age: item.dob.age,
                Nationality: item.nat
            }
            maleRes.push(male);
        })
        return maleRes;
    });
    var femaleData = await User.find({ gender: "female" }).then((data) => {
        var femaleRes = [];
        data.forEach((item) => {
            var female = {
                age: item.dob.age,
                Nationality: item.nat
            }
            femaleRes.push(female);
        })
        return femaleRes;
    });
    var resultMale = maleUsers(maleData);
    var resultFemale = femaleUsers(femaleData);
    var array = [resultMale, resultFemale]
    return (array);
}

module.exports = getUserData;