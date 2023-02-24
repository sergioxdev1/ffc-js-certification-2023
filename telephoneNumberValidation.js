/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/
function telephoneCheck(str) {
  // Regular expression to match valid US phone numbers
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return regex.test(str);
}

telephoneCheck("555-555-5555");

/* EXPLANATION
The function uses a regular expression to match valid US phone numbers. The regular expression ^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$ consists of the following parts:

^ matches the start of the string
(1\s?)? matches an optional "1" followed by an optional whitespace character
(\(\d{3}\)|\d{3}) matches either a three-digit number surrounded by parentheses or a three-digit number without parentheses
[\s-]? matches an optional whitespace character or hyphen
\d{3} matches a three-digit number
[\s-]? matches an optional whitespace character or hyphen
\d{4} matches a four-digit number
$ matches the end of the string
The function uses the test() method of the regular expression object to check if the input string matches the regular expression. The test() method returns true if the input string matches the regular expression and false otherwise.
*/