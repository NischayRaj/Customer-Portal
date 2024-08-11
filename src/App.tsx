import React, { useEffect, useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { getCustomers } from './services/CustomerService';
import './App.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const customerData = await getCustomers();
      setCustomers(customerData);
      setSelectedCustomerId(customerData[0]?.id || null);
    };

    fetchData();
  }, []);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app">
      <div className="sidebar">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId ?? -1}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>
      <div className="content">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
