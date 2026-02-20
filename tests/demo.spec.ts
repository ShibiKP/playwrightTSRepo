
import {test,expect} from '@playwright/test'

test('', async({page,browser})=>{
   const browsertype=await browser.newContext()
   const newpage= await browsertype.newPage()
  await newpage.goto('https://www.google.com/')
})