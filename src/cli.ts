import { ansi } from "./ansi"

export const cli = {
  write(data: string | string[]) {
    process.stdout.write(Array.isArray(data) ? data.join("") : data)
  },

  read(cb: (data: string, stop: () => void) => void) {
    process.stdin.setRawMode(true) // trigger on every key stroke
    process.stdin.setEncoding("utf8") // return data as a string
    if (process.stdin.isPaused()) process.stdin.resume() // open input
    const stop = () => {
      process.stdin.pause() // close input
      if (process.stdin.isRaw) process.stdin.setRawMode(false)
    }
    process.stdin.on("data", (data: string | Buffer) => {
      const value = data.toString()
      cb(value, stop)
    })
  },

  async input() {
    return new Promise<string>((resolve) => {
      let value = ""
      this.read((stroke, stop) => {
        if (value.length) {
          this.write(ansi.cursor.moveLeft(value.length))
          this.write(" ".repeat(value.length))
          this.write(ansi.cursor.moveLeft(value.length))
        }
        switch (stroke) {
          case ansi.key.exit:
            process.exit()
          case ansi.key.enter:
            resolve(value)
            stop()
            break
          case ansi.key.backspace:
            if (value.length) value = value.slice(0, -1)
            break
          default:
            if (/^[a-zA-Z0-9 .,!?;:'"()-]*$/.test(stroke)) value += stroke
        }
        this.write(value)
      })
    })
  },
}
