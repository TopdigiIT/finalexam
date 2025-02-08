import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SellerDashboard() {
  const [stats, setStats] = useState({
    totalSales: 120,
    totalProducts: 15,
    pendingOrders: 5,
    completedOrders: 50,
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Seller Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-xl font-bold">${stats.totalSales}K</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold">Total Products</h3>
            <p className="text-xl font-bold">{stats.totalProducts}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold">Pending Orders</h3>
            <p className="text-xl font-bold">{stats.pendingOrders}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold">Completed Orders</h3>
            <p className="text-xl font-bold">{stats.completedOrders}</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Button>Manage Products</Button>
        <Button>View Orders</Button>
      </div>
    </div>
  );
}
