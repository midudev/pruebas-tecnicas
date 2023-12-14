import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { config } from '../solutions/dotenv.js'

describe('1. dotenv', () => {
  beforeEach(() => {
    // Limpiar todo el process.env
    for (const key of Object.keys(process.env)) {
      delete process.env[key]
    }
  })

  afterEach(() => {
    try {
      unlinkSync('.env')
    } catch {}

    try {
      unlinkSync('.env.local')
    } catch {}
  })

  it('1.1. load .env file', () => {
    // Crear un archivo .env en el directorio raíz
    writeFileSync('.env', 'PORT=3000\nTOKEN="123abc"')
    config()

    equal(process.env.PORT, '3000')
    equal(process.env.TOKEN, '123abc')
  })

  it('1.2. load .env file from custom path', () => {
    // Crear un archivo .env.local en el directorio raíz
    writeFileSync('.env.local', 'PORT=3000\nTOKEN="123abc"')
    config({ path: '.env.local' })

    equal(process.env.PORT, '3000')
    equal(process.env.TOKEN, '123abc')
  })

  it('1.3 it works even without .env file', () => {
    config()
    equal(process.env.TOKEN, undefined)
  })

  it('1.4 dont use dotenv dependency', () => {
    // Chequear que la dependencia dotenv no esté instalada
    try {
      const require = createRequire(import.meta.url)
      require('dotenv')
    } catch (error) {
      equal(error.code, 'MODULE_NOT_FOUND')
    }
  })
})
