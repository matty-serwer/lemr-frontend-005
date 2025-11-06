import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Healthcare-themed color palette configuration
const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Brand teal palette
        brand: {
          50: { value: '#e6f7f7' },
          100: { value: '#b3e6e6' },
          200: { value: '#80d4d4' },
          300: { value: '#4dc3c3' },
          400: { value: '#1ab1b1' },
          500: { value: '#009999' }, // Primary teal
          600: { value: '#007a7a' },
          700: { value: '#005c5c' },
          800: { value: '#003d3d' },
          900: { value: '#001f1f' },
        },
        // Medical blue palette
        'medical.blue': {
          50: { value: '#e6f2ff' },
          100: { value: '#b3d9ff' },
          200: { value: '#80c1ff' },
          300: { value: '#4da8ff' },
          400: { value: '#1a90ff' },
          500: { value: '#0077e6' }, // Primary medical blue
          600: { value: '#005fb3' },
          700: { value: '#004780' },
          800: { value: '#002f4d' },
          900: { value: '#00181a' },
        },
        // Medical green palette
        'medical.green': {
          50: { value: '#e8f5e9' },
          100: { value: '#c8e6c9' },
          200: { value: '#a5d6a7' },
          300: { value: '#81c784' },
          400: { value: '#66bb6a' },
          500: { value: '#4caf50' }, // Success green
          600: { value: '#43a047' },
          700: { value: '#388e3c' },
          800: { value: '#2e7d32' },
          900: { value: '#1b5e20' },
        },
      },
      fonts: {
        heading: {
          value: `'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
        },
        body: {
          value: `'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
        },
        mono: {
          value: `'Geist Mono', 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
        },
      },
    },
    semanticTokens: {
      colors: {
        'bg.canvas': {
          value: { _light: '{colors.gray.50}', _dark: '{colors.gray.900}' },
        },
        'bg.surface': {
          value: { _light: 'white', _dark: '{colors.gray.800}' },
        },
        primary: {
          value: { _light: '{colors.brand.500}', _dark: '{colors.brand.400}' },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: 'bg.canvas',
      color: 'fg.default',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
