describe('gaming', () => {
    beforeEach( async() => {
        await browser.maximizeWindow();
        await browser.url('https://www.europebet.com/ka');

    });
    it('login', async() => {
        //1 - login 
        const login_Button = await $('#login-button');
        await login_Button.click();
        await browser.pause(3000);

        const usernameField = await $("/html/body/app-root/eb-nav/auth-modals/eb-modal/div/div/div/div/div/login-form/div/form/eb-input[1]/div/input");
        await usernameField.setValue('stresstestaccount100');
        await browser.pause(1500)
        const passwordField = await $("/html/body/app-root/eb-nav/auth-modals/eb-modal/div/div/div/div/div/login-form/div/form/eb-input[2]/div/input");
        await passwordField.setValue('testtest12345');

        const login = await $('/html/body/app-root/eb-nav/auth-modals/eb-modal/div/div/div/div/div/login-form/div/form/div[2]/eb-button/button');
        await login.click();
        const cookies = await $("//*[@aria-label='ვეთანხმები']");
        if( cookies.isDisplayed){
            await cookies.click();
        }
        
        // 2 - open backgammon
        const backgammon = await $('/html/body/app-root/app-home/eb-section[4]/div/games-list/div/div[1]/table-game-card/div/div');
        await backgammon.click();
        await browser.pause(5500);
        await browser.switchWindow('Backgammon');
       
       
       //3 - switch to iframes
        const iframe = await browser.findElement('css selector','#appFrame'); 
        await browser.switchToFrame(iframe);
        var iframe2 = await $("//*[@scrolling='no']");
        await browser.switchToFrame(iframe2);
        
        //4 - create game
        const createGameButton = await $("/html/body/app-root/app-view-desktop/div/view-sidepanel/div[2]/view-creategamepanel/div[2]/div[2]");
        await createGameButton.click();
        await browser.pause(10000);
    });
    

});