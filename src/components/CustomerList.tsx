
import React from 'react';
import { Customer } from '../types/customer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, User } from "lucide-react";

interface CustomerListProps {
  customers: Customer[];
  onDelete: (id: string) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onDelete }) => {
  if (customers.length === 0) {
    return (
      <div className="text-center py-10 rtl">
        <User className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium">لا يوجد زبائن</h3>
        <p className="mt-2 text-sm text-muted-foreground">أضف زبون جديد للبدء</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 rtl">
      {customers.map((customer) => (
        <Card key={customer.id} className="overflow-hidden">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">{customer.name}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(customer.createdAt).toLocaleDateString('ar-EG')}
              </p>
            </div>
            <Button
              variant="ghost" 
              className="text-destructive hover:text-destructive hover:bg-destructive/10" 
              onClick={() => onDelete(customer.id)}
            >
              حذف
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CustomerList;
