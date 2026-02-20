import {test,expect,request} from '@playwright/test'
let token:any;
const payload={userEmail:"dummytestshibi@gmail.com",userPassword:"Testtest11"}
test.beforeAll(async()=>{

    const req =await request.newContext()
   const loginresponse= req.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {data:payload}
    )

    expect((await loginresponse).ok()).toBeTruthy()
    const loginresponseJson=(await loginresponse).json()
    token=(await loginresponseJson).token;
    console.log(token)
})

test('First testcase',async({browser,page})=>{

   // await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    
    // await emailtextbox.fill('dummytestshibi@gmail.com')
    // await passwordtextbox.fill('Testtest11')
    // await loginbutton.click()
    // await page.waitForLoadState('networkidle')

    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    },token)

    const emailtextbox= page.locator('#userEmail')
    const passwordtextbox=  page.locator('#userPassword')
    const loginbutton= page.locator('#login')
    

    await page.goto('https://rahulshettyacademy.com/client/')
    const Allproduct=page.locator('.card-body b')
    await page.pause()
    const allText=await Allproduct.allInnerTexts()
    
    console.log(allText)
})