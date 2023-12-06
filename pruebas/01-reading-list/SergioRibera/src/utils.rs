pub fn to_slug(s: String) -> String {
    s.to_lowercase()
        .replace(' ', "-")
        .replace('á', "a")
        .replace('é', "e")
        .replace('í', "i")
        .replace('ó', "o")
        .replace('ú', "u")
        .replace('ñ', "n")
}
