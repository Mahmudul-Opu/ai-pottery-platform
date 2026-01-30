'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Palette, Sparkles, Download, RotateCcw } from 'lucide-react';

interface DesignSettings {
  shape: 'vase' | 'bowl' | 'pot' | 'plate' | 'pitcher';
  color: string;
  pattern: 'solid' | 'floral' | 'geometric' | 'traditional' | 'abstract';
  size: number;
  glaze: 'matte' | 'glossy' | 'crackle' | 'metallic';
}

const SHAPE_OPTIONS = [
  { value: 'vase', label: 'Vase', icon: '🏺' },
  { value: 'bowl', label: 'Bowl', icon: '🥣' },
  { value: 'pot', label: 'Pot', icon: '🫙' },
  { value: 'plate', label: 'Plate', icon: '🍽️' },
  { value: 'pitcher', label: 'Pitcher', icon: '🏺' },
];

const COLOR_OPTIONS = [
  { value: '#8B4513', label: 'Terracotta', hex: '#8B4513' },
  { value: '#CD853F', label: 'Clay', hex: '#CD853F' },
  { value: '#F5DEB3', label: 'Wheat', hex: '#F5DEB3' },
  { value: '#4A5568', label: 'Charcoal', hex: '#4A5568' },
  { value: '#2C5F2D', label: 'Forest', hex: '#2C5F2D' },
  { value: '#1E3A8A', label: 'Indigo', hex: '#1E3A8A' },
  { value: '#FFFFFF', label: 'White', hex: '#FFFFFF' },
];

const PATTERN_OPTIONS = [
  { value: 'solid', label: 'Solid' },
  { value: 'floral', label: 'Floral' },
  { value: 'geometric', label: 'Geometric' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'abstract', label: 'Abstract' },
];

const GLAZE_OPTIONS = [
  { value: 'matte', label: 'Matte' },
  { value: 'glossy', label: 'Glossy' },
  { value: 'crackle', label: 'Crackle' },
  { value: 'metallic', label: 'Metallic' },
];

