import React from 'react';
import { Customer } from '../types';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <h4>{customer.name}</h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
