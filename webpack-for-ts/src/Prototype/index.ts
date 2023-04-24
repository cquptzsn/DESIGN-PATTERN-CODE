class CloneDemo {
  name = 'clone demo'
  clone(): CloneDemo {
    return new CloneDemo()
  }
}