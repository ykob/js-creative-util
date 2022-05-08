import { Vector3 } from '../'
import { mag, mult, normalize } from './utils'

const drag = (acceleration: Vector3, c: number): Vector3 => {
  const length = c * mag(acceleration)
  const dir = mult(normalize(acceleration), -1)
  return mult(dir, length)
}

export default drag
