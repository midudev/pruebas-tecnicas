import { type HandleServerError } from '@sveltejs/kit'

export function handleError<HandleServerError>({ error, event }) {
    const { code: codeError } = error as { code: string }
  return {
    message: 'Whoops!',
    code: codeError ?? 'UNKNOWN'
  }
}
