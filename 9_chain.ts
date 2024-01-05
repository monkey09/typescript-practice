interface func1 {
  <T extends string>(args: T[]): <B extends Record<T, B[T]>>(obj: B) => Omit<B, T>
}

const func1: func1 = (args) => (obj) => {
  const newObj = {} as typeof obj
  args.forEach(key => !(key in obj) && (newObj[key] = obj[key]))
  return newObj
}

const func2 = func1(["a", "b"])

const func3 = func2({a: 1, b: 2, c: 3})