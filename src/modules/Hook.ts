import { Vector3 } from '../models'
import { mag, mult, normalize, sub } from './utils.js'

class Hook {
  anchor: Vector3 = [0, 0, 0]
  k: number
  restLength: number

  constructor(k: number, restLength: number) {
    this.k = k
    this.restLength = restLength
  }

  update(velocity: Vector3): Vector3 {
    const dir = sub(this.anchor, velocity)
    const x = this.restLength - mag(dir)

    return mult(normalize(dir), -1 * this.k * x)
  }

  setAnchor(anchor: Vector3): void {
    this.anchor = anchor
  }
}

export default Hook
