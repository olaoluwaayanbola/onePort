import { Table } from '../../Table';
import { useEffect, useState } from 'react';
import customerStyles from './Customer.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { dataFetching, TableHeads } from '../../data/data';
const Customer = () => {
  /**
   * fetching data from a function created in the data file
   * using the current path to conditionally render the file
   */
  const [data, setData] = useState<{}[]>([]);
  const path = useLocation().pathname;
  /**
   * useEffect to fetch the data on mount
   */
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = dataFetching(
          'https://demo3522726.mockable.io/get_customers',
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      <section className={customerStyles.Container}>
        {path !== '/shipping' && (
          <>
            <div className={customerStyles.AddCustomerContainer}>
              <button className={customerStyles.AddCustomer}>
                Add Customer
                <AddOutlinedIcon />
              </button>
            </div>
            <Table data={data} TableHead={TableHeads} />
          </>
        )}
        <Outlet />
      </section>
    </main>
  );
};

export default Customer;
