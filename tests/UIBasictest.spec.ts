import {test,expect} from '@playwright/test'
import { error } from 'node:console'
import { platform } from 'node:os'

test('failed testcase',async({browser,page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/',
        {
            waitUntil:'load',timeout:40000
        })
 const Username=page.locator('#username')
        const password= page.locator("input[name='password']")
        const errorpopup= page.locator("[style*='block']") 
        const loginbutton=page.locator('#signInBtn')
        const _password:string='Learning@830$3mK2'
 
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await Username.fill('rahulshettyacademy')
    //invalid password
    await password.fill(_password+'33')
    await loginbutton.click();

    await expect( errorpopup).toBeVisible
   console.log(await errorpopup.textContent())
    await expect(errorpopup).toContainText('Incorrect')


})

test('First testcase',async({browser,page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/',
        {
            waitUntil:'load',timeout:40000
        })
       const Username=page.locator('#username')
        const password= page.locator("input[name='password']")
        const errorpopup= page.locator("[style*='block']") 
        const loginbutton=page.locator('#signInBtn')
        const _password:string='Learning@830$3mK2'
    //Valid credrintical
    await Username.waitFor({state:'visible',timeout:10000})
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await Username.fill('rahulshettyacademy')
    //valid password
    await password.fill(_password)
    await loginbutton.waitFor({state:'visible',timeout:1000})
    await loginbutton.click();
    
   await page.locator('div.card-body h4.card-title').nth(0).waitFor({state:'visible',timeout:10000})

    console.log(await page.locator('div.card-body h4.card-title').count())
    const productpage=page.locator('div.card-body h4.card-title')

    const productcount=await productpage.count()
    for(let i=0;i<productcount;i++)
    {
       const name= await productpage.nth(i).textContent()
       
       if(name?.trim()=='Nokia Edge'){
        await productpage.nth(i).click()
        await page.goBack()
        await page.waitForLoadState('load')
        await productpage.nth(i).waitFor({state:'visible',timeout:15000})
       }
    }
})

test('select option drop down',async({page})=>
{
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/',
        {
            waitUntil:'load',timeout:40000
        })
       const Username=page.locator('#username')
        const password= page.locator("input[name='password']")
        const errorpopup= page.locator("[style*='block']") 
        const loginbutton=page.locator('#signInBtn')
        const _password:string='Learning@830$3mK2'
    //Valid credrintical
    await Username.waitFor({state:'visible',timeout:10000})

    const selectdrop=page.locator('select.form-control')
    await selectdrop.selectOption('consult')
    await selectdrop.selectOption({label:'Teacher'})
    await selectdrop.selectOption({index:0})
    
    
})
test('check box test case',async({page})=>{
    page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const checkboxList=page.locator('label.customradio')
    const usercheckbox=await checkboxList.last()
    await usercheckbox.click()
    await page.locator('#okayBtn').click()
    const termslocator=page.locator('#terms')
    await termslocator.click()
    await expect( termslocator).toBeChecked()
    await termslocator.uncheck()
    expect(await termslocator.isChecked()).toBeFalsy()

   await expect(page.locator("a[href*='documents-request']")).toHaveAttribute("class","blinkingText")
})

test.only('Window handle',async({browser})=>{

    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'
        ,{waitUntil:'load',timeout:700000}
    )
    const [newpage]=await Promise.all([
        context.waitForEvent('page',p=>p.url().includes('documents')),
        page.locator("a[href*='documents-request']").click()
    ])
    await newpage.locator('.im-para.red').waitFor({state:'visible',timeout:50000})
    const text= await newpage.locator('.im-para.red').textContent()
     const storedata:any=text?.split('@')[1].split(' ')[0]

     const textvalue=text?.split(' ').find(f=>f.includes('@'))
    
     await newpage.close()

     await page.locator("#username").fill(storedata)

     console.log(" -------- "+await page.locator("#username").inputValue())
     await page.pause()
     

})