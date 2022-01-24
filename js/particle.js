function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y)
    this.firework = firework
    this.lifespan = 255
    this.hu = hu
    this.bless=null
    if (this.firework) {
        if(window.innerHeight<640){
            this.vel = createVector(0, random(-16, -13))
        }else{
            this.vel = createVector(0, random(-17, -15))
        }
    } else {
        this.vel = p5.Vector.random2D()
        //烟花爆炸大小
        this.vel.mult(random(2, 30))
        //烟花爆炸后概率生成文字
        if(random(1)<0.01){
            this.bless = new Blessing(this.pos,this.hu);        
        }
    }
    this.acc = createVector(0, 0)
    this.applyForce = function (force) {
        this.acc.add(force)
    }
    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.9)
            this.lifespan -= 4
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }
    this.done = function () {
        if (this.lifespan < 0) {
            return true
        } else {
            return false
        }
    }


    this.show = function () {
        colorMode(HSB)
        if (!this.firework) {
            strokeWeight(2)
            stroke(hu, 255, 255, this.lifespan)
            //展示生成的文字
            if(this.bless){
                this.bless.show()
            }
        } else {
            strokeWeight(4)
            stroke(hu, 255, 255)
        }
        point(this.pos.x, this.pos.y)
    }
}
