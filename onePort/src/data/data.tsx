import axios from "axios";
import { useEffect, useState } from "react";

export const TableHeads: string[] = ["FIRST NAME", "LAST NAME", "EMAIL ADDRESS", " PHONE NUMEBR", "LAST LOGIN"]
export const TableHeaderShipment: string[] = ["SHIPMENT TYPE", "ORIGIN", "DESTINATION", "SHIPMENT DATE", "SHIPMENT ID"]

export const dataFetching = (url: any) => {
  const [data, setData] = useState<any>([]);
  const [Error, setError] = useState<any>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [])
  return data
}

