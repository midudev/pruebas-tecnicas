import { ping, obtenerDatosPromise, procesarArchivo, procesarArchivoPromise, leerArchivos, delay } from '../solutions/index.js'
import { describe, it, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

describe('1. ping', () => {
  it('1.1. ping midu.dev', (_, done) => {
    ping('midu.dev', (err, info) => {
      ifError(err)
      equal(info.ip, 'midu.dev')
      done()
    })
  })
})

describe('2. obtenerDatosPromise', () => {
  it('2.1. obtenerDatosPromise', async () => {
    const { data } = await obtenerDatosPromise({ time: 1 })
    equal(data, 'datos importantes')
  })
})

describe('3. procesarArchivoPromise', () => {
  afterEach(() => {
    try {
      unlinkSync('output.txt')
      unlinkSync('output2.txt')
      unlinkSync('input.txt')
      unlinkSync('input2.txt')
    } catch {}
  })

  it('3.1. procesarArchivo', (t, done) => {
    writeFileSync('input.txt', 'federico')
    procesarArchivo((err) => {
      ifError(err)
      readFile('output.txt', 'utf8')
        .then((contenido) => {
          equal(contenido, 'FEDERICO')
          done()
        })
    })
  })

  it('3.1. procesarArchivoPromise', async () => {
    writeFileSync('input2.txt', 'hola')
    await procesarArchivoPromise()
    const contenido = await readFile('output2.txt', 'utf8')
    equal(contenido, 'HOLA')
  })
})

describe('4. leerArchivos', () => {
  afterEach(() => {
    try {
      unlinkSync('archivo1.txt')
      unlinkSync('archivo2.txt')
      unlinkSync('archivo3.txt')
    } catch {}
  })
  it('4.1. leerArchivos', async () => {
    writeFileSync('archivo1.txt', 'hola')
    writeFileSync('archivo2.txt', 'qué')
    writeFileSync('archivo3.txt', 'tal')
    const mensaje = await leerArchivos()
    equal(mensaje, 'hola qué tal')
  })
})

describe('5. delay', () => {
  it('5.1. delay', async () => {
    const timeToDelay = 1000
    const start = Date.now()
    await delay(timeToDelay)
    const end = Date.now()
    const diff = end - start
    equal(diff >= timeToDelay, true, 'La función delay debería retrasar la ejecución al menos 1000ms')
  })
})
