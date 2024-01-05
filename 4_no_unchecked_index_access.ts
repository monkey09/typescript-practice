const obj: Record<string, string[]> = {}

if (!obj.s) {
  obj.s = []
}

obj.s.push('f')

console.log(obj)