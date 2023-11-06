/**
 * A collection of ANSI escape codes for command line styling and control.
 */
export const ansi = {
  /** Control key codes. */
  key: {
    /** Horizontal Tab */
    tab: "\x09",
    /** Carriage Return (Enter) */
    enter: "\x0D",
    /** Escape character */
    escape: "\x1B",
    /** Backspace character */
    backspace: "\x7F",
    /** Delete character */
    delete: "\u001b[3~",
    /** Exit character (Ctrl+C) */
    exit: "\x03",
    /** Arrow Up */
    up: "\x1B[A",
    /** Arrow Down */
    down: "\x1B[B",
    /** Arrow Right */
    right: "\x1B[C",
    /** Arrow Left */
    left: "\x1B[D",
  },

  /** Formatting codes. */
  format: {
    /** Reset all styles to default */
    reset: `\x1b[0m`,
    /** Bold text */
    bold: `\x1b[1m`,
    /** Fainter text */
    faint: `\x1b[2m`,
    /** Italic text */
    italic: `\x1b[3m`,
    /** Underlined text */
    underline: `\x1b[4m`,
    /** Slow Blink */
    blink: `\x1b[5m`,
    /** Rapid Blink (not widely supported) */
    rapid: `\x1b[6m`,
    /** Swap foreground and background colors */
    reverse: `\x1b[7m`,
    /** Conceal text (not widely supported) */
    conceal: `\x1b[8m`,
    /** Strikethrough text */
    strike: `\x1b[9m`,
  },

  /** Cursor control codes. */
  cursor: {
    /** Move cursor up by 'n' rows */
    up: (n: number = 1) => `\x1b[${n}A`,
    /** Move cursor down by 'n' rows */
    down: (n: number = 1) => `\x1b[${n}B`,
    /** Move cursor right by 'n' columns */
    right: (n: number = 1) => `\x1b[${n}C`,
    /** Move cursor left by 'n' columns */
    left: (n: number = 1) => `\x1b[${n}D`,
    /** Move cursor to row 'n', column 'm' */
    move: (n: number, m: number) => `\x1b[${n};${m}H`,
    /** Save the current cursor position */
    save: `\x1b[s`,
    /** Restore the saved cursor position */
    restore: `\x1b[u`,
    /** Show the cursor */
    show: `\x1b[?25h`,
    /** Hide the cursor */
    hide: `\x1b[?25l`,
  },

  /** Foreground (text) color codes. */
  foreground: {
    default: "\x1b[39m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    brightBlack: "\x1b[90m",
    brightRed: "\x1b[91m",
    brightGreen: "\x1b[92m",
    brightYellow: "\x1b[93m",
    brightBlue: "\x1b[94m",
    brightMagenta: "\x1b[95m",
    brightCyan: "\x1b[96m",
    brightWhite: "\x1b[97m",
  },

  /** Background color codes. */
  background: {
    default: "\x1b[49m",
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    brightBlack: "\x1b[100m",
    brightRed: "\x1b[101m",
    brightGreen: "\x1b[102m",
    brightYellow: "\x1b[103m",
    brightBlue: "\x1b[104m",
    brightMagenta: "\x1b[105m",
    brightCyan: "\x1b[106m",
    brightWhite: "\x1b[107m",
  },
}
