import net from 'node:net'
import fs from 'node:fs'

export const ping = (ip, callback) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    callback(null, { time: process.hrtime(startTime), ip })
  })
  
  client.on('error', (err) => {
    client.end()
    callback(err)
  })
}

// ping('midu.dev', (err, info) => {
//   if (err) console.error(err)
//   console.log(info)
// })

export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' });
    }, 2000);
  })
}

export function procesarArchivo(callback) {
  const handleReadFile = (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message);
      callback(error)
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile('output.txt', textoProcesado, handleWriteFile);
  }

  const handleWriteFile = error => {
    if (error) {
      console.error('Error guardando archivo:', error.message);
      callback(error)
    }

    console.log('Archivo procesado y guardado con éxito');
    callback(null)
  }

  fs.readFile('input.txt', 'utf8', handleReadFile);
}

export async function procesarArchivoPromise() {
  try {
    const file = await fs.promises.readFile('input.txt', 'utf8')
    const textoProcesado = file.toUpperCase()
    await fs.promises.writeFile('output.txt', textoProcesado)
  } catch (error) {
    console.error('Error procesando archivo:', error.message)
    throw error
  }
}

// export function leerArchivos() {
//   const archivo1 = fs.readSync('archivo1.txt', 'utf8');
//   const archivo2 = fs.readSync('archivo2.txt', 'utf8');
//   const archivo3 = fs.readSync('archivo3.txt', 'utf8');

//   return `${archivo1} ${archivo2} ${archivo3}`
// }

// leerArchivos();

export async function leerArchivos() {
  console.time('leerArchivos')
  const [a, b, c] = await Promise.all([
    fs.promises.readFile('archivo1.txt', 'utf8'),
    fs.promises.readFile('archivo2.txt', 'utf8'),
    fs.promises.readFile('archivo3.txt', 'utf8')
  ])
  console.timeEnd('leerArchivos')

  return `${a} ${b} ${c}`
}


export async function delay (ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}