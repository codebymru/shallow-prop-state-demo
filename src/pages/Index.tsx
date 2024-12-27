import React from 'react';
import { ShallowComparisonExample } from '@/components/ShallowComparisonExample';

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Shallow Comparison Example</h1>
        <ShallowComparisonExample />
      </div>
    </div>
  );
};

export default Index;