import React, { useRef, useEffect } from "react"
// import { QuadTree, Box, Point, Circle } from "js-quadtree"
import { v4 } from "uuid"

let Vector
const Dot = class Dot {
  constructor(p, x, y, w, h) {
    this.p = p
    this.pos = this.p.createVector(this.p.random(0, w), this.p.random(0, h / 2))
    this.id = v4()
    this.target = this.p.createVector(x, y)
    this.vel = Vector.random2D()
    this.acc = this.p.createVector()
    this.r = 249
    this.g = 220
    this.b = 92
    this.w = w
    const a = this.p.map(w, 0, 4000, 1, 10)
    this.radius = 2 * a
    this.maxspeed = p.map(w, 0, 4000, 5, 8)
    this.maxforce = 1
    this.show = this.show.bind(this)
    this.applyForce = this.applyForce.bind(this)
    this.update = this.update.bind(this)
    this.arrive = this.arrive.bind(this)
    this.flee = this.flee.bind(this)
  }
  show() {
    this.p.stroke(this.r, this.g, this.b)
    this.p.strokeWeight(this.radius)
    this.p.point(this.pos.x, this.pos.y)
  }
  applyForce(f) {
    this.acc.add(f)
  }
  flee() {
    let xDiff = this.p.mouseX - this.pos.x
    let yDiff = this.p.mouseY - this.pos.y
    let fleeVector = this.p.createVector(-xDiff, -yDiff)
    if (fleeVector.mag() > 100) {
      return
    }
    fleeVector.setMag(2)
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
    const speed = this.p.map(d, 0, 100, 0, this.maxspeed)
    desired.setMag(speed)
    const steer = Vector.sub(desired, this.vel)
    steer.limit(this.maxforce)
    this.applyForce(steer)
  }
}

const Sketch = () => {
  const myRef = useRef(null)
  const sketch = p => {
    if (!myRef.current) return
    let w = myRef.current.offsetWidth
    let h = myRef.current.offsetHeight
    let font
    let dots = []
    let bounds1, bounds2
    // const quadtree = new QuadTree(new Box(0, 0, w, h))
    p.preload = () => {
      font = p.loadFont("/Avenir.otf")
    }
    p.setup = () => {
      const l = w / 6
      bounds1 = font.textBounds("Develop", 0, 0, l)
      bounds2 = font.textBounds("your ideas", 0, -bounds1.y + bounds1.h, l)

      p.createCanvas(w, bounds1.h * 2 + 100)

      const points1 = font
        .textToPoints("Develop", 0, 0, l, {
          sampleFactor: 30 / l,
        })
        .map(point => new Dot(p, point.x + w / 10, point.y + bounds1.h, w, h))
      const points2 = font
        .textToPoints("your ideas", 0, -bounds1.y + 30, l, {
          sampleFactor: 30 / l,
        })
        .map(point => new Dot(p, point.x + w / 10, point.y + bounds2.h, w, h))
      dots = [...points1, ...points2]
    }

    p.draw = () => {
      p.background(51)
      p.fill("red")

      p.fill(255)
      dots.forEach(dot => {
        dot.arrive()
        dot.update()
        dot.show(249, 220, 92)
        dot.flee()

        // quadtree.insert(new Point(dot.pos.x, dot.pos.y, { flee: dot.flee }))
      })

      // const results = quadtree.query(new Circle(p.mouseX, p.mouseY, 1000))
      // results.forEach(dot => dot.data.flee())
      // quadtree.clear()
      let fps = p.frameRate()
      p.fill(255)
      p.stroke(51)
      p.text("FPS: " + fps.toFixed(0), 10, h - 10)
      p.text("Dots: " + dots.length, 10, h - 30)
    }
  }
  useEffect(() => {
    if (window !== undefined) {
      const p5 = require("p5")
      Vector = p5.Vector
      let p5Instance = new p5(sketch, myRef.current)

      const resize = () => {
        p5Instance && p5Instance.remove()
        p5Instance = null
        p5Instance = new p5(sketch, myRef.current)
      }
      window.addEventListener("resize", resize)

      return () => {
        if (window !== undefined) {
          window.removeEventListener("resize", resize)
          p5Instance && p5Instance.remove()
          p5Instance = null
        }
      }
    }
  }, [])
  return <div className="sketch-container" ref={myRef}></div>
}

export default Sketch
