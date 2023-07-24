import { useState, useCallback } from "react";

const callToService = (service) =>
  service
    .then((response) => {
      return response;
    })
    .catch((error) => Promise.resolve({ error }));

const useGetData = ({ initialState = null, service, format }) => {
  const [data, setData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(
    (params) => {
      const fetchData = async (params) => {
        setErrorMessage(null);
        setLoading(true);

        const response = await callToService(service(params));

        setLoading(false);

        if (response.error) {
          setErrorMessage(response.error);
          return;
        }
        const newData = format ? format(response.data) : response.data;
        setData(newData);
      };
      fetchData(params);
    },
    [format, service]
  );

  return [getData, data, loading, errorMessage];
};

export default useGetData;
