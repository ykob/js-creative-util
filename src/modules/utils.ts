import { Vector3 } from '../models'

const mag = (v: Vector3): number => {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2))
}

export { mag }
