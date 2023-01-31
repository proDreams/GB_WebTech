from random import randint

BANNERS = [{'id': 2, 'weight': 10},
           {'id': 4, 'weight': 5},
           {'id': 8, 'weight': 15},
           {'id': 22, 'weight': 18},
           {'id': 41, 'weight': 41},
           {'id': 53, 'weight': 1},
           {'id': 69, 'weight': 9},]


def selectBanners(banners, count):
    result = []
    if len(banners) <= count:
        return banners
    else:
        newDict = {}
        unionWeight = 0
        for element in banners:
            newDict[element['id']] = [unionWeight, unionWeight + element['weight']]
            unionWeight += element['weight']

        for i in range(count):
            flag = True
            while (flag):
                rand = randint(0, unionWeight)
                for key in newDict:
                    if newDict[key][0] <= rand and newDict[key][1] >= rand:
                        if key not in result:
                            result.append(key)
                            flag = False
                            break
    return result

for j in range(5):
    print(*selectBanners(BANNERS, 3))