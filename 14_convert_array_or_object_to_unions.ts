type objected = {a: string, b: number}
type arrayed = [string, number]

type unionArrays = arrayed[number]
type unionObjects = objected[keyof objected]