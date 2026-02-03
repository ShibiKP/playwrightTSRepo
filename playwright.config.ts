import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout:4*10000,
  reporter:'html',
  expect:{
    timeout:5*10000,
    
  },
  use:{
    headless:true,
    browserName:'chromium',
  }
  
 
});
