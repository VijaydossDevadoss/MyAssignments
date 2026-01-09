import {test, expect} from '@playwright/test'

test("PVR cinemas ticket booking", async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")
    await page.locator("//h6[text()='Chennai']").click()
    await page.locator("//span[text()='Cinema']").click()
    await page.locator("//span[text()='Select Cinema']").click()
    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()
    await page.locator("//span[contains(text(),'Today')]").click()
    await page.locator("(//span[text()='SIRAI'])[2]").click()
    await page.locator("//span[contains(text(),'03:20 PM')]").click()
    await page.getByLabel("Submit").click()
    await page.locator("//button[text()='Accept']").click()
    await page.locator("//span[@id='CL.CLUB|I:9']").click()
    await expect(page.locator("//div[@class='seat-info']")).toBeVisible()
    await expect(page.locator("//div[@class='grand-amount']")).toBeVisible()
    const title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle('PVR Cinemas')
    await page.locator("//button[text()='Proceed']").click()

})