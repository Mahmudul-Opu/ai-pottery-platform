'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CreditCard, Truck, DollarSign, AlertCircle, Package } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function CheckoutPage() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const cartItems = [
    { name: 'Traditional Clay Vase', price: 500, quantity: 1, image: '🏺' },
    { name: 'Handmade Bowl', price: 350, quantity: 2, image: '🥣' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 100;
  const total = subtotal + shipping;

  const convertPrice = (bdtPrice: number) => {
    return currency === 'USD' ? (bdtPrice / 110).toFixed(2) : bdtPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        {/* Research Prototype Banner */}
        <Card className="mb-8 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-orange-900 dark:text-orange-100 font-medium">
                  🔬 Research Prototype / Demo – No Real Transactions
                </p>
                <p className="text-xs text-orange-800 dark:text-orange-200 mt-1">
                  This is a usability evaluation prototype. No actual payments will be processed. For research purposes only.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">🛒 Checkout</h1>
          <p className="text-slate-600 dark:text-slate-400">Complete your order</p>
          
          {/* Currency Toggle */}
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant={currency === 'BDT' ? 'default' : 'outline'}
              onClick={() => setCurrency('BDT')}
              size="sm"
            >
              💵 BDT (৳)
            </Button>
            <Button
              variant={currency === 'USD' ? 'default' : 'outline'}
              onClick={() => setCurrency('USD')}
              size="sm"
            >
              💵 USD ($)
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shopping Cart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-orange-500" />
                  Shopping Cart ({cartItems.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-0">
                      <div className="text-5xl">{item.image}</div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {currency === 'BDT' ? '৳' : '$'} {convertPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-500" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input placeholder="আপনার নাম / Your Name" />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input placeholder="+880 XXXX-XXXXXX" />
                  </div>
                </div>
                <div>
                  <Label>Full Address</Label>
                  <Input placeholder="House, Road, Area" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>City / District</Label>
                    <Input placeholder="Dhaka" />
                  </div>
                  <div>
                    <Label>Postal Code</Label>
                    <Input placeholder="1200" />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input value="Bangladesh" disabled />
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <div className="flex gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">📦 Estimated Delivery</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">3-5 business days within Bangladesh</p>
                      <p className="text-xs text-slate-500 mt-1">Careful packaging for fragile pottery items</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-500" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cash on Delivery */}
                <div className="border-2 border-green-500 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                        💵
                      </div>
                      <div>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Pay when you receive</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Recommended</Badge>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                    ✅ Most trusted payment method in Bangladesh
                  </p>
                </div>

                {/* Demo Digital Payment */}
                <div className="border-2 border-slate-200 dark:border-slate-700 p-4 rounded-lg opacity-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                        💳
                      </div>
                      <div>
                        <p className="font-semibold">Digital Payment</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">bKash, Nagad, Card</p>
                      </div>
                    </div>
                    <Badge variant="outline">Demo Only</Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    🔬 Research prototype - Non-functional for demonstration
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                  <span className="font-semibold">
                    {currency === 'BDT' ? '৳' : '$'} {convertPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                  <span className="font-semibold">
                    {currency === 'BDT' ? '৳' : '$'} {convertPrice(shipping)}
                  </span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-orange-600">
                    {currency === 'BDT' ? '৳' : '$'} {convertPrice(total)}
                  </span>
                </div>
                
                {currency === 'BDT' && (
                  <p className="text-xs text-slate-500 text-center">
                    ≈ ${(total / 110).toFixed(2)} USD
                  </p>
                )}

                <Button className="w-full" size="lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Place Order (Demo)
                </Button>

                <div className="space-y-2 text-xs text-slate-500">
                  <p className="flex items-center gap-2">
                    <span>✅</span> Secure checkout
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✅</span> 7-day return policy
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✅</span> Fragile item handling
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✅</span> Direct from artisan
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="mt-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
              <CardContent className="pt-6">
                <p className="text-sm font-medium text-center mb-2">🔒 Safe & Secure</p>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400">
                  Your order supports local artisan communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
