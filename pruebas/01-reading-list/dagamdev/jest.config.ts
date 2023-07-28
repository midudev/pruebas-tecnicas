import nextJest from 'next/jest'
import { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest'
}

export default createJestConfig(config)