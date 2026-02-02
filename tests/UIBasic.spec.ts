import {test,expect} from '@playwright/test' 

//test('test class basic',function(){})
test('test case',async ({browser,page})=>
{

    await page.goto('https://courses.rahulshettyacademy.com/l/products?sortKey=recommended&sortDirection=asc&page=1')
})

