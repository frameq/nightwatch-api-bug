import { Given, Then } from 'cucumber';
import { client } from 'nightwatch-api';

const google = client.page.google()

Given(/^I open Google`s search page$/, async () => {
  google.navigate()
  return google.submit()
});