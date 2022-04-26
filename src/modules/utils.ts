import { Vector3 } from '../models'

const add = (v1: Vector3, v2: Vector3): Vector3 => {
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]]
}

const mag = (v: Vector3): number => {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2))
}

const normalize = (v: Vector3): Vector3 => {
  const length = mag(v)
  return [v[0] / length, v[1] / length, v[2] / length]
}

const sub = (v1: Vector3, v2: Vector3): Vector3 => {
  return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]]
}

export { add, mag, normalize, sub }
