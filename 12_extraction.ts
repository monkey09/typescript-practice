interface obj {
  a: "a"
  a2: "a2"
  a3: "a3"
  b: "b"
  b2: "b2"
  b3: "b3"
}

type extractionByKeyA<T> = {
  [key in Extract<keyof T, `a${string}`>]: T[key]
}

type extractionByValueA<T> = {
  [key in keyof T]: T[key] extends `a${string}` & string ? T[key] : never
}

// let t:extractionByKeyA<obj> = {}