type findInObj_TP = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => TObj[TKey]

const findInObj: findInObj_TP = (obj, key) => obj[key]

const obj = {
  a: 1,
  b: 'hashim',
  c: true
}

const keyResult = findInObj(obj, 'c')