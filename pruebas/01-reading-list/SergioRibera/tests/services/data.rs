#[cfg(test)]
mod tests {
    use reading_list::services::get_data;
    use tokio_test::block_on;

    #[test]
    #[ignore = "reqwest have problems runing on test environment"]
    fn successful_request_data() {
        let data = block_on(get_data());

        assert!(data.is_ok());
    }

    #[test]
    #[ignore = "reqwest have problems runing on test environment"]
    fn successful_get_data() {
        let data = block_on(get_data());
        let library = data.unwrap().library;

        assert!(!library.is_empty());
    }
}
