/* eslint-disable no-undef */
describe('Books',()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('se carga la pagina',()=>{
        cy.contains('Recomendación de libros')
    })
    describe('Buscador',()=>{
        it('Se hace click en el input y se prueba nombre completo de libro',()=>{
            cy.get('input:first').type('Harry Potter y la piedra filosofal')
        })
        it('Se hace click en el input y se prueba en minuscula',()=>{
            cy.get('input:first').type('harry potter')
        })
        it('Se hace click en el input y se prueba con nombre incompleto',()=>{
            cy.get('input:first').type('harry')
            
        })
        it('Se prueba que el valor buscado es el mismo que esta siendo mostrado por pantalla',()=>{
            cy.get('input:first').type('Harry Potter')
            cy.get('img').should('have.attr', 'alt', 'Harry Potter y la piedra filosofal')
            cy.get('[data-testid="book-container-id"] .book').should('have.length',1)
        })
    })
    describe('Filtro por genero',()=>{
        it('Se hace click en el selector y se escoge el genero de Fantasía',()=>{
            cy.get('select').select('Fantasía').should('have.value', 'Fantasía')
            cy.get('[data-testid="class-container-h4"] h4:first').invoke('text').then(text=>{
                cy.get('[data-testid="book-container-id"] .book').should('have.length',parseInt(text))
            })
        })
        it('se escoge un genero de genero y se espera que concida el numero disponible por pantalla con lo que se ve',()=>{
            cy.get('select').select('Todas')
            cy.get('[data-testid="class-container-h4"] h4:first').invoke('text').then(text=>{
                cy.get('[data-testid="book-container-id"] .book').should('have.length',parseInt(text))
            })
        })
    })
    describe('Libros lista de lectura',()=>{
        it('la lista de libros no esta a la vista',()=>{
            cy.get('[data-test-id="id-container-list-read"]').should('have.css','display','none')
        })
        it('la lista de libros aparece cuando se presiona el libro de interes',()=>{
            cy.get('[data-testid="book-container-id"] .book:first').click()
            cy.get('[data-test-id="id-container-list-read"]').should('have.css','display','block')
        })
    })
})