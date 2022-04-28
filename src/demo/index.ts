import Force3 from './Force3.js'
import { drag, Hook } from '../index.js'
import { Vector3 } from '../models/index.js'

const DRAG_C = 0.2
const HOOK_K = 0.05
const HOOK_LEN = 50

const elmCircle: HTMLElement | null = document.querySelector('.circle')
const force3 = new Force3()
const gravity: Vector3 = [0, -2, 0]
const hook = new Hook(HOOK_K, HOOK_LEN)
const mousePosition: Vector3 = [0, 0, 0]
const resolution = [0, 0]

const resize = () => {
  resolution[0] = window.innerWidth
  resolution[1] = window.innerHeight
}
const update = () => {
  const hookForce = hook.update(force3.velocity)
  force3.applyForce(gravity)
  force3.applyForce(hookForce)
  force3.applyForce(drag(force3.acceleration, DRAG_C))
  force3.updateVelocity()
  elmCircle!.style.transform = `translate3d(${force3.velocity[0]}px, ${force3.velocity[1]}px, ${force3.velocity[2]}px)`
  requestAnimationFrame(update)
}
const start = () => {
  resize()
  hook.setAnchor(mousePosition)
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', (e) => {
    mousePosition[0] = e.clientX - resolution[0] * 0.5
    mousePosition[1] = e.clientY - resolution[1] * 0.5
  })
  update()
}

start()
