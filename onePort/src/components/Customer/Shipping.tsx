import { Table } from '../../Table';
import { useState, useEffect } from 'react';
import { dataFetching } from '../../data/data';
import ShippingStyles from './Shipping.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { TableHeaderShipment } from '../../data/data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Shipping = () => {
  /**
   *   the states that control different conditons and holds diffrent data
   */
  const [importValues, setimportValues] = useState<[]>([]);
  const [exportValues, setexportValues] = useState<[]>([]);
  const [ActiveButton, setActiveButton] = useState<any>('');
  const [dataRender, setDataRender] = useState<object[]>([]);
  const [ShipmentType, setShipmentType] = useState<any>(false);
  const [data, setData] = useState<any>([]);
  const ShipmentTypeData = () => {
    setimportValues(() =>
      data?.filter((eles: any) => eles.shipping_type === 'import'),
    );
    setexportValues(() =>
      data?.filter((eles: any) => eles.shipping_type === 'export'),
    );
  };

  /**
   * the first useEffect fectches data from the api and passes when the component mounts
   * the second useEffect runs diffrent functionalities when the data changes
   */
  useEffect(() => {
    const fetch = () => {
      try {
        const { data } = dataFetching(
          'https://demo3522726.mockable.io/get_single_customer_shipments/123456789',
        );
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    ShipmentTypeData();
    setDataRender(data);
  }, [data]);

  const ShipmentDateData = () => {
    setimportValues(() =>
      data?.filter((eles: any) => eles.shipping_type === 'import'),
    );
  };
  return (
    <main className={ShippingStyles.Container}>
      <section className={ShippingStyles.BackArrow}>
        <span className={ShippingStyles.ArrowBack}>
          <ArrowBackIcon />
        </span>
      </section>
      <section className={ShippingStyles.UserCard}>
        <div className={ShippingStyles.ImgContainer}>
          <img src="" alt="userImag" />
        </div>
        <div className={ShippingStyles.UsersInfo}>
          <div className={ShippingStyles.UserDetails}>
            <span className={ShippingStyles.UsersName}>Banji oladapo</span>
            <span className={ShippingStyles.UserEmail}>
              BanjiOladapo@gmail.com
            </span>
            <span className={ShippingStyles.UsersPhoneNumber}>0905768767</span>
          </div>
          <div className={ShippingStyles.EditButton}>
            <button>Edit</button>
          </div>
        </div>
      </section>
      <section className={ShippingStyles.ButtonSearchBar}>
        <div className={ShippingStyles.btnContainer}>
          <button
            onClick={() => {
              setActiveButton('New_Shipment');
              console.log(ActiveButton);
            }}
            className={
              ActiveButton === 'New_Shipment'
                ? ShippingStyles.active
                : ShippingStyles.notactive
            }
          >
            Add New Shipments
            <KeyboardArrowDownIcon />
          </button>
          <button
            onClick={() => {
              setShipmentType((prev: any) => !prev);
              setActiveButton('Shipment Type');
            }}
            className={
              ActiveButton === 'Shipment Type'
                ? ShippingStyles.active
                : ShippingStyles.notactive
            }
          >
            Shipment Type
            <KeyboardArrowDownIcon />
          </button>
          {ShipmentType && (
            <div className={ShippingStyles.shipmentType}>
              <span
                onClick={() => {
                  setDataRender(importValues);
                }}
                role="button"
              >
                Import
              </span>
              <span
                onClick={() => {
                  setDataRender(exportValues);
                }}
                role="button"
              >
                Export
              </span>
            </div>
          )}
          <button
            onClick={() => {
              setActiveButton('Shipment_Date');
            }}
            className={
              ActiveButton === 'Shipment_Date'
                ? ShippingStyles.active
                : ShippingStyles.notactive
            }
          >
            Shipment Date
            <KeyboardArrowDownIcon />
          </button>
        </div>
        <div className={ShippingStyles.inputContainer}>
          <div className={ShippingStyles.SearchBarWrapper}>
            <SearchIcon className={ShippingStyles.Icon} />
            <input
              type="text"
              placeholder="Search by shipment ID,Destination"
            />
          </div>
        </div>
      </section>
      <section className={ShippingStyles.Table}>
        <Table ShippingData={dataRender} TableHead={TableHeaderShipment} />
      </section>
    </main>
  );
};

export default Shipping;
