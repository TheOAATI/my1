
import React from 'react';
import { Users } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="border-b pb-4 mb-6 rtl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-teal-600" />
          <h1 className="text-2xl font-bold text-teal-700">إدارة الزبائن</h1>
        </div>
        <span className="text-muted-foreground text-sm">نظام إدارة الزبائن العربي</span>
      </div>
    </header>
  );
};

export default Header;
