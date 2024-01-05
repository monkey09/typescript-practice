interface deebValue {
  <obj, fk extends keyof obj, sk extends keyof obj[fk]>(
    obj: obj,
    fk: fk,
    sk: sk
  ): obj[fk][sk]
}

const myObj = {
  a: {
    b: 'b letter',
    c: 'c letter'
  }
}

const getDeebValue: deebValue = (obj, fk, sk) => { return obj[fk][sk] }

const dv = getDeebValue(myObj, 'a', 'c')