
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AddCustomerFormProps {
  onAddCustomer: (name: string) => void;
}

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({ onAddCustomer }) => {
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال اسم الزبون",
        variant: "destructive",
      });
      return;
    }

    onAddCustomer(name);
    setName('');
    
    toast({
      title: "تم إضافة الزبون بنجاح",
      description: `تمت إضافة ${name} إلى قائمة الزبائن.`,
    });
  };

  return (
    <Card>
      <CardHeader className="rtl">
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          <span>إضافة زبون جديد</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="rtl">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="اسم الزبون"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 text-right"
          />
          <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
            إضافة
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCustomerForm;
