import {test,expect} from '@playwright/test' 

//test('test class basic',function(){})
test('test case',async ({browser,page})=>
{
    const emailtextbox= page.locator('#userEmail')
    const passwordtextbox=  page.locator('#userPassword')
    const loginbutton= page.locator('#login')
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    
    await emailtextbox.fill('dummytestshibi@gmail.com')
    await passwordtextbox.fill('Testtest11')
    await loginbutton.click()
    await page.waitForLoadState('networkidle')

    const Allproduct=page.locator('.card-body b')
    const allText=await Allproduct.allInnerTexts()
    console.log(allText)

    for(let i=0;i<await Allproduct.count();i++)
    {
        const productLocator=await Allproduct.nth(i)

        const productname:string=await productLocator.innerText()
        console.log(Allproduct.nth(0).textContent())
        if(productname.includes('ADIDAS')){
            productLocator.click()
        }
    }
    
    await page.locator("[routerlink*='cart']").click();
    await page.locator("button",{hasText:'Checkout'}).waitFor({state:'visible',timeout:10000})
    await page.locator("button",{hasText:'Checkout'}).click()
    const Country=page.locator("[placeholder='Select Country']")
    
    await Country.waitFor({state:'visible',timeout:10000})
    await Country.pressSequentially('ind')
   
    

   

})

