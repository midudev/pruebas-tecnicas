import {Elysia} from 'elysia'
export const handleError= new Elysia()

handleError.onError(({ code, error, set }) => {
  console.log({error, code})
  if (code === 'NOT_FOUND') {
      set.status = 404
      return {error:'Not Found Result :('}
  }
  return 'Something went wrong :('
})