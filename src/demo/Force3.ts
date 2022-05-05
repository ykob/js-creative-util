import { Vector3 } from '../'

class Force3 {
  acceleration: Vector3 = [0, 0, 0]
  velocity: Vector3 = [0, 0, 0]

  applyForce(v: Vector3) {
    this.acceleration[0] += v[0]
    this.acceleration[1] += v[1]
    this.acceleration[2] += v[2]
  }

  setVelocity(v: Vector3) {
    this.velocity[0] += v[0]
    this.velocity[1] += v[1]
    this.velocity[2] += v[2]
  }

  updateVelocity() {
    this.velocity[0] += this.acceleration[0]
    this.velocity[1] += this.acceleration[1]
    this.velocity[2] += this.acceleration[2]
  }
}

export default Force3
