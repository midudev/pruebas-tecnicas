
pub fn to_slug(s: String) -> String {
    s.to_lowercase().replace(" ", "-")
}
