import { Vector3 } from '../models'
import { mult, normalize } from './utils.js'

const friction = (acceleration: Vector3, c: number): Vector3 => {
  const dir = normalize(mult(acceleration, -1))
  return mult(dir, c)
}

export default friction
