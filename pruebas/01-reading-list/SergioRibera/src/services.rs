mod data;

pub use data::*;
use serde::de::DeserializeOwned;

#[cfg(feature = "inspect")]
use log::error;
use crate::errors::Error;

pub async fn get<T>(url: String) -> Result<T, Error>
where
    T: DeserializeOwned,
{
    let response = reqwest::get(url).await;
    match response {
        Ok(data) => (data.json::<T>().await).map_or(Err(Error::DeserializeError), |repo| Ok(repo)),
        Err(_e) => {
            #[cfg(feature = "inspect")]
            error!("Loaded Data Failed: {_e:?}");
            Err(Error::RequestError)
        }
    }
}
