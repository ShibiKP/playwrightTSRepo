import {test,expect} from '@playwright/test'

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
    

})