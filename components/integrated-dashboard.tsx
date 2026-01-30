'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { analyticsAPI, productsAPI, exportAPI, downloadBlob, type DashboardAnalytics, type Product } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  BarChart3,
  Eye,
  MousePointerClick,
  ShoppingCart,
  DollarSign,
  Users,
  TrendingUp,
  Download,
  Sparkles,
} from 'lucide-react';

export function IntegratedDashboard() {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<DashboardAnalytics | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    if (user?.role === 'artisan') {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [analyticsData, productsData] = await Promise.all([
        analyticsAPI.getDashboard(),
        productsAPI.getMyProducts(),
      ]);
      setAnalytics(analyticsData.analytics);
      setProducts(productsData.products);
    } catch (error) {
      console.error('Failed to load dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportData = async () => {
    try {
      setExporting(true);
      const blob = await exportAPI.downloadAnalytics();
      downloadBlob(blob, `analytics_${new Date().toISOString().split('T')[0]}.csv`);
    } catch (error) {
      alert('Failed to export data');
    } finally {
      setExporting(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Overview</h2>
          <p className="text-muted-foreground">Real-time insights from your backend</p>
        </div>
        <Button onClick={handleExportData} disabled={exporting}>
          <Download className="w-4 h-4 mr-2" />
          {exporting ? 'Exporting...' : 'Export Data'}
        </Button>
      </div>

      {/* Analytics Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics?.total_products || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active listings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics?.total_views || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {analytics?.unique_visitors || 0} unique visitors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics?.total_sales || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {analytics?.total_clicks || 0} total clicks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{analytics?.total_revenue || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {analytics?.recommendation_acceptance_rate.toFixed(1) || 0}% from AI
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Products</CardTitle>
              <CardDescription>Manage your pottery listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">{product.category} • ৳{product.price}</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">{product.views_count}</div>
                        <div className="text-muted-foreground">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{product.sales_count}</div>
                        <div className="text-muted-foreground">Sales</div>
                      </div>
                      <Badge variant={product.stock_quantity > 0 ? 'default' : 'secondary'}>
                        {product.stock_quantity} in stock
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Products by Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics?.views_by_product.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{index + 1}</Badge>
                        <span className="font-medium text-sm">{item.product_name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.views} views</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products by Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics?.sales_by_product.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{index + 1}</Badge>
                        <span className="font-medium text-sm">{item.product_name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.sales} sales</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Performance Trend
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Your products have received {analytics?.total_views || 0} views with {' '}
                      {analytics?.unique_visitors || 0} unique visitors. Keep engaging!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                      AI Recommendations
                    </h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      {analytics?.recommendation_acceptance_rate.toFixed(1)}% of customers discover your products
                      through AI-powered personalized recommendations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
