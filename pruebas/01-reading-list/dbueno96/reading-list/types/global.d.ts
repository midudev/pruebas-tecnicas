import React from 'react'

export {}

declare global {

    interface IWithTitle {
        title: string
    }

    interface IWithClassName {
        className: string
   }

   interface IWithChildren {
       children: React.ReactNode
    }
    interface IWithTiltleAndClassName extends IWithClassName, IWithTitle {}
}
