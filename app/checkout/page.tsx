"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ShoppingCart, 
  Truck, 
  CreditCard, 
  Package, 
  CheckCircle,
  Globe,
  AlertCircle,
  Wallet,
  Banknote,
  Smartphone,
  Info
} from "lucide-react";

export default function CheckoutPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [currency, setCurrency] = useState<"BDT" | "USD">("BDT");

  const content = {
    en: {
      title: "Secure Checkout",
      subtitle: "Complete Your Pottery Order",
      
      // Cart Summary
      cart: {
        title: "Order Summary",
        items: "Items in Cart",
        subtotal: "Subtotal",
        shipping: "Shipping",
        tax: "Tax/VAT",
        total: "Total Amount",
        freeShipping: "FREE (Local Delivery)",
        shippingCost: "Calculated at checkout"
      },

      // Shipping Info
      shipping: {
        title: "Delivery Information",
        name: "Full Name",
        namePlaceholder: "Enter your name",
        phone: "Phone Number",
        phonePlaceholder: "+880 1XXX-XXXXXX",
        address: "Delivery Address",
        addressPlaceholder: "House/Flat, Street, Area",
        city: "City/District",
        cityPlaceholder: "e.g., Dhaka, Narsingdi",
        postal: "Postal Code",
        postalPlaceholder: "Optional"
      },

      // Payment Methods
      payment: {
        title: "Payment Method",
        cod: "Cash on Delivery (COD)",
        codDesc: "Pay when you receive the product - Most Popular",
        codDetails: "Hand cash to delivery person after product inspection",
        
        bkash: "bKash Mobile Payment",
        bkashDesc: "Pay securely with bKash - Demo only",
        bkashNumber: "bKash Number: +880 1XXX-XXXXXX",
        
        nagad: "Nagad Mobile Payment",
        nagadDesc: "Pay with Nagad wallet - Demo only",
        
        card: "Credit/Debit Card",
        cardDesc: "Visa, Mastercard - Demo only",
        cardNumber: "Card Number",
        cardExpiry: "Expiry (MM/YY)",
        cardCVV: "CVV",

        demoNotice: "Payment Gateway Demo - Research Prototype"
      },

      // Currency
      currencyLabel: "Select Currency",

      // Order Review
      review: {
        title: "Review Your Order",
        product: "Product",
        quantity: "Quantity",
        price: "Price"
      },

      // Buttons
      placeOrder: "Place Order",
      backToCart: "Back to Cart",
      
      // Success Message
      success: {
        title: "Order Placed Successfully!",
        message: "Thank you for your order. We will contact you shortly for confirmation.",
        orderNumber: "Order Number",
        estimatedDelivery: "Estimated Delivery: 3-5 business days"
      },

      // Trust Badges
      trust: {
        secure: "Secure Checkout",
        moneyBack: "Money-Back Guarantee",
        support: "24/7 Customer Support"
      },

      // Research Notice
      research: {
        title: "Research Prototype Payment",
        description: "This is a research prototype. No real transactions will be processed. This demonstrates the checkout flow for artisan pottery sales."
      }
    },
    bn: {
      title: "নিরাপদ চেকআউট",
      subtitle: "আপনার মাটির পাত্রের অর্ডার সম্পূর্ণ করুন",

      // Cart Summary
      cart: {
        title: "অর্ডার সারসংক্ষেপ",
        items: "কার্টে আইটেম",
        subtotal: "উপমোট",
        shipping: "ডেলিভারি",
        tax: "ট্যাক্স/ভ্যাট",
        total: "মোট পরিমাণ",
        freeShipping: "বিনামূল্যে (স্থানীয় ডেলিভারি)",
        shippingCost: "চেকআউটে হিসাব করা হবে"
      },

      // Shipping Info
      shipping: {
        title: "ডেলিভারি তথ্য",
        name: "পূর্ণ নাম",
        namePlaceholder: "আপনার নাম লিখুন",
        phone: "ফোন নম্বর",
        phonePlaceholder: "+৮৮০ ১XXX-XXXXXX",
        address: "ডেলিভারি ঠিকানা",
        addressPlaceholder: "বাড়ি/ফ্ল্যাট, রাস্তা, এলাকা",
        city: "শহর/জেলা",
        cityPlaceholder: "যেমন, ঢাকা, নরসিংদী",
        postal: "পোস্টাল কোড",
        postalPlaceholder: "ঐচ্ছিক"
      },

      // Payment Methods
      payment: {
        title: "পেমেন্ট পদ্ধতি",
        cod: "ক্যাশ অন ডেলিভারি (COD)",
        codDesc: "পণ্য পেলে টাকা দিন - সবচেয়ে জনপ্রিয়",
        codDetails: "পণ্য পরীক্ষা করার পর ডেলিভারি ব্যক্তিকে নগদ দিন",
        
        bkash: "বিকাশ মোবাইল পেমেন্ট",
        bkashDesc: "বিকাশ দিয়ে নিরাপদে পেমেন্ট করুন - শুধুমাত্র ডেমো",
        bkashNumber: "বিকাশ নম্বর: +৮৮০ ১XXX-XXXXXX",
        
        nagad: "নগদ মোবাইল পেমেন্ট",
        nagadDesc: "নগদ ওয়ালেট দিয়ে পেমেন্ট করুন - শুধুমাত্র ডেমো",
        
        card: "ক্রেডিট/ডেবিট কার্ড",
        cardDesc: "ভিসা, মাস্টারকার্ড - শুধুমাত্র ডেমো",
        cardNumber: "কার্ড নম্বর",
        cardExpiry: "মেয়াদ (MM/YY)",
        cardCVV: "CVV",

        demoNotice: "পেমেন্ট গেটওয়ে ডেমো - গবেষণা প্রোটোটাইপ"
      },

      // Currency
      currencyLabel: "মুদ্রা নির্বাচন করুন",

      // Order Review
      review: {
        title: "আপনার অর্ডার পর্যালোচনা করুন",
        product: "পণ্য",
        quantity: "পরিমাণ",
        price: "দাম"
      },

      // Buttons
      placeOrder: "অর্ডার করুন",
      backToCart: "কার্টে ফিরে যান",

      // Success Message
      success: {
        title: "অর্ডার সফলভাবে সম্পন্ন হয়েছে!",
        message: "আপনার অর্ডারের জন্য ধন্যবাদ। নিশ্চিতকরণের জন্য আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        orderNumber: "অর্ডার নম্বর",
        estimatedDelivery: "আনুমানিক ডেলিভারি: ৩-৫ ব্যবসায়িক দিন"
      },

      // Trust Badges
      trust: {
        secure: "নিরাপদ চেকআউট",
        moneyBack: "টাকা ফেরত গ্যারান্টি",
        support: "২৪/৭ গ্রাহক সহায়তা"
      },

      // Research Notice
      research: {
        title: "গবেষণা প্রোটোটাইপ পেমেন্ট",
        description: "এটি একটি গবেষণা প্রোটোটাইপ। কোনও প্রকৃত লেনদেন প্রক্রিয়া করা হবে না। এটি কুমোর মাটির পাত্র বিক্রয়ের জন্য চেকআউট ফ্লো প্রদর্শন করে।"
      }
    }
  };

  const t = content[language];

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: language === "en" ? "Handmade Clay Water Pot" : "হাতে তৈরি মাটির পানির পাত্র",
      artisan: language === "en" ? "Made by Rahim Ahmed" : "তৈরি করেছেন রহিম আহমেদ",
      quantity: 2,
      priceBDT: 450,
      priceUSD: 4.2,
      image: "🏺"
    },
    {
      id: 2,
      name: language === "en" ? "Traditional Pottery Vase" : "ঐতিহ্যবাহী মাটির ফুলদানি",
      artisan: language === "en" ? "Made by Fatima Begum" : "তৈরি করেছেন ফাতিমা বেগম",
      quantity: 1,
      priceBDT: 850,
      priceUSD: 8.0,
      image: "🏺"
    }
  ];

  const subtotal = currency === "BDT" 
    ? cartItems.reduce((sum, item) => sum + (item.priceBDT * item.quantity), 0)
    : cartItems.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);

  const shipping = 0; // Free local delivery
  const tax = Math.round(subtotal * 0.05); // 5% VAT
  const total = subtotal + shipping + tax;

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-white border-green-200">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-green-900 mb-4">{t.success.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{t.success.message}</p>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">{t.success.orderNumber}</p>
                <p className="text-2xl font-mono font-bold text-green-900">ORD-{Math.floor(Math.random() * 10000)}</p>
                <p className="text-sm text-gray-600 mt-4">{t.success.estimatedDelivery}</p>
              </div>
              <Alert className="mb-6 bg-blue-50 border-blue-200">
                <Info className="h-5 w-5 text-blue-600" />
                <AlertDescription className="text-blue-900">
                  {t.research.description}
                </AlertDescription>
              </Alert>
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-green-600 hover:bg-green-700"
                size="lg"
              >
                {language === "en" ? "Back to Home" : "হোমে ফিরে যান"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">{t.title}</h1>
            <p className="text-lg text-amber-700">{t.subtitle}</p>
          </div>
          <Button
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Globe className="h-5 w-5" />
            {language === "en" ? "বাংলা" : "English"}
          </Button>
        </div>

        {/* Research Prototype Notice */}
        <Alert className="mb-8 bg-purple-50 border-purple-200">
          <AlertCircle className="h-5 w-5 text-purple-600" />
          <AlertDescription className="text-purple-900 font-medium">
            <strong>{t.research.title}:</strong> {t.research.description}
          </AlertDescription>
        </Alert>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-green-200">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <span className="font-semibold text-gray-900">{t.trust.secure}</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-blue-200">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="font-semibold text-gray-900">{t.trust.moneyBack}</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-amber-200">
            <Smartphone className="h-8 w-8 text-amber-600" />
            <span className="font-semibold text-gray-900">{t.trust.support}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Shipping Information */}
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <Truck className="h-6 w-6" />
                  {t.shipping.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t.shipping.name}</Label>
                    <Input id="name" placeholder={t.shipping.namePlaceholder} />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.shipping.phone}</Label>
                    <Input id="phone" placeholder={t.shipping.phonePlaceholder} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">{t.shipping.address}</Label>
                  <Input id="address" placeholder={t.shipping.addressPlaceholder} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">{t.shipping.city}</Label>
                    <Input id="city" placeholder={t.shipping.cityPlaceholder} />
                  </div>
                  <div>
                    <Label htmlFor="postal">{t.shipping.postal}</Label>
                    <Input id="postal" placeholder={t.shipping.postalPlaceholder} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-white border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  {t.payment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  
                  {/* Cash on Delivery - Primary Option */}
                  <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="cod" id="cod" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="cod" className="flex items-center gap-2 text-lg font-semibold text-green-900 cursor-pointer">
                          <Banknote className="h-5 w-5" />
                          {t.payment.cod}
                          <Badge className="bg-green-600 text-white ml-2">
                            {language === "en" ? "Recommended" : "প্রস্তাবিত"}
                          </Badge>
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{t.payment.codDesc}</p>
                        <p className="text-xs text-gray-500 mt-2">{t.payment.codDetails}</p>
                      </div>
                    </div>
                  </div>

                  {/* bKash - Demo */}
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="bkash" id="bkash" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="bkash" className="flex items-center gap-2 text-lg font-semibold cursor-pointer">
                          <Smartphone className="h-5 w-5 text-pink-600" />
                          {t.payment.bkash}
                          <Badge variant="outline" className="ml-2 text-xs">
                            {language === "en" ? "Demo" : "ডেমো"}
                          </Badge>
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{t.payment.bkashDesc}</p>
                        {paymentMethod === "bkash" && (
                          <div className="mt-3 p-3 bg-pink-50 rounded border border-pink-200">
                            <p className="text-sm font-mono">{t.payment.bkashNumber}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Nagad - Demo */}
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="nagad" id="nagad" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="nagad" className="flex items-center gap-2 text-lg font-semibold cursor-pointer">
                          <Wallet className="h-5 w-5 text-orange-600" />
                          {t.payment.nagad}
                          <Badge variant="outline" className="ml-2 text-xs">
                            {language === "en" ? "Demo" : "ডেমো"}
                          </Badge>
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{t.payment.nagadDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Payment - Demo */}
                  <div className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <RadioGroupItem value="card" id="card" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="card" className="flex items-center gap-2 text-lg font-semibold cursor-pointer">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          {t.payment.card}
                          <Badge variant="outline" className="ml-2 text-xs">
                            {language === "en" ? "Demo" : "ডেমো"}
                          </Badge>
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{t.payment.cardDesc}</p>
                        {paymentMethod === "card" && (
                          <div className="mt-3 space-y-3">
                            <Input placeholder={t.payment.cardNumber} />
                            <div className="grid grid-cols-2 gap-3">
                              <Input placeholder={t.payment.cardExpiry} />
                              <Input placeholder={t.payment.cardCVV} type="password" maxLength={3} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </RadioGroup>

                <Alert className="mt-6 bg-blue-50 border-blue-200">
                  <Info className="h-5 w-5 text-blue-600" />
                  <AlertDescription className="text-blue-900">
                    {t.payment.demoNotice}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

          </div>

          {/* Right Column - Order Summary */}
          <div>
            <Card className="bg-white border-amber-200 sticky top-6">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" />
                  {t.cart.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Currency Selector */}
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Label className="text-sm mb-2 block">{t.currencyLabel}</Label>
                  <RadioGroup value={currency} onValueChange={(val: string) => setCurrency(val as "BDT" | "USD")} className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="BDT" id="bdt" />
                      <Label htmlFor="bdt" className="cursor-pointer">৳ BDT</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="USD" id="usd" />
                      <Label htmlFor="usd" className="cursor-pointer">$ USD</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600">{item.artisan}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-600">{t.review.quantity}: {item.quantity}</span>
                          <span className="font-bold text-amber-900">
                            {currency === "BDT" ? `৳${item.priceBDT * item.quantity}` : `$${(item.priceUSD * item.quantity).toFixed(2)}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.cart.subtotal}</span>
                    <span className="font-semibold">
                      {currency === "BDT" ? `৳${subtotal}` : `$${subtotal.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.cart.shipping}</span>
                    <span className="font-semibold text-green-600">{t.cart.freeShipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t.cart.tax}</span>
                    <span className="font-semibold">
                      {currency === "BDT" ? `৳${tax}` : `$${tax.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-amber-900">{t.cart.total}</span>
                    <span className="text-amber-900">
                      {currency === "BDT" ? `৳${total}` : `$${total.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <Button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                  size="lg"
                >
                  <Package className="h-5 w-5 mr-2" />
                  {t.placeOrder}
                </Button>
                
                <Button variant="outline" className="w-full" size="lg">
                  {t.backToCart}
                </Button>

              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
