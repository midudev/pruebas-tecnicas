import net from 'node:net'
import fs from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'

export const ping = (ip, callbk) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    callbk(null, { time: process.hrtime(startTime), ip })
  })

  client.on('error', (err) => {
    client.end()
    callbk(err)
  })
}

/*
PRUEBA

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  console.log(info)
})
*/

export function obtenerDatosPromise () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' })
    }, 2000)
  })
}

/*
PRUEBA

obtenerDatosPromise({ time: 1 })
  .then(({ data }) => {
    console.log(data)
  })
*/

export function procesarArchivo (callbk) {
  const handleWrite = error => {
    if (error) {
      console.error('Error guardando archivo:', error.message)
      callbk(error)
    }

    console.log('Archivo procesado y guardado con éxito')
    callbk(null)
  }

  const handleRead = (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message)
      callbk(error)
    }

    const textoProcesado = contenido.toUpperCase()

    fs.writeFile('output.txt', textoProcesado, handleWrite)
  }

  fs.readFile('input.txt', 'utf8', handleRead)
}

export async function procesarArchivoPromise () {
  const contenido = await readFile('input2.txt', 'utf8')
  const textoProcesado = contenido.toUpperCase()
  await writeFile('output2.txt', textoProcesado)
}
