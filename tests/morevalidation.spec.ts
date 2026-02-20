import {test,expect} from '@playwright/test'
import { count } from 'node:console'

test('test all partices method',async({page,browser})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
    page.on('dialog',d=>{
        if(d.message().includes('hhdhdhd your knowledge')){
            d.accept();
        }
        else{
            d.dismiss();
        }

    })
    await page.pause()
    await page.locator('#alertbtn').click()
    await page.locator('#mousehover').hover();

    const mouseloactor= page.locator('div.mouse-hover-content a');
    const count=await mouseloactor.count()

    await Promise.all(
        Array.from({length:count},(_,i)=>mouseloactor.nth(i).textContent().then(text=>console.log(text)))
    )
    const frameloctor=await page.frameLocator('#courses-iframe')
    
    await frameloctor.locator('[href*="lifetime-access"]:visible').click();

})