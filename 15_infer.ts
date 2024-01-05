type returnType<T extends Function> = 
  (...args: any) => T extends (...args: any) => infer U 
  ? U : never

export const func = (s: number) => 'ahmad'
type returnTypeResult = returnType<typeof func>


// another example
type objTest<T> = T extends {
  a: {
    b: {
      c: infer U
    }
  }
} ? U : never