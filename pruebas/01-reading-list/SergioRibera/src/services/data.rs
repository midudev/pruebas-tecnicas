use crate::{errors::Error, models::Data};

pub async fn get_data() -> Result<Data, Error> {
    super::get("https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json".to_string()).await
}