export function PotteryDesigner() {
  const [design, setDesign] = useState<DesignSettings>({
    shape: 'vase',
    color: '#8B4513',
    pattern: 'solid',
    size: 50,
    glaze: 'matte',
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const updateDesign = (updates: Partial<DesignSettings>) => {
    setDesign(prev => ({ ...prev, ...updates }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  const handleReset = () => {
    setDesign({
      shape: 'vase',
      color: '#8B4513',
      pattern: 'solid',
      size: 50,
      glaze: 'matte',
    });
  };

  const handleDownload = () => {
    // In a real app, this would download the generated design
    alert('Design download feature - Would download your custom pottery design as PNG/SVG');
  };

  // Generate pottery visualization based on settings
  const getPotteryVisualization = () => {
    const shapeIcon = SHAPE_OPTIONS.find(s => s.value === design.shape)?.icon || '🏺';
    
    return (
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* White background */}
        <div className="absolute inset-0 bg-white rounded-lg" />
        
        {/* Pottery visualization */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop"
            alt="Pottery Design"
            className="w-80 h-80 object-contain transition-all duration-500"
            style={{
              transform: `scale(${design.size / 50})`,
              filter: `
                drop-shadow(0 20px 40px rgba(0,0,0,0.2))
                ${design.glaze === 'glossy' ? 'brightness(1.1) contrast(1.1)' : ''}
                ${design.glaze === 'metallic' ? 'saturate(1.3) brightness(1.05)' : ''}
                ${design.glaze === 'crackle' ? 'contrast(1.15)' : ''}
                hue-rotate(${design.color === '#8B4513' ? '0deg' : design.color === '#CD853F' ? '10deg' : design.color === '#F5DEB3' ? '20deg' : design.color === '#4A5568' ? '180deg' : design.color === '#2C5F2D' ? '90deg' : design.color === '#1E3A8A' ? '220deg' : '0deg'})
              `,
            }}
          />
          
          {/* Pattern overlay indicator */}
          {design.pattern !== 'solid' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-4xl opacity-30">
                {design.pattern === 'floral' && '🌸'}
                {design.pattern === 'geometric' && '◆'}
                {design.pattern === 'traditional' && '☸'}
                {design.pattern === 'abstract' && '~'}
              </div>
            </div>
          )}
          
          {/* Color indicator */}
          <div 
            className="w-32 h-8 rounded-full border-4 border-white shadow-lg"
            style={{ backgroundColor: design.color }}
          />
          
          {/* Design details */}
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <p className="font-semibold">
              {SHAPE_OPTIONS.find(s => s.value === design.shape)?.label} Design
            </p>
            <p className="text-xs">
              {PATTERN_OPTIONS.find(p => p.value === design.pattern)?.label} Pattern • {' '}
              {GLAZE_OPTIONS.find(g => g.value === design.glaze)?.label} Finish
            </p>
          </div>
        </div>
        
        {/* Generating overlay */}
        {isGenerating && (
          <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-3">
              <Sparkles className="w-12 h-12 text-orange-500 animate-pulse" />
              <p className="text-sm font-medium">Generating your design...</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Design Preview */}
      <Card className="lg:sticky lg:top-24 h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Live Preview
          </CardTitle>
          <CardDescription>
            Your custom pottery design updates in real-time
          </CardDescription>
        </CardHeader>
        <CardContent>
          {getPotteryVisualization()}
          
          <div className="flex gap-3 mt-6">
            <Button onClick={handleGenerate} className="flex-1" disabled={isGenerating}>
              <Sparkles className="w-4 h-4 mr-2" />
              {isGenerating ? 'Generating...' : 'Regenerate AI Design'}
            </Button>
            <Button onClick={handleDownload} variant="outline">
              <Download className="w-4 h-4" />
            </Button>
            <Button onClick={handleReset} variant="outline">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Design Controls */}
      <div className="space-y-6">
        {/* Shape Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Shape</CardTitle>
            <CardDescription>Choose your pottery form</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3">
              {SHAPE_OPTIONS.map((shape) => (
                <button
                  key={shape.value}
                  onClick={() => updateDesign({ shape: shape.value as any })}
                  className={`
                    flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all
                    ${design.shape === shape.value
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950'
                      : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
                    }
                  `}
                >
                  <span className="text-4xl">{shape.icon}</span>
                  <span className="text-xs font-medium text-center">{shape.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Color Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Color
            </CardTitle>
            <CardDescription>Select base clay color</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-3">
              {COLOR_OPTIONS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateDesign({ color: color.value })}
                  className={`
                    w-12 h-12 rounded-full border-4 transition-all
                    ${design.color === color.value
                      ? 'border-orange-500 scale-110'
                      : 'border-slate-200 dark:border-slate-700 hover:scale-105'
                    }
                  `}
                  style={{ backgroundColor: color.hex }}
                  title={color.label}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pattern Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Pattern</CardTitle>
            <CardDescription>Decorative pattern style</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3">
              {PATTERN_OPTIONS.map((pattern) => (
                <button
                  key={pattern.value}
                  onClick={() => updateDesign({ pattern: pattern.value as any })}
                  className={`
                    p-4 rounded-lg border-2 text-sm font-medium transition-all
                    ${design.pattern === pattern.value
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950'
                      : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
                    }
                  `}
                >
                  {pattern.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Glaze Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Glaze Finish</CardTitle>
            <CardDescription>Surface treatment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {GLAZE_OPTIONS.map((glaze) => (
                <button
                  key={glaze.value}
                  onClick={() => updateDesign({ glaze: glaze.value as any })}
                  className={`
                    p-4 rounded-lg border-2 text-sm font-medium transition-all
                    ${design.glaze === glaze.value
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950'
                      : 'border-slate-200 dark:border-slate-700 hover:border-orange-300'
                    }
                  `}
                >
                  {glaze.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Size Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Size</CardTitle>
            <CardDescription>Adjust pottery dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider
                value={[design.size]}
                onValueChange={(value) => updateDesign({ size: value[0] })}
                min={30}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Small</span>
                <span className="font-semibold">{design.size}%</span>
                <span>Large</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Enhancement Info */}
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">
                  AI-Enhanced Design
                </h4>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Our AI analyzes traditional Bangladeshi pottery patterns and suggests culturally
                  authentic designs that honor local artisan heritage while exploring creative possibilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
