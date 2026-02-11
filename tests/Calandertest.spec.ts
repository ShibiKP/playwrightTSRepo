import {test,expect} from '@playwright/test'

test('calander name test',async({browser,page})=>{

    const monthnumber="16"
    const year="2027"
    const date="27"
    
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator('.react-date-picker.react-date-picker').click()
   // await page.locator('button:has-text("'+date+'")').nth(1).click()

   await page.
   locator(".react-calendar__tile.react-calendar__month-view__days__day:not([class*='--neighboringMonth'])").nth(Number(date)-1).click()
})