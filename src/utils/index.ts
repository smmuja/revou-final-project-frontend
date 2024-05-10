export function MergeTwoArray<T>(oldArray: T[], newArray: T[]): T[] {
    let tempOldArr = oldArray;
    if (tempOldArr.length > 20) {
        tempOldArr = tempOldArr.slice(10)
    }
    return [...tempOldArr, ...newArray];
}