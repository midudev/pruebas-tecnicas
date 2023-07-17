use serde::{Serialize, Deserialize};

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Data {
    pub library: Vec<Library>,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Library {
    pub book: Book,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Book {
    pub title: String,
    pub pages: i64,
    pub genre: String,
    pub cover: String,
    pub synopsis: String,
    pub year: i64,
    #[serde(rename = "ISBN")]
    pub isbn: String,
    pub author: Author,
    #[serde(skip)]
    pub saved: bool
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Author {
    pub name: String,
    pub other_books: Vec<String>,
}
