import 'regenerator-runtime/runtime.js'

// Login to my app
const login = async (username, password) => {
  if (username !== 'admin' || password !== 'myPassword') {
    console.log('invalid login')
  }

  // const size = null
  // const size1 = size ?? 42
  // console.log(size1)

  // const regExp = /page (\d+)/g
  // const text = 'text page 1 text text page 2'
  // const matches = [...text.matchAll(regExp)]

  // for (const match of matches) {
  //   console.log(match)
  // };

  const message = asyncFunction(username)

  // const test = '  my name is      '
  // console.log('"' + test.trimLeft().trimRight() + '"')

  // const bigInt = BigInt(1111111111111111111111)
  // console.log(bigInt)

  console.log(await message)
}

const asyncFunction = async (text) => {
  return `hello ${text}`
}

export { login }
