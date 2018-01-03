describe('Password View', function() {
  it('should check strength', function() {
    browser.get('http://localhost:3000/angular-testing/');

    // Find the element with ng-model="password" and type "a" into it
    element(by.model('password')).sendKeys('a');

    // Find the first (and only) button on the page and click it
    element(by.css('button')).click();

    // Expect strenght to set "weak"
    expect(element.all(by.css('#strenght')).getText()).toEqual(['weak']);
  });
});
