interface api {
  'maps:a': string
  'maps:b': string
  'bsbs': boolean
}

type removeMaps<T extends object> = {
  [key in keyof T as remover<key>]: T[key]
}

type remove = removeMaps<api>

type remover<T> = T extends `maps:${infer U}` ? U : T