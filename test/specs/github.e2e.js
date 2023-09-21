import { browser, expect } from '@wdio/globals'
import { Key } from 'webdriverio'

describe('Github registration check', () => {
    it('should register with valid credentials', async () => {
        await browser.url('https://github.com/');
        const elemSignUp = $(".HeaderMenu-link--sign-up");
        await elemSignUp.click();
        await browser.pause(5000);
        const elemTitle = $("span[data-target='typing-effect.content']");
        await expect(elemTitle).toHaveText("Welcome to GitHub!\nLet’s begin the adventure");
        const signUpContinueBtn = $(".signup-continue-button");
        const inputEMail = await $("#email");
        await inputEMail.setValue("134email@gmail.com");
        await browser.pause(3000);
        await signUpContinueBtn.click();
        const inputPwd = await $("#password");
        await inputPwd.setValue("1234qwerty4345");
        await browser.pause(5000);
        await $("[data-optimizely-event='click.signup_continue.password']").click();
        const inputUsername = await $("#login");
        await inputUsername.setValue("NicknameSuper");
        await browser.pause(3000);
        await $("[data-optimizely-event='click.signup_continue.username']").click();
        const inputOpt = await $("#opt_in");
        await inputOpt.setValue("y");
        await browser.pause(3000);
        await $("[data-optimizely-event='click.signup_continue.opt-in']").click();
        await browser.pause(5000);
        const elemVerify = $("div.signup-text-prompt");
        await expect(elemVerify).toHaveText("Verify your account");
    });
});

describe('Github trial plan check', () => {
    it('check git trial plan', async () => {
        await browser.url('https://github.com/');
        await browser.scroll(0, 10800);
        await browser.pause(3000);
        const elemTitle = $("h2[class='color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3']");
        await expect(elemTitle).toHaveText("The place for anyone from anywhere to build anything");
        const elemStartTrial = $(".btn-muted-mktg");
        await elemStartTrial.isDisplayed();
        await elemStartTrial.click();
        await browser.pause(3000);
        const elemPick = $("h1.d-none");
        await expect(elemPick).toHaveText("Pick your trial plan");
        const elemEnterptiseCloud = $("div.pricing-recommended-plan");
        await elemEnterptiseCloud.click();
        await browser.pause(3000);
    });
});

describe('Guthub subscribtion check', () => {
    it('subscribe to github', async () => {
        await browser.url('https://github.com/');
        await browser.scroll(0, 15000);
        await browser.pause(3000);
        const elemSubscribeBtn = $("a[data-analytics-event='{\"category\":\"Subscribe\",\"action\":\"click to Subscribe\",\"label\":\"ref_cta:Subscribe;\"}']");
        await elemSubscribeBtn.isExisting();
        await elemSubscribeBtn.isClickable();
        await elemSubscribeBtn.click();
        await browser.pause(3000);
        const elemTitleSubscribe = $("#hero-section-brand-heading");
        await expect(elemTitleSubscribe).toHaveText("Subscribe to our developer newsletter");
        await browser.scroll(0, 600);
        const inputEmail = $("input[id=':R8d7m:']");
        await inputEmail.setValue("qwert@gmail.com");
        const elemSelectCountry = $("select#country");
        await elemSelectCountry.selectByAttribute('value', 'UA');
        const elemCheckboxAgree = $("input#gated-agree-marketingEmailOptin1");
        await elemCheckboxAgree.click();
        const elemSubscribeFormBtn = $("button[class='Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw mt-4']");
        await elemSubscribeFormBtn.isClickable();
        await elemSubscribeFormBtn.click();
        await browser.pause(3000);
        const elemSubscribeConfirmTitle = $("h1#hero-section-brand-heading");
        await expect(elemSubscribeConfirmTitle).toHaveText("Thanks for subscribing!");
    });
});

describe('Github search check', () => {
    it('check search repos', async () => {
        await browser.url('https://github.com/');
        await browser.pause(3000);
        const elemSearch = $("button[data-target=\'qbsearch-input.inputButton\']");
        await elemSearch.isClickable();
        await elemSearch.click();
        await browser.pause(3000);
        const inputSearch = $("#query-builder-test");
        await inputSearch.setValue("act");
        await browser.keys(Key.Enter);
        await browser.pause(3000);
        const elemSearchResult = $("a[href='/nektos/act']");
        await expect(elemSearchResult).toBeExisting();
    });
});

describe('Github check pricing', () => {
    it('check pricing', async () => {
        await browser.url('https://github.com/');
        await browser.pause(3000);
        const elemPricing = $("a[href='/pricing']");
        await elemPricing.click();
        await browser.pause(3000);
        const elemPricingTitle = $("h1.h2-mktg");
        await expect(elemPricingTitle).toHaveText("Get the complete developer platform.");
        await browser.scroll(0, 2000);
        await browser.pause(3000);
        const elemFeaturesLink = $("a[href='#compare-features']");
        await elemFeaturesLink.click();
        await browser.pause(3000);
        const elemHeaderCompareFeatures = $("h1.h1");
        await expect(elemHeaderCompareFeatures).toHaveText("Compare features");
    });
});

