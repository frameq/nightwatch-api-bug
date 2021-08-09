module.exports = {
    url: 'http://google.com',
    elements: {
        searchBar: {selector: 'input[name=q]'},
        submitButton: {selector: 'input[value="Google Search"]'}
    },
    commands: [{
        submit() {
            this.waitForElementVisible('@submitButton', 1000)
                .click('@submitButton')
                .api.pause(1000);

            return this; // Return page object for chaining
        }}]
};