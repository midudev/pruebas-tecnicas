import net from 'node:net'
import fs from 'node:fs';
import fsp from 'node:fs/promises'

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
//   else console.log(info)
// })

export function obtenerDatosPromise(callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' });
    }, 2000);
  })
}

export function procesarArchivo(callback) {
  fs.readFile('input.txt', 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message);
      callback(error)
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile('output.txt', textoProcesado, error => {
      if (error) {
        console.error('Error guardando archivo:', error.message);
        callback(error)
      }

      console.log('Archivo procesado y guardado con éxito');
      callback(null)
    });
  });
}

// export async function procesarArchivo() {
//   try {
//     const contenido = await fsp.readFile('input.txt', 'utf8')
//     const textoProcesado = contenido.toUpperCase();
//     await fsp.writeFile('output.txt', textoProcesado)
//     console.log('Archivo procesado y guardado con éxito');
//   } catch(error) {
//     console.error('Error procesando el archivo:', error.message);
//     throw error
//   }
// }

export async function leerArchivos() {
  // const [archivo1, archivo2, archivo3] = await Promise.allSettled([
  //   fsp.readFile('archivo1.txt', 'utf8'),
  //   fsp.readFile('archivo2.txt', 'utf8'),
  //   fsp.readFile('archivo3.txt', 'utf8')
  // ])

  // const message = [archivo1.value, archivo2.value, archivo3.value]
  //   .filter(value => typeof value !== 'undefined')
  //   .join(' ')

  // return message

  const [archivo1, archivo2, archivo3] = await Promise.all([
    fsp.readFile('archivo1.txt', 'utf8'),
    fsp.readFile('archivo2.txt', 'utf8'),
    fsp.readFile('archivo3.txt', 'utf8')
  ])

  return `${archivo1} ${archivo2} ${archivo3}`
}

leerArchivos();

export async function delay (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

delay(3000).then(() => console.log('Hola mundo'));
// o..
await delay(3000)
console.log('Hola mundo')
