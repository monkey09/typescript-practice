type letters = 'a' | 'b' | 'c'

type removeC<T> = T extends 'c' ? never : T

type removedC = removeC<letters>

const t: removedC = 'a'