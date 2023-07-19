import React from 'react'

export {}

declare global {

    interface IWithTitle {
        title: string
    }

    interface IWithClassName {
        className?: string
   }

   interface IWithChildren {
       children: React.ReactNode
    }

    interface IWithTiltleAndClassName extends IWithClassName, IWithTitle {}

    interface IAuthor {
        name: string,
        otherBooks: string[]
    }

    interface IBook extends IWithTitle{
        pages: number,
        genre: string,
        cover: string,
        synopsis: string,
        year: number,
        ISBN: string,
        author: IAuthor,
    }
}
