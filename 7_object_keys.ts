interface keys_TP {
  <T extends {}>(obj: T): (keyof T)[]
}

const keys = ((obj) => Object.keys(obj)) as keys_TP