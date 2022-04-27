import { Vector3 } from "../models"
import { mag, mult, normalize } from "./utils.js"

const drag = (acceleration: Vector3, c: number): Vector3 => {
  const length = c * mag(acceleration)
  const dir = mult(normalize(acceleration), -1)
  return mult(dir, length)
}

export default drag
