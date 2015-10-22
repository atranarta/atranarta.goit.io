var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {

    for (var key in obj) {
        if (!(isNaN(obj[key]))) {
            obj[key] = obj[key]*2;
        } else {
            obj[key] = obj[key];
        }
    }
    return image;
}

console.log(multiplyNumeric(image));


