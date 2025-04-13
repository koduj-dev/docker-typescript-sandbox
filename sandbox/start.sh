#!/bin/bash

cd /app/sandbox

echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "🔧 Installing packages (npm install)..."
  npm install
else
  echo "✅ Dependencies are already installed."
fi

echo "🚀 Running Vite dev server..."
npx vite --host --port 3000