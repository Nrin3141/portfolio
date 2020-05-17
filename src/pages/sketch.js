import React, { useRef, useEffect } from "react"
import p5, { Vector } from "p5"
import Quadtree from "quadtree-lib"
import { v4 } from "uuid"

const Dot = class Dot {
  constructor(p, x, y, w) {
    this.p = p
    this.pos = this.p.createVector(
      this.p.random(0, window.innerWidth),
      this.p.random(0, window.innerHeight / 2)
    )
    this.id = v4()
    this.target = this.p.createVector(x, y)
    this.vel = Vector.random2D()
    this.acc = this.p.createVector()
    this.r = w < 600 ? (w < 400 ? 1.5 : 3) : 5
    this.maxspeed = 10
    this.maxforce = 1
    this.show = this.show.bind(this)
    this.applyForce = this.applyForce.bind(this)
    this.update = this.update.bind(this)
    this.arrive = this.arrive.bind(this)
    this.flee = this.flee.bind(this)
  }
  show(r, g, b) {
    this.p.stroke(r, g, b)
    this.p.strokeWeight(this.r)
    this.p.point(this.pos.x, this.pos.y)
  }
  applyForce(f) {
    this.acc.add(f)
  }
  flee() {
    let xDiff = this.p.mouseX - this.pos.x
    let yDiff = this.p.mouseY - this.pos.y
    let fleeVector = this.p.createVector(-xDiff, -yDiff)
    fleeVector.setMag(1)
    this.applyForce(fleeVector)
  }
  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }
  arrive() {
    const desired = Vector.sub(this.target, this.pos)
    const d = desired.mag()
    const speed =
      d < 100 ? this.p.map(d, 0, 100, 0, this.maxspeed) : this.maxspeed
    desired.setMag(speed)
    const steer = Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    steer.mult(0.5)
    this.applyForce(steer)
  }
}

const Sketch = () => {
  const myRef = useRef(null)
  const sketch = p => {
    let w = window.innerWidth
    let h = window.innerHeight
    let dot
    let font
    let points
    let points2
    let dots = []
    const quadtree = new Quadtree({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    p.preload = () => {
      font = p.loadFont("/Avenir.otf")
    }
    p.setup = () => {
      w = window.innerWidth
      h = window.innerHeight
      points = []
      points2 = []
      dots = []
      p.createCanvas(w, h)
      points = font.textToPoints("Develop", w / 6.5, w / 7, w / 8, {
        sampleFactor: w < 600 ? (w < 400 ? 0.7 : 0.5) : 0.25,
      })
      points2 = font.textToPoints("your ideas", w / 6.5, w / 4, w / 8, {
        sampleFactor: w < 600 ? (w < 400 ? 0.7 : 0.5) : 0.25,
      })

      points.forEach(point => {
        dot = new Dot(p, point.x, point.y, w)
        dots.push(dot)
      })
      points2.forEach(point => {
        dot = new Dot(p, point.x, point.y, w)
        dots.push(dot)
      })
    }

    p.draw = () => {
      p.background(51)
      p.fill(255)
      dots.forEach(dot => {
        dot.arrive()
        dot.update()
        dot.show(249, 220, 92)
        quadtree.push(
          {
            x: dot.pos.x,
            y: dot.pos.y,
            width: dot.w,
            height: dot.w,
            id: dot.id,
          },
          false
        )
      })
      const colliding = quadtree.colliding({
        x: p.mouseX,
        y: p.mouseY,
        width: 50,
        height: 50,
      })
      colliding.forEach(({ id }) => dots.find(dot => dot.id === id).flee())
      quadtree.clear()
      let fps = p.frameRate()
      p.fill(255)
      p.stroke(51)
      p.text("FPS: " + fps.toFixed(0), 10, h - 10)
    }
  }
  useEffect(() => {
    new p5(sketch, myRef.current)
  }, [])
  return <div ref={myRef}></div>
}

export default Sketch
