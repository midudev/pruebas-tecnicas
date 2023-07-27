import { NextResponse } from "next/server";
import path from 'path'
import fsPromises from 'fs/promises'

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'src/app/data/books.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    
    return NextResponse.json(objectData)
}
