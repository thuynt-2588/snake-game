class Food {
  constructor() {
    this.newFood()
  }

  newFood() {
    this.x = ~~random(width)
    this.y = ~~random(height)

    this.x = ~~(this.x / GRID_SIZE) * GRID_SIZE
    this.y = ~~(this.y / GRID_SIZE) * GRID_SIZE
  }

  show() {
    fill(0, 128, 0)
    rect(this.x, this.y, GRID_SIZE, GRID_SIZE)
  }
}
