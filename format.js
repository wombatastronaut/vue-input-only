/**
 * Format data
 *
 * @param {String} data
 * @param {String} pattern
 * @returns {String} Formatted text
 */
export default function(data, pattern) {
  if (!pattern) return data;

  const patternStartRegExp = /^([^AFNPZ#]+)/

  // Patterns to check
  const letter = 'A'
  const number = '#'
  const numberAboveZero = '#AZ'
  const numberOrLetter = 'N'
  const positiveFloat = 'PF'

  // Regex for patterns to check the data
  const letterRegex = /[a-z]/i
  const numberRegex = /\d/i
  const numberAboveZeroRegex = /[1-9]/i
  const numberOrLetterRegex = /[a-z0-9]/i
  const positiveFloatRegex = /[\d.]/i

  if (data.length == 1 && patternStartRegExp.test(pattern)) {
    data = patternStartRegExp.exec(pattern)[0] + data
  }

  let result = ''

  for (let i = 0; i < data.length; i++) {
    let character = data[i]

    switch (pattern.toUpperCase()) {
      case letter:
        if (letterRegex.test(character)) {
          result += character
        }

        break
      case number:
        if (numberRegex.test(character)) {
          result += character
        }

        break
      case numberAboveZero:
        if (i === 0) {
          if (numberAboveZeroRegex.test(character)) {
            result += character;
          }
        } else {
          if (numberRegex.test(character)) {
            result += character;
          }
        }

        break
      case numberOrLetter:
        if (numberOrLetterRegex.test(character)) {
          result += character
        }

        break
      case positiveFloat:
        if (positiveFloatRegex.test(character)) {
          result += character
        }

        break
      default:
        result += character

        break
    }
  }

  return result
}
