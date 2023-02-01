// Функция selectBanners принимает массив баннеров(объектов как в примере) и
// число, обозначающее количество баннеров, которое нужно выбрать из массива.
// Необходимо реализовать функцию так, чтобы функция выбирала переданное количество
// случайных баннеров(баннеры уникальны, не должны повторяться в результате),
// учитывая их вес(свойство weight в объектах баннеров).Чем больший вес имеет
// баннер, тем больше шансов того что этот баннер должен быть выбран.
// Если массив баннеров содержит меньше или столько же элементов, сколько было
// запрошено, то функция должна вернуть все элементы массива.

function selectBanners(banners, count) {
    let result = [];
    if (banners.length <= count) {
        return banners
    } else {
        let newDict = {};
        let unionWeight = 0;
        banners.forEach(element => {
            newDict[element['id']] = [unionWeight, unionWeight + element['weight']];
            unionWeight += element['weight'];
        });

        for (let i = 0; i < count; i++) {
            flag = true;
            while (flag) {
                let rand = getRandomInt(0, unionWeight);
                for (const key in newDict) {
                    if (newDict[key][0] <= rand && newDict[key][1] >= rand) {
                        if (!result.includes(key)) {
                            result.push(key);
                            flag = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const banners = [
    { id: 2, weight: 10 },
    { id: 4, weight: 5 },
    { id: 8, weight: 15 },
    { id: 22, weight: 18 },
    { id: 41, weight: 41 },
    { id: 53, weight: 1 },
    { id: 69, weight: 9 },
];

for (let j = 0; j < 5; j++) {
    console.log(...selectBanners(banners, 3));
}


