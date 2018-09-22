export function sortingData(type, flag) {
    if (flag) {
        return function (itemA, itemB) {
            return itemA[type] > itemB[type] ? -1 : 1;
        }

    } else {
        return function (itemA, itemB) {
            return itemA[type] > itemB[type] ? 1 : -1;
        }
    }
}
