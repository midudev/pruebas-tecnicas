import { createApp } from "vue"
import "@/ui/style.css"
import App from "@/ui/App.vue"
import { BooksPloc } from "./core/book/presentation/BooksPloc"
import { dependenciesLocator } from "@/core/common/dependencies/DependenciesLocator"
import { BookListPloc } from "./core/book/presentation/BookListPloc"

const app = createApp(App)
app.provide<BooksPloc>("booksPloc", dependenciesLocator.provideBooksPloc())
app.provide<BookListPloc>("bookListPloc", dependenciesLocator.provideBookListPloc())

app.mount("#app")
