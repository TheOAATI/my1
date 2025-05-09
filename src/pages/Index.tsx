
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CustomerList from '@/components/CustomerList';
import AddCustomerForm from '@/components/AddCustomerForm';
import { Customer } from '@/types/customer';
import { getCustomers, addCustomer as addCustomerService, deleteCustomer as deleteCustomerService } from '@/services/customerService';
import { useToast } from "@/components/ui/use-toast";

const Index: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load customers from localStorage when component mounts
    const loadedCustomers = getCustomers();
    setCustomers(loadedCustomers);
  }, []);
  
  const handleAddCustomer = (name: string) => {
    try {
      const newCustomer = addCustomerService(name);
      setCustomers(prev => [...prev, newCustomer]);
    } catch (error) {
      console.error('Error adding customer:', error);
      toast({
        title: "خطأ في إضافة الزبون",
        description: "حدث خطأ أثناء محاولة إضافة الزبون. حاول مرة أخرى.",
        variant: "destructive",
      });
    }
  };
  
  const handleDeleteCustomer = (id: string) => {
    try {
      deleteCustomerService(id);
      setCustomers(prev => prev.filter(customer => customer.id !== id));
      toast({
        title: "تم حذف الزبون",
        description: "تم حذف الزبون بنجاح من قائمة الزبائن.",
      });
    } catch (error) {
      console.error('Error deleting customer:', error);
      toast({
        title: "خطأ في حذف الزبون",
        description: "حدث خطأ أثناء محاولة حذف الزبون. حاول مرة أخرى.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Header />
        
        <div className="space-y-6">
          <AddCustomerForm onAddCustomer={handleAddCustomer} />
          
          <div>
            <h2 className="text-xl font-semibold mb-4 rtl">قائمة الزبائن ({customers.length})</h2>
            <CustomerList customers={customers} onDelete={handleDeleteCustomer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
