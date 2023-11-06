# escape-codes

A Node.js package providing an extensive collection of ANSI escape codes for enhanced command-line interface (CLI) styling and interaction. It allows for sophisticated text formatting, color manipulation, cursor control, and provides utilities for reading and writing in terminal applications.

## Features

- **ANSI Escape Codes**: Constants for text formatting, cursor movement, color setting, and more.
- **Control Keys**: Key codes for common control characters and actions.
- **Text Formatting**: Methods for styling CLI output with bold, italic, underline, blinking text, etc.
- **Cursor Control**: Functions to manipulate the cursor position in the terminal.
- **Color Codes**: Easy-to-use foreground and background color settings.
- **ASCII Control Characters**: Mapped ASCII control characters for various control actions.
- **CLI Interaction**: Utilities for synchronous and asynchronous terminal I/O operations.

## Installation

To install Escape Codes, run the following command in your project directory:

```sh
npm install escape-codes
```

## Usage

After installation, import the module into your project to access its functionalities:

```javascript
import { ansi, ascii, cli } from 'escape-codes';
```

Then use the codes to control and format the terminal.

```javascript
cli.write([ansi.foreground.blue, "Hello, Blue!", ansi.format.reset])
cli.write(`${ansi.format.bold}I am bold!${ansi.format.reset}`)
cli.write(ansi.cursor.left(1))
```

Or read input from the terminal.

```javascript
cli.read((stroke, stop) => {
  switch (stroke) {
    case ansi.key.exit:
      process.exit()
    case ansi.key.enter:
      stop() // stop reading key strokes
      break
    default:
      if (/^[a-zA-Z0-9 .,!?;:'"()-]*$/.test(stroke)) {
        console.log(`You pressed: ${stroke}`)
      }
  }
})
```

## API

Below is the detailed API documentation for the Escape Codes package:

### ANSI Codes

ANSI escape codes for various CLI styling and control:

| Property      | Description                        |
|---------------|------------------------------------|
| `ansi.key`    | Key codes for control actions.     |
| `ansi.format` | Formatting codes for text styling. |
| `ansi.cursor` | Cursor control codes.              |
| `ansi.foreground` | Foreground color codes.       |
| `ansi.background` | Background color codes.       |

#### Control Keys

Usage: `ansi.key.tab`

| Key        | Code            | Description                    |
|------------|-----------------|--------------------------------|
| `tab`      | `"\x09"`        | Horizontal Tab                 |
| `enter`    | `"\x0D"`        | Carriage Return (Enter)        |
| `escape`   | `"\x1B"`        | Escape character               |
| `backspace`| `"\x7F"`        | Backspace character            |
| `delete`   | `"\u001b[3~"`   | Delete character               |
| `exit`     | `"\x03"`        | Exit character (Ctrl+C)        |
| `up`       | `"\x1B[A"`      | Arrow Up                       |
| `down`     | `"\x1B[B"`      | Arrow Down                     |
| `right`    | `"\x1B[C"`      | Arrow Right                    |
| `left`     | `"\x1B[D"`      | Arrow Left                     |

#### Formatting Codes

Usage: `ansi.format.reset`

| Style         | Code          | Description                         |
|---------------|---------------|-------------------------------------|
| `reset`       | `"\x1b[0m"`   | Reset all styles to default         |
| `bold`        | `"\x1b[1m"`   | Bold text                           |
| `faint`       | `"\x1b[2m"`   | Fainter text                        |
| `italic`      | `"\x1b[3m"`   | Italic text                         |
| `underline`   | `"\x1b[4m"`   | Underlined text                     |
| `blink`       | `"\x1b[5m"`   | Slow Blink                          |
| `rapid`       | `"\x1b[6m"`   | Rapid Blink (not widely supported)  |
| `reverse`     | `"\x1b[7m"`   | Swap foreground and background colors |
| `conceal`     | `"\x1b[8m"`   | Conceal text (not widely supported) |
| `strike`      | `"\x1b[9m"`   | Strikethrough text                  |

