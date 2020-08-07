import {Selector} from 'testcafe';
fixture('testcafe demo')
    		.page('https://www.google.com')
test('my-first-test', async t => {
    		await t
  		.typeText('input[name="q"]', 'testcafe')
 		.click(Selector('#tsf').find('[name="q"]'))
 		.pressKey('enter')
});
