import { describe, it, expect } from "vitest";
import { sendMessage } from "../src/helpers/sendMessage";

describe('sendMessage', () => {
  it('should to be a function', () => {
    expect(typeof sendMessage).toBe('function')
  })

  it('should throw if the first parameter provided is not an object', () => {
    expect(() => sendMessage()).toThrow()
  })

  it('should throw if the second parameter provided is not an string', () => {
    expect(() => sendMessage([], 'AVAILABLE_BOOKS_UPDATE')).toThrow()
  })

  it('should not throw if the third parameter provided is null', () => {
    const channel = new BroadcastChannel('book-channel');

    expect(() => sendMessage([], 'AVAILABLE_BOOKS_UPDATE', channel)).toThrow();
  });
});
