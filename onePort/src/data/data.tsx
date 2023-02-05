import { useEffect,useState } from "react";
import axios from "axios";
import { UseContext } from "../context/context"

export const TableHeads = ["FIRST NAME", "LAST NAME", "EMAIL ADDRESS", " PHONE NUMEBR", "LAST LOGIN"]

export const dataFetching = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                "https://demo3522726.mockable.io/get_single_shipment_details/987654321"
              );
              setData(response);
            } catch (error) {
            //   setError(error);
            }
          };
          fetchData();
    }, [])
    return data
}

