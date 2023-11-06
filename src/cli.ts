import { ansi } from "./ansi"

/**
 * CLI utilities for writing to and reading from the terminal.
 */
export const cli = {
  /**
   * Writes data to the standard output.
   * @param data - A string or array of strings to write to stdout.
   */
  write(data: string | string[]) {
    process.stdout.write(Array.isArray(data) ? data.join("") : data)
  },

  /**
   * Reads input from the standard input, character by character.
   * @param cb - A callback that is invoked with the input data and a stop function.
   */
  read(cb: (data: string, stop: () => void) => void) {
    process.stdin.setRawMode(true)
    process.stdin.setEncoding("utf8")
    if (process.stdin.isPaused()) process.stdin.resume()

    const dataListener = (data: string | Buffer) => {
      const value = data.toString()
      cb(value, stop)
    }

    const errorListener = (error: Error) => {
      throw error
    }

    const stop = () => {
      process.stdin.pause()
      if (process.stdin.isRaw) process.stdin.setRawMode(false)
      process.off("data", dataListener)
      process.off("error", errorListener)
    }

    process.stdin.on("data", dataListener)
    process.stdin.on("error", errorListener)
  },

  /**
   * Asynchronously captures a single line of input from the standard input.
   * @returns A promise that resolves to the input string.
   */
  async input() {
    return new Promise<string>((resolve) => {
      let value = ""
      this.read((stroke, stop) => {
        if (value.length) {
          this.write(ansi.cursor.left(value.length))
          this.write(" ".repeat(value.length))
          this.write(ansi.cursor.left(value.length))
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
