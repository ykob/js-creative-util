import { Vector3 } from '../models'

const add = (v1: Vector3, v2: Vector3): Vector3 => {
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]]
}

const mag = (v: Vector3): number => {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2))
}

const mult = (v: Vector3, l: number): Vector3 => {
  return [v[0] * l, v[1] * l, v[2] * l]
}

const normalize = (v: Vector3): Vector3 => {
  const l = mag(v)
  return [v[0] / l, v[1] / l, v[2] / l]
}

const sub = (v1: Vector3, v2: Vector3): Vector3 => {
  return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]]
}

export { add, mag, mult, normalize, sub }
