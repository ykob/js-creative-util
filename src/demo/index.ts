import Force3 from './Force3.js'
import { attract, drag, Hook } from '../index.js'
import { Vector3 } from '../models/index.js'

const DRAG_C = 0.2
const HOOK_K = 0.05
const HOOK_LEN = 50

const elmCircle1: HTMLElement | null = document.querySelector('.circle1')
const elmCircle2: HTMLElement | null = document.querySelector('.circle2')
const force3a = new Force3()
const force3b = new Force3()
const gravity: Vector3 = [0, -2, 0]
const hook = new Hook(HOOK_K, HOOK_LEN)
const mousePosition: Vector3 = [0, 0, 0]
const resolution = [0, 0]

const resize = () => {
  resolution[0] = window.innerWidth
  resolution[1] = window.innerHeight
}
const update = () => {
  const hookForce = hook.update(force3a.velocity)
  force3a.applyForce(gravity)
  force3a.applyForce(hookForce)
  force3a.applyForce(drag(force3a.acceleration, DRAG_C))
  force3a.updateVelocity()
  force3b.applyForce(attract(force3b.velocity, 10, force3a.velocity, 100, 25, 50))
  force3b.updateVelocity()
  elmCircle1!.style.transform = `translate3d(${force3a.velocity[0]}px, ${force3a.velocity[1]}px, ${force3a.velocity[2]}px)`
  elmCircle2!.style.transform = `translate3d(${force3b.velocity[0]}px, ${force3b.velocity[1]}px, ${force3b.velocity[2]}px)`
  requestAnimationFrame(update)
}
const start = () => {
  resize()
  hook.setAnchor(mousePosition)
  force3b.setVelocity([0, 100, 0])
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', (e) => {
    mousePosition[0] = e.clientX - resolution[0] * 0.5
    mousePosition[1] = e.clientY - resolution[1] * 0.5
  })
  update()
}

start()
