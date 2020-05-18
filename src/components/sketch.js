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
    this.r = p.map(w, 0, 4000, 1, 10)
    this.maxspeed = p.map(w, 0, 4000, 10, 20)
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
    console.log("Flee!")
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
    let font
    let dots = []
    let bounds1, bounds2
    const quadtree = new QuadTree(new Box(0, 0, w, h))
    p.preload = () => {
      font = p.loadFont("/Avenir.otf")
    }
    p.setup = () => {
      const l = w / 8
      bounds1 = font.textBounds("Develop", 0, 0, l)
      bounds2 = font.textBounds("your ideas", 0, -bounds1.y + bounds1.h, l)

      p.createCanvas(bounds2.w, bounds1.h * 2 + 100)

      console.log(bounds1)
      console.log(bounds1)
      const points1 = font
        .textToPoints("Develop", 0, 0, l, {
          sampleFactor: 30 / l,
        })
        .map(point => new Dot(p, point.x, point.y + bounds1.h, w))
      const points2 = font
        .textToPoints("your ideas", 0, -bounds1.y + 30, l, {
          sampleFactor: 30 / l,
        })
        .map(point => new Dot(p, point.x, point.y + bounds2.h, w))
      dots = [...points1, ...points2]
    }

    p.draw = () => {
      p.background(51)
      p.fill("red")
      p.circle(dots[0].pos.x, dots[0].pos.y, 30)
      p.circle(dots[dots.length - 1].pos.x, dots[dots.length - 1].pos.y, 30)

      p.fill(255)
      dots.forEach((dot, index) => {
        dot.arrive()
        dot.update()
        dot.show(249, 220, 92)
        if (
          (p.mouseX - dot.pos.x) * (p.mouseX - dot.pos.x) +
            (p.mouseY - dot.pos.y) * (p.mouseY - dot.pos.y) <
          50 * 50
        ) {
          dot.flee()
        }
        // quadtree.insert(new Point(dot.pos.x, dot.pos.y, { flee: dot.flee }))
      })

      // const results = quadtree.query(new Circle(p.mouseX, p.mouseY, 1000))
      // console.log(results)
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
    const p5Instance = new p5(sketch, myRef.current)
    return () => p5Instance.remove()
  }, [])
  return <div className="sketch-container" ref={myRef}></div>
}

export default Sketch
