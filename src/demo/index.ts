import Force3 from './Force3.js'
import { drag, Hook } from '../index.js'
import { Vector3 } from '../models/index.js'

const DRAG_C = 0.2
const HOOK_K = 0.05
const HOOK_LEN = 50

const elmCircle1: HTMLElement | null = document.querySelector('.circle1')
const elmCircle2: HTMLElement | null = document.querySelector('.circle2')
const force3a = new Force3()
const force3b = new Force3()
const gravity: Vector3 = [0, -2, 0]
const hook1 = new Hook(HOOK_K, HOOK_LEN)
const hook2 = new Hook(HOOK_K, HOOK_LEN)
const mousePosition: Vector3 = [0, 0, 0]
const resolution = [0, 0]

const resize = () => {
  resolution[0] = window.innerWidth
  resolution[1] = window.innerHeight
}
const update = () => {
  const hookForce1 = hook1.update(force3a.velocity)
  force3a.applyForce(gravity)
  force3a.applyForce(hookForce1)
  force3a.applyForce(drag(force3a.acceleration, DRAG_C))
  force3a.updateVelocity()
  const hookForce2 = hook2.update(force3b.velocity)
  force3b.applyForce(gravity)
  force3b.applyForce(hookForce2)
  force3b.applyForce(drag(force3b.acceleration, DRAG_C))
  force3b.updateVelocity()
  if (elmCircle1)
    elmCircle1.style.transform = `translate3d(${force3a.velocity[0]}px, ${force3a.velocity[1]}px, ${force3a.velocity[2]}px)`
  if (elmCircle2)
    elmCircle2.style.transform = `translate3d(${force3b.velocity[0]}px, ${force3b.velocity[1]}px, ${force3b.velocity[2]}px)`
  requestAnimationFrame(update)
}
const start = () => {
  resize()
  hook1.setAnchor(mousePosition)
  hook2.setAnchor(force3a.velocity)
  force3b.setVelocity([0, 100, 0])
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', (e) => {
    mousePosition[0] = e.clientX - resolution[0] * 0.5
    mousePosition[1] = e.clientY - resolution[1] * 0.5
  })
  update()
}

start()
