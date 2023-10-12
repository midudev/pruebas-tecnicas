import { NextRequest, NextResponse } from 'next/server'

export async function GET () {
  const parameters = NextRequest.arguments;
  console.log(parameters);

  return NextResponse.json({
    message: 'Hello World'
  })
}