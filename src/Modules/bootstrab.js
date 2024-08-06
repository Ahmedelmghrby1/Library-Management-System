import bookRouter from "./book/book.routes.js"
import borrowRouter from "./borrowingRecord/borrowing.routes.js"
import librariansRoter from "./librarians/librarians.routes.js"
import patronRouter from "./patron/patron.routes.js"

export const bootstrab= (app)=>{
    app.use('/api/books',bookRouter)
    app.use('/api/patrons',patronRouter)
    app.use('/api/auth',librariansRoter)
    app.use('/api',borrowRouter)








}