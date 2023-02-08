import axios from "axios";
import { useEffect,useState } from "react";
import { UseContext } from "../context/context"
export const TableHeads = ["FIRST NAME", "LAST NAME", "EMAIL ADDRESS", " PHONE NUMEBR", "LAST LOGIN"]

export const dataFetching = (url:any) => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(url);
              setData(response);
            } catch (error) {
            //   setError(error);
            }
          };
          fetchData();
    }, [])
    return data
}