#### Cursor Control Codes

Usage: `ansi.cursor.up(3)` or `ansi.cursor.save`

| Action        | Code                          | Description                            |
|---------------|-------------------------------|----------------------------------------|
| `up`      | `(n = 1) => "\x1b[${n}A"`    | Move cursor up by 'n' rows             |
| `down`    | `(n = 1) => "\x1b[${n}B"`    | Move cursor down by 'n' rows           |
| `right`   | `(n = 1) => "\x1b[${n}C"`    | Move cursor right by 'n' columns       |
| `left`    | `(n = 1) => "\x1b[${n}D"`    | Move cursor left by 'n' columns        |
| `move`        | `(n, m) => "\x1b[${n};${m}H"`| Move cursor to row 'n', column 'm'     |
| `save`        | `"\x1b[s"`                   | Save the current cursor position       |
| `restore`     | `"\x1b[u"`                   | Restore the saved cursor position      |
| `show`        | `"\x1b[?25h"`                | Show the cursor                        |
| `hide`        | `"\x1b[?25l"`                | Hide the cursor                        |

#### Foreground Color Codes

Usage: `ansi.foreground.blue`

| Property        | Code        | Description              |
|-----------------|-------------|--------------------------|
| `default`       | `"\x1b[39m"`| Default foreground color |
| `black`         | `"\x1b[30m"`| Black text color         |
| `red`           | `"\x1b[31m"`| Red text color           |
| `green`         | `"\x1b[32m"`| Green text color         |
| `yellow`        | `"\x1b[33m"`| Yellow text color        |
| `blue`          | `"\x1b[34m"`| Blue text color          |
| `magenta`       | `"\x1b[35m"`| Magenta text color       |
| `cyan`          | `"\x1b[36m"`| Cyan text color          |
| `white`         | `"\x1b[37m"`| White text color         |
| `brightBlack`   | `"\x1b[90m"`| Bright black text color  |
| `brightRed`     | `"\x1b[91m"`| Bright red text color    |
| `brightGreen`   | `"\x1b[92m"`| Bright green text color  |
| `brightYellow`  | `"\x1b[93m"`| Bright yellow text color |
| `brightBlue`    | `"\x1b[94m"`| Bright blue text color   |
| `brightMagenta` | `"\x1b[95m"`| Bright magenta text color|
| `brightCyan`    | `"\x1b[96m"`| Bright cyan text color   |
| `brightWhite`   | `"\x1b[97m"`| Bright white text color  |

#### Background Color Codes

Usage: `ansi.background.red`

| Property        | Code         | Description                |
|-----------------|--------------|----------------------------|
| `default`       | `"\x1b[49m"` | Default background color   |
| `black`         | `"\x1b[40m"` | Black background color     |
| `red`           | `"\x1b[41m"` | Red background color       |
| `green`         | `"\x1b[42m"` | Green background color     |
| `yellow`        | `"\x1b[43m"` | Yellow background color    |
| `blue`          | `"\x1b[44m"` | Blue background color      |
| `magenta`       | `"\x1b[45m"` | Magenta background color   |
| `cyan`          | `"\x1b[46m"` | Cyan background color      |
| `white`         | `"\x1b[47m"` | White background color     |
| `brightBlack`   | `"\x1b[100m"`| Bright black background color  |
| `brightRed`     | `"\x1b[101m"`| Bright red background color    |
| `brightGreen`   | `"\x1b[102m"`| Bright green background color  |
| `brightYellow`  | `"\x1b[103m"`| Bright yellow background color |
| `brightBlue`    | `"\x1b[104m"`| Bright blue background color   |
| `brightMagenta` | `"\x1b[105m"`| Bright magenta background color|
| `brightCyan`    | `"\x1b[106m"`| Bright cyan background color   |
| `brightWhite`   | `"\x1b[107m"`| Bright white background color  |

### ASCII Control Characters

Usage: `ascii.ctrlA` (*note* the `ascii` instead of `ansi`)

| Property  | Code   | ASCII Character      | Description                                          |
|-----------|--------|----------------------|------------------------------------------------------|
| `ctrlA`   | `"\x01"` | Start of Header (SOH) | Marks the start of a header.                         |
| `ctrlB`   | `"\x02"` | Start of Text (STX)   | Marks the start of the text intended for processing. |
| `ctrlC`   | `"\x03"` | End of Text (ETX)     | Marks the break or end of the text.                  |
| `ctrlD`   | `"\x04"` | End of Transmission (EOT) | Indicates the end of transmission of data.       |
| `ctrlE`   | `"\x05"` | Enquiry (ENQ)         | Requests an answer from a remote station.            |
| `ctrlF`   | `"\x06"` | Acknowledge (ACK)     | Acknowledges receipt of a message.                   |
| `ctrlG`   | `"\x07"` | Bell (BEL)            | Triggers an alert or bell signal.                    |
| `ctrlH`   | `"\x08"` | Backspace (BS)        | Moves the cursor one position backwards.             |
| `ctrlI`   | `"\x09"` | Horizontal Tab (HT)   | Moves the cursor to the next horizontal tab stop.    |
| `ctrlJ`   | `"\x0A"` | Line Feed (LF)        | Moves the cursor to the next line.                   |
| `ctrlK`   | `"\x0B"` | Vertical Tab (VT)     | Moves the cursor to the next vertical tab stop.      |
| `ctrlL`   | `"\x0C"` | Form Feed (FF)        | Moves to the next form or page.                      |
| `ctrlM`   | `"\x0D"` | Carriage Return (CR)  | Moves the cursor to the beginning of the line.       |
| `ctrlN`   | `"\x0E"` | Shift Out / X-On (SO) | Activates the transmission of control characters.    |
| `ctrlO`   | `"\x0F"` | Shift In / X-Off (SI) | Deactivates the transmission of control characters.  |
| `ctrlP`   | `"\x10"` | Data Link Escape (DLE)| Signals a change in the meaning of the following characters. |
| `ctrlQ`   | `"\x11"` | Device Control 1 (DC1) | Often used as XON for software flow control.       |
| `ctrlR`   | `"\x12"` | Device Control 2 (DC2) | Device-specific control function.                  |
| `ctrlS`   | `"\x13"` | Device Control 3 (DC3) | Often used as XOFF for software flow control.      |
| `ctrlT`   | `"\x14"` | Device Control 4 (DC4) | Device-specific control function.                  |
| `ctrlU`   | `"\x15"` | Negative Acknowledge (NAK)| Indicates that data was received incorrectly.   |
| `ctrlV`   | `"\x16"` | Synchronous Idle (SYN)  | Used to maintain timing for synchronous transmission. |
| `ctrlW`   | `"\x17"` | End of Transmission Block (ETB) | Marks the end of a block of data for transmission. |
| `ctrlX`   | `"\x18"` | Cancel (CAN)          | Indicates that the data preceding it is in error.    |
| `ctrlY`   | `"\x19"` | End of Medium (EM)    | Indicates the logical end of the medium.             |
| `ctrlZ`   | `"\x1A"` | Substitute (SUB)      | A placeholder character used to replace a character considered to be erroneous or corrupt. |

### CLI Interaction

Utility functions for terminal I/O operations:

#### cli.write

Writes data to the standard output.

```javascript
cli.write(data: string | string[]);
```

#### cli.read

Reads input from the standard input, character by character.

```javascript
cli.read(cb: (data: string, stop: () => void) => void);
```

#### cli.input

Asynchronously captures a single line of input from the standard input.

```javascript
async cli.input(): Promise<string>;
```

## Contributions

We welcome contributions from the community. If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Support

For questions, issues, or feature requests, please submit an issue on the [GitHub repository](https://github.com/jackrobertscott/escape-codes).
