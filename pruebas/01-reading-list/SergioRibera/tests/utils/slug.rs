#[cfg(test)]
mod tests {
    use reading_list::utils::to_slug;

    #[test]
    fn simple_slugify() {
        let t = "TeXto DE PruEBa".to_string();
        let expected = "texto-de-prueba".to_string();

        assert_eq!(to_slug(t), expected);
    }

    #[test]
    fn complex_slugify() {
        let t = "El Señor de los Anillos".to_string();
        let expected = "el-senor-de-los-anillos".to_string();

        assert_eq!(to_slug(t), expected);
    }

    #[test]
    fn accented_slugify() {
        let t = "Drácula".to_string();
        let expected = "dracula".to_string();

        assert_eq!(to_slug(t), expected);
    }
}
