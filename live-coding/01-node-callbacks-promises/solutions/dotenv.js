import { readFileSync } from 'node:fs'

function parseEnv (env) {
  const lines = env.split('\n')

  lines.forEach(line => {
    const [key, ...value] = line.split('=')
    const valueString = value.join('=')
    const hasQuotes = valueString.startsWith('"') && valueString.endsWith('"')
    const valueToStore = hasQuotes ? valueString.slice(1, -1) : valueString
    process.env[key] = valueToStore
  })
}

export function config ({ path = '.env' } = {}) {
  try {
    const env = readFileSync(path, 'utf8')
    parseEnv(env)
  } catch (error) {
    console.error(error)
  }
}

const dotenv = {
  config
}

export default dotenv
