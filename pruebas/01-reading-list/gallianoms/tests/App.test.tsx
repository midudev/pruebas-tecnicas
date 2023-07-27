import fs from 'fs'
import path from 'path'
import { expect, it, describe } from 'vitest'

describe('App', () => {
  it('should check if books.json exists', () => {
    const filePath = path.join(__dirname, '../../books.json')

    expect(fs.existsSync(filePath)).toBe(true)
  })
})
