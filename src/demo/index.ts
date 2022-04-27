import Force3 from './Force3.js'
import { Hook } from '../index.js'

const elmCircle: HTMLElement | null = document.querySelector('.circle')
const force3 = new Force3()
const hook = new Hook(0.1, 10)

const update = () => {
  hook.setAnchor([50, 50, 0])
  const hookForce = hook.update(force3.velocity)
  force3.applyForce(hookForce)
  force3.updateVelocity()
  elmCircle!.style.transform = `translate3d(${force3.velocity[0]}px, ${-force3.velocity[1]}px, ${force3.velocity[2]}px)`
  requestAnimationFrame(update)
}
const start = () => {
  update()
}

start()
