import { RlReducer } from '../src/components/contexts/GlobalContext';
import { InterestBook } from "../src/types/interestbook";
import { RlAction } from '../src/types/globalcontext';
import { getBooksArray } from '../src/components/contexts/GlobalContext';
import data from '../src/files/books'
import { Book } from '../src/types/books';


/* test unitarios sobre la funcion reducer de la readList  */

/* datos de prueba */

const ALLBOOKS: Book[] =  getBooksArray(data)

const SOMEINTERESTBOOKS: InterestBook[] = [
    {
        "ISBN": "978-0618640157",
        "read": false
    },
    {
        "ISBN": "978-0553103540",
        "read": true
    },
    {
        "ISBN": "393-0100563812",
        "read": true
    },
    {
        "ISBN": "978-4444532611",
        "read": false
    },
    {
        "ISBN": "978-1451673319",
        "read": true
    },
    {
        "ISBN": "267-4716409672",
        "read": false
    },
    {
        "ISBN": "209-4716403672",
        "read": false
    },
    {
        "ISBN": "978-0345391803",
        "read": true
    },
    {
        "ISBN": "978-0486282114",
        "read": true
    }
]

const OTHERINTERESTBOOKS = [
  {
      "ISBN": "978-4444532611",
      "read": false
  },
  {
      "ISBN": "978-1451673319",
      "read": true
  },
  {
      "ISBN": "393-0100563812",
      "read": true
  },
  {
      "ISBN": "978-0747532699",
      "read": true
  },
  {
      "ISBN": "398-9294473812",
      "read": false
  },
  {
      "ISBN": "612-9237493817",
      "read": false
  },
  {
      "ISBN": "022-3212359811",
      "read": false
  }
]


/* action: 'set' */

test('setNew', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, {type: 'set', payload: OTHERINTERESTBOOKS})
  ).toEqual<InterestBook[]>
    (OTHERINTERESTBOOKS)
})

test('setWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'set', payload: OTHERINTERESTBOOKS })
  ).toEqual<InterestBook[]>
    (OTHERINTERESTBOOKS)
})

test('setEmpty', () => {
  expect(
    RlReducer(OTHERINTERESTBOOKS, { type: 'set', payload: [] })
  ).toEqual<InterestBook[]>([])
})


/* action: 'add' */

test('add', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'add', payload: { ISBN: '123-2346845', read: false }}
    )
  ).toEqual<InterestBook[]>([...SOMEINTERESTBOOKS, { ISBN: '123-2346845', read: false }])
})

test('addWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'add', payload: { ISBN: '123-2346845', read: false } })
  ).toEqual<InterestBook[]>([{ ISBN: '123-2346845', read: false }])
})

test('addRepeated', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'add', payload: { "ISBN": "978-0618640157", "read": false }}
    )
  ).toEqual<InterestBook[]>(SOMEINTERESTBOOKS)
})


/* action: 'remove' */

test('remove', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'remove', payload: { "ISBN": "978-4444532611", "read": false }}
    ) 
  ).toEqual<InterestBook[]>(SOMEINTERESTBOOKS.filter(interest => interest.ISBN !== "978-4444532611"))
})

test('removeWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'remove', payload: { "ISBN": "978-4444532611", "read": false} })
  ).toEqual<InterestBook[]>([])
})

test('removeNonExists', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, { type: 'remove', payload: { "ISBN": "222-3333311111", "read": false} })
  ).toEqual<InterestBook[]>(SOMEINTERESTBOOKS)
})


/* action: 'switchReadStatus */

test('switch', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'switchReadStatus', payload: { ISBN: '022-3212359811' }} // the read prevstate is 'false'
    )
  ).toEqual(SOMEINTERESTBOOKS.map((interest) => {
    if(interest.ISBN === "022-3212359811") return { ISBN: interest.ISBN, read: true }
    return interest
  }))
})

test('switchNonExisting', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'switchReadStatus', payload: { ISBN: "111-2222277777" }}
    )
  ).toEqual(SOMEINTERESTBOOKS)
})

test('switchFromEmptyPrevState', () => {
  expect(
    RlReducer([], 
      { type: 'switchReadStatus', payload: { ISBN: "111-2222277777" }}
    )
  ).toEqual([])
})

test('switchWithEmptyISBN', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, 
      { type: 'switchReadStatus', payload: { ISBN: '' }}
    )
  ).toEqual(SOMEINTERESTBOOKS)
})


/* action: 'setAllRead' / 'setAllUnread' */

test('setAllRead', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, { type: 'setAllRead' })
  ).toEqual(SOMEINTERESTBOOKS.map(interest => {
    return { ISBN: interest.ISBN, read: true }
  }))
})

test('setAllReadWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'setAllRead' })
  ).toEqual([])
})

test('setAllUnread', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, { type: 'setAllUnread' })
  ).toEqual(SOMEINTERESTBOOKS.map(interest => {
    return { ISBN: interest.ISBN, read: false }
  }))
})

test('setAllUnreadWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'setAllUnread' })
  ).toEqual([])
})


/* action: 'readFirst' / 'unreadFirst' */

test('readFirst', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, { type: 'readFirst' })
  ).toEqual(SOMEINTERESTBOOKS.sort((a: InterestBook, b: InterestBook) => 
    a.read < b.read ? 1 : a.read > b.read ? -1 : 0)
  )
})

test('readFirstWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'readFirst' })
  ).toEqual([])
})

test('unreadFirst', () => {
  expect(
    RlReducer(SOMEINTERESTBOOKS, { type: 'unreadFirst' })
  ).toEqual(SOMEINTERESTBOOKS.sort((a: InterestBook, b: InterestBook) => 
  a.read < b.read ? -1 : a.read > b.read ? 1 : 0)
  )
})

test('readFirstWithEmptyPrevState', () => {
  expect(
    RlReducer([], { type: 'unreadFirst' })
  ).toEqual([])
})


/* action: 'clearRead' */

test('clearRead', () => {
  expect(
    RlReducer(OTHERINTERESTBOOKS, { type: 'clearRead' })
  ).toEqual(OTHERINTERESTBOOKS.filter(interest => !interest.read))
})

test('clearReadWithEmptyPrevStatus', () => {
  expect(
    RlReducer([], { type: 'clearRead' })
  ).toEqual([])
})

