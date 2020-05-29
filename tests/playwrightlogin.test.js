describe('saucectl demo test', () => {

    test('Login Test', async () => {

		console.log('Enter username');
		// await page.type('#user-name', process.env.SAUCEDEMO_USER);
        await page.type('#user-name', 'standard_user');

        console.log('Enter Password');
        // await page.type('#password', process.env.SAUCEDEMO_PASSWORD);
		 await page.type('#password', 'secret_sauce');

        console.log('Click Login Button Now');
        await page.waitFor(3000);

        const loginButton = await page.$('button[type="submit"]');
        if (loginButton) {
              await Promise.all([page.waitForNavigation(), loginButton.click()]);
        }

         console.log('Click on Hamburger icon');
         await page.waitFor(3000);
         const hamburgericon = await page.$('#menu_button_container > div > div:nth-child(3) > div > button');
         if (hamburgericon) {
                       await Promise.all([page.waitForNavigation(), hamburgericon.click()]);
                 }

        console.log('Click on Logout link');
        await page.waitFor(5000);
        const logoutlink = await page.$('#logout_sidebar_link');
         if (logoutlink) {
                               await Promise.all([page.waitForNavigation(), logoutlink.click()]);
                         }

        console.log('Login Test Complete');
               
	});

});
