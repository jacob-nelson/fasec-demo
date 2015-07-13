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


Contributors
------------

[![Fusion Alliance Logo](https://avatars0.githubusercontent.com/u/1154219?v=3&u=e1451e6a65343331369d53a2b6e0c7046c2cc810&s=60)](https://github.com/FusionAlliance)
**fasec-demo** is a product of Fusion Alliance &copy; 2015.

+ [Ray Clannan](https://github.com/rclanan) (Author)


LICENSE
-------

The MIT License (MIT)

Copyright (c) 2015 [Fusion Alliance](https://www.fusionalliance.com/?utm_source=GitHub&utm_medium=Website&utm_campaign=OpenSource)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
