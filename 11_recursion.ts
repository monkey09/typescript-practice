/* 
    An example of recursevely make object inners optional
*/

type deepPartial<T> = T extends Function 
? T
: T extends Array<infer ArrayMember>
? deepArray<ArrayMember>
: T extends object
? deepObject<T>
: T | undefined

interface deepArray<T> extends Array<deepPartial<T>> {}

type deepObject<T> = {
  [key in keyof T]?: deepPartial<T[key]>
}

interface Post {
  id: number
  title: string
  comments: {
    user: string
    content: string
  }[]
  images: string[]
}

const post: deepPartial<Post> = {
  id: 1,
  comments: [{
    user: 'hashim'
  }]
}