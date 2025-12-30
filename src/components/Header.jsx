import React from 'react';

import { ChefHat } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-orange-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">RecipeAI</h1>
            <p className="text-sm text-gray-500">Powered by Spoonacular</p>
          </div>
        </div>
      </div>
    </header>
  );
}
