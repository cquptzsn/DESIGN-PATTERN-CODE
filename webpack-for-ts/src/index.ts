console.log('index...')

interface IPerson {
	name: string
  age: number
  fn: (a: number, b: number) => void
}

const zhangsan: IPerson = {
  name: '张三',
  age: 19,
  fn(a: number, b: number) {}
}

class Person implements IPerson {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  fn(a: number, b: number) {}
}


// ----------------------------------------------------

class People {
  name: string
  age: number
  protected friend = 'xxx'
  private money = 1000
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`my nameis ${this.name}, age is ${this.age}`)
  }
}

class Student extends People {
  school: string
  constructor(name: string, age: number, school: string) {
    super(name, age) // 调用父类的构造函数
    this.school = school
  }
  study() {
    alert(`${this.name} study in ${this.school}`)
  }
  // 重写
  eat() {
    alert(`${this.name} eat nothing - _ -`)
  }
}

class Teacher extends People {
  major: string
  constructor(name: string, age: number, major: string) {
    super(name, age)
    this.major = major
  }
  teach() {
    alert(`${this.name} teach ${this.major}`)
  }
}

const xiaoming = new Student('小明', 18, '第一中学')
xiaoming.study()
xiaoming.speak()
const zhoushengnan = new Teacher('周圣楠', 25, '语文')
zhoushengnan.teach()

// ------------------------------------------------------

interface IStyleInfo {
  [key: string]: string
}

class JQuery {
  css(key: string, value: string): void
  css(styleInfo: IStyleInfo): void 
  css(key: IStyleInfo | string, value?: string)
  {
    if (typeof key === 'string') {

    } else {

    }
  }
}

const j = new JQuery()
j.css('font-size', '16px')
j.css({
  'font-size': '16px', 
  'color': 'red'
})