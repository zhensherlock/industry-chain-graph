import { describe, expect, test } from 'vitest'
import { isUndefined } from '../src'

describe('index.ts', () => {
  test('isUndefined should return true for undefined', async () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  test('isUndefined should return false for other values', async () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(false)).toBe(false)
  })
})
