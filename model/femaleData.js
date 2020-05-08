const femaleUsers = (data) => {
    var nationality = [];
    var final = [];
    var raw = [];
    data.forEach(item => {
        nationality.push(item.Nationality);
    });
    nationality = Array.from(new Set(nationality));
    for (var i = 0; i < nationality.length; i++) {
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        for (var j = 0; j < data.length; j++) {
            if (data[j].Nationality == nationality[i]) {
                if (data[j].age > 0 && data[j].age < 30) {
                    count1++;
                }
                if (data[j].age >= 30 && data[j].age < 50) {
                    count2++;
                }
                if (data[j].age >= 50) {
                    count3++;
                }
            }
        }

        raw.push(nationality[i], count1, count2, count3);
    }
    for (var i = 0; i < raw.length; i += 4) {
        final.push(raw.slice(i, i + 4));
    }
    return final;
}

module.exports = femaleUsers;