'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { IntegratedDashboard } from '@/components/integrated-dashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Eye, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign, 
  Users, 
  Star,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  Settings,
  Bell,
  MoreVertical,
  Filter,
  Sparkles
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

export default function ArtisanDashboardPage() {
  const [timeRange, setTimeRange] = useState('7days');

  // Sample data - Revenue over time
  const revenueData = [
    { month: 'Jan', revenue: 4500, orders: 45, customers: 38 },
    { month: 'Feb', revenue: 5200, orders: 52, customers: 44 },
    { month: 'Mar', revenue: 4800, orders: 48, customers: 41 },
    { month: 'Apr', revenue: 6100, orders: 61, customers: 52 },
    { month: 'May', revenue: 7300, orders: 73, customers: 61 },
    { month: 'Jun', revenue: 8900, orders: 89, customers: 74 },
  ];

  // Product views and engagement
  const engagementData = [
    { day: 'Mon', views: 245, clicks: 89, saves: 34 },
    { day: 'Tue', views: 312, clicks: 127, saves: 48 },
    { day: 'Wed', views: 289, clicks: 103, saves: 39 },
    { day: 'Thu', views: 401, clicks: 156, saves: 62 },
    { day: 'Fri', views: 478, clicks: 189, saves: 71 },
    { day: 'Sat', views: 532, clicks: 218, saves: 89 },
    { day: 'Sun', views: 467, clicks: 198, saves: 76 },
  ];

  // Product performance
  const productPerformanceData = [
    { name: 'Traditional Vases', value: 35, color: '#10b981' },
    { name: 'Decorative Bowls', value: 28, color: '#f59e0b' },
    { name: 'Custom Orders', value: 22, color: '#3b82f6' },
    { name: 'Terracotta Pots', value: 15, color: '#ef4444' },
  ];

  // Customer satisfaction radar
  const satisfactionData = [
    { category: 'Quality', score: 95 },
    { category: 'Design', score: 88 },
    { category: 'Delivery', score: 82 },
    { category: 'Price', score: 78 },
    { category: 'Communication', score: 92 },
  ];

  // Order status workflow data
  const orderWorkflow = [
    { status: 'New Orders', count: 12, icon: Package, color: 'bg-blue-500' },
    { status: 'In Progress', count: 8, icon: Clock, color: 'bg-amber-500' },
    { status: 'Quality Check', count: 5, icon: AlertCircle, color: 'bg-purple-500' },
    { status: 'Completed', count: 34, icon: CheckCircle, color: 'bg-emerald-500' },
  ];

  // Key metrics
  const metrics = [
    {
      title: 'Total Revenue',
      value: '৳ 36,800',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      chartData: [3200, 3800, 3600, 4200, 4800, 5400, 6100, 5800],
    },
    {
      title: 'Total Orders',
      value: '368',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      chartData: [32, 38, 36, 42, 48, 54, 61, 58],
    },
    {
      title: 'Product Views',
      value: '2,724',
      change: '+24.8%',
      trend: 'up',
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      chartData: [245, 312, 289, 401, 478, 532, 467, 489],
    },
    {
      title: 'Avg Rating',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      chartData: [4.5, 4.6, 4.5, 4.7, 4.8, 4.8, 4.9, 4.8],
    },
  ];

  // Recent orders
  const recentOrders = [
    { id: '#ORD-1248', customer: 'Rahim Khan', product: 'Traditional Vase', amount: '৳ 1,200', status: 'completed', date: '2 hours ago' },
    { id: '#ORD-1247', customer: 'Fatima Begum', product: 'Decorative Bowl', amount: '৳ 850', status: 'in-progress', date: '5 hours ago' },
    { id: '#ORD-1246', customer: 'Karim Mia', product: 'Custom Pot', amount: '৳ 1,500', status: 'quality-check', date: '1 day ago' },
    { id: '#ORD-1245', customer: 'Salma Akhter', product: 'Terracotta Set', amount: '৳ 2,300', status: 'new', date: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-emerald-700 hover:text-emerald-800 flex items-center gap-2">
                ← Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent">
                Artisan Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Time Range Selector */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
            Live Dashboard
          </Badge>
        </div>

        {/* Backend-Integrated Real Analytics */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100">
                Live Backend Analytics
              </h2>
            </div>
            <p className="text-sm text-orange-800 dark:text-orange-200">
              Real-time data from your Flask backend API showing actual product views, sales, and AI recommendation performance
            </p>
          </div>
          <IntegratedDashboard />
        </div>

        <Separator className="my-12" />

        {/* Demo Analytics & Visualizations Below */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Additional Demo Visualizations</h2>
          <p className="text-muted-foreground">Advanced charts and mock data for presentation purposes</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <div className={`absolute top-0 right-0 w-32 h-32 ${metric.bgColor} rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-125 transition-transform`} />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={metric.trend === 'up' ? 'text-emerald-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold mt-4">{metric.value}</CardTitle>
                <CardDescription>{metric.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-12 flex items-end gap-1">
                  {metric.chartData.map((value, i) => (
                    <div
                      key={i}
                      className={`flex-1 ${metric.bgColor} rounded-t transition-all duration-300 hover:opacity-80`}
                      style={{ height: `${(value / Math.max(...metric.chartData)) * 100}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Workflow Flowchart */}
        <Card className="mb-8 overflow-hidden border-2">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-amber-50">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-emerald-700" />
              Order Workflow Status
            </CardTitle>
            <CardDescription>Real-time order processing pipeline</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative">
              {/* Flow connections */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-amber-200 via-purple-200 to-emerald-200 -translate-y-1/2 hidden lg:block" />
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                {orderWorkflow.map((stage, index) => (
                  <div key={index} className="relative">
                    {/* Connection arrow (desktop only) */}
                    {index < orderWorkflow.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                          <ArrowUpRight className="h-4 w-4 text-gray-500 rotate-90" />
                        </div>
                      </div>
                    )}
                    
                    <Card className="relative overflow-hidden border-2 hover:shadow-lg transition-all group">
                      <div className={`absolute top-0 left-0 right-0 h-2 ${stage.color}`} />
                      <CardContent className="pt-8 pb-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`p-4 rounded-2xl ${stage.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                            <stage.icon className={`h-8 w-8 ${stage.color.replace('bg-', 'text-')}`} />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{stage.status}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-gray-900">{stage.count}</span>
                            <span className="text-sm text-gray-500">orders</span>
                          </div>
                          {stage.count > 0 && (
                            <Button variant="link" size="sm" className="mt-3 text-emerald-700">
                              View Details →
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <TrendingUp className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Active Orders</p>
                      <p className="text-2xl font-bold text-gray-900">59</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <CheckCircle className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Completion Rate</p>
                      <p className="text-2xl font-bold text-emerald-700">94.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <Clock className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg Processing Time</p>
                      <p className="text-2xl font-bold text-gray-900">3.2 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue Area Chart */}
          <Card className="lg:col-span-2 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-700" />
                Revenue & Orders Trend
              </CardTitle>
              <CardDescription>Monthly performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #10b981',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }} 
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                    name="Revenue (৳)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorOrders)" 
                    name="Orders"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Product Performance Pie */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-700" />
                Product Categories
              </CardTitle>
              <CardDescription>Sales distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={productPerformanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {productPerformanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #3b82f6',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {productPerformanceData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engagement & Satisfaction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Engagement Bar Chart */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-700" />
                Weekly Engagement
              </CardTitle>
              <CardDescription>Views, clicks, and saves</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #8b5cf6',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="views" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Views" />
                  <Bar dataKey="clicks" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Clicks" />
                  <Bar dataKey="saves" fill="#10b981" radius={[8, 8, 0, 0]} name="Saves" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Customer Satisfaction Radar */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-600" />
                Customer Satisfaction
              </CardTitle>
              <CardDescription>Multi-dimensional feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={satisfactionData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="category" stroke="#6b7280" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                  <Radar 
                    name="Satisfaction Score" 
                    dataKey="score" 
                    stroke="#f59e0b" 
                    fill="#f59e0b" 
                    fillOpacity={0.6} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #f59e0b',
                      borderRadius: '8px'
                    }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Overall Satisfaction</p>
                <p className="text-3xl font-bold text-amber-600">87%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders Table */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-blue-700" />
                  Recent Orders
                </CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-mono text-sm font-semibold text-blue-700">{order.id}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                            {order.customer[0]}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.customer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-700">{order.product}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                      <td className="py-4 px-4">
                        <Badge 
                          className={
                            order.status === 'completed' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                            order.status === 'in-progress' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                            order.status === 'quality-check' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                            'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          }
                        >
                          {order.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {order.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                          {order.status === 'quality-check' && <AlertCircle className="h-3 w-3 mr-1" />}
                          {order.status === 'new' && <Package className="h-3 w-3 mr-1" />}
                          {order.status.replace('-', ' ')}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">{order.date}</td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">Showing 4 of 368 orders</p>
              <Button variant="outline" size="sm">
                View All Orders →
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Add New Product</h3>
                  <p className="text-sm text-gray-600">Upload your pottery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Manage Customers</h3>
                  <p className="text-sm text-gray-600">View buyer details</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">View Reviews</h3>
                  <p className="text-sm text-gray-600">Customer feedback</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
