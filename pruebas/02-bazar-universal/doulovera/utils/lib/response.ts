export const responseJson = (status: number, body: any) => {
  return Response.json(body, { status })
}
