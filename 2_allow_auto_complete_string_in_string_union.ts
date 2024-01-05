// type sizes = 'xs' | 'sm' | Omit<string, 'xs' | 'sm'>
// const size: sizes = ''

type sizes = allowAutoComplete<'xs' | 'sm'>
type allowAutoComplete<T extends string> = T | Omit<string, T>
const size: sizes = ''