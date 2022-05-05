import { Vector3 } from '../'
import { mag, mult, normalize, sub } from './utils'

const attract = (
  vSelf: Vector3,
  mSelf: number,
  vTarget: Vector3,
  mTarget: number,
  distMin: number,
  distMax: number
): Vector3 => {
  const v = sub(vTarget, vSelf)
  const dist = Math.min(Math.max(mag(v), distMin), distMax)
  const dir = normalize(v)
  if (dist === 0) {
    return [0, 0, 0]
  } else {
    const str = (1 * mSelf * mTarget) / Math.pow(dist, 2)
    return mult(dir, str)
  }
}

export default attract
