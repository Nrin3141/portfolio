import React, { useRef, useEffect } from "react"
import p5, { Vector } from "p5"
import { QuadTree, Box, Point, Circle } from "js-quadtree"
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
    this.r = 5
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
    this.acc = this.p.createVector()
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
    let w = myRef.current.offsetWidth
    let h = myRef.current.offsetHeight
    let dot
    let font
    let points
    let points2
    let dots = []
    const quadtree = new QuadTree(new Box(0, 0, w, h))
    p.preload = () => {
      font = p.loadFont("/Avenir.otf")
    }
    p.setup = () => {
      p.createCanvas(w, h)
      const l = w / 3
      dots = [
        ...font.textToPoints("Develop", 0, 100, l, { sampleFactor: 1 / l }),
        ...font.textToPoints("your ideas", 0, 200, l, { sampleFactor: 1 / l }),
      ]
      dots.forEach(point => {
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
        quadtree.insert(new Point(dot.pos.x, dot.pos.y, { flee: dot.flee }))
      })

      const results = quadtree.query(new Circle(p.mouseX, p.mouseY, 50))
      results.forEach(dot => dot.data.flee())
      quadtree.clear()
      let fps = p.frameRate()
      p.fill(255)
      p.stroke(51)
      p.text("FPS: " + fps.toFixed(0), 10, h - 10)
      p.text("Dots: " + dots.length, 10, h - 30)
    }
  }
  useEffect(() => {
    const p5Instance = new p5(sketch, myRef.current)
    return () => p5Instance.remove()
  }, [])
  return <div className="sketch-container" ref={myRef}></div>
}

export default Sketch
