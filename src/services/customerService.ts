
import { Customer } from "../types/customer";

// Key for storing customers in localStorage
const CUSTOMERS_STORAGE_KEY = 'arab-customer-hub-customers';

// Initial customers array if none exist in localStorage
const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'محمد أحمد',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'فاطمة علي',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'أحمد محمود',
    createdAt: new Date().toISOString()
  }
];

// Get all customers from localStorage
export const getCustomers = (): Customer[] => {
  try {
    const customersJson = localStorage.getItem(CUSTOMERS_STORAGE_KEY);
    if (customersJson) {
      return JSON.parse(customersJson);
    }
    // If no customers in localStorage, set the initial customers
    saveCustomers(initialCustomers);
    return initialCustomers;
  } catch (error) {
    console.error('Error retrieving customers from localStorage:', error);
    return initialCustomers;
  }
};

// Save customers to localStorage
export const saveCustomers = (customers: Customer[]): void => {
  try {
    localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(customers));
  } catch (error) {
    console.error('Error saving customers to localStorage:', error);
  }
};

// Add a new customer
export const addCustomer = (name: string): Customer => {
  const customers = getCustomers();
  const newCustomer: Customer = {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date().toISOString()
  };
  
  customers.push(newCustomer);
  saveCustomers(customers);
  
  return newCustomer;
};

// Delete a customer by id
export const deleteCustomer = (id: string): void => {
  const customers = getCustomers();
  const updatedCustomers = customers.filter(customer => customer.id !== id);
  saveCustomers(updatedCustomers);
};
