type checkArray<T> = T extends any[] ? "u can't compare arrays idiot!" : T

interface compare {
  <Arg>(a: checkArray<Arg>, b: checkArray<Arg>): boolean
}

const compare: compare = (a, b) => a === b

const compare1 = compare(1, 2)
// const compare2 = compare([], [])