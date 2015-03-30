Demo code for showing how to use our [ESHint plugin](https://github.com/rclanan/eslint-plugin-fasec).


Prerequisites
-------------

Make sure the following are installed:

1. NodeJs
1. npm
1. grunt (install globally with npm: `sudo npm install -g grunt-cli`)


How to Use
----------

After cloning this repo, run `npm install` to install dependencies.

Then to see the ESHint plugin in action, run `grunt fasec` from within the root folder. You should see a handful
of security-related JavaScript errors, including some issues with jQuery.


Remediation
-----------

To fix the errors, do something like this...

1. In app.js, comment out the two invalid Regex lines
1. Also in app.js, comment out the password check code

Obviously, you'd need more of a real fix in a real project. But commenting out the offending code will demonstrate
the fasec plugin.

Also, we're using a .retireignore file to avoid reporting vulnerabilities on jquery. If you want to NOT avoid scanning
those files (i.e. you indeed do want to scan jquery for vulnerable code), you can comment them in the .retireignore
file. Or, just delete the .retireignore file.


