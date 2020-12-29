# lizard-linter

<!-- [![Build Status Circle Ci Linux](https://img.shields.io/circleci/build/gh/FlorianBuhl/lizard-linter.svg?style=plastic)](https://app.circleci.com/pipelines/github/FlorianBuhl/lizard-linter)
[![Build Status Travis Ci OSX](https://img.shields.io/travis/com/FlorianBuhl/lizard-linter?style=plastic)](https://travis-ci.com/FlorianBuhl/lizard-linter)
[![Dependencies](https://img.shields.io/david/FlorianBuhl/lizard-linter?style=plastic)](https://david-dm.org/FlorianBuhl/lizard-linter) -->

This extension executes lizard cyclomatic complexity tooling in [Visual Studio Code (VSC)](https://code.visualstudio.com/) editor
It uses [lizard](https://github.com/terryyin/lizard) tool to show the cyclomatic complexity in VSC.

The lizard linter analyzes functions for
- cyclomatic complexity.
- the number of number of parameters
- the line number of  function without comments
- the token number

The following languages are supported:
c, cpp, c#, GDScript, GoLang, Java, JavaScript, Lua, ObjectiveC, PHP, Python, Ruby, Rust, Scala, SWIFT.

The extension provides tasks to execute the lizard command line tool.

 - lizardReportOnOpenedFile: Executes the lizard tool on the current opened file
 - lizardLintOnOpenedFile: Executes lizard tool on the current opened file and shows only in case there are warnings (Value is above configured threshold).

 The extension provides thresholds in case a treshold is exceeded then the "lint" tasks will report the warnings and also mark them in the "Problem" console.

## Cyclomatic Complexity

The cyclomatic complexity number is basically the number of decisions in the source code.
The higher the number the more complex and the more tests you need to verify the function.
E.g. a cyclomatic complexity of 3 would require at least 3 tests to verify the function.

The linter shall help you to keep your functions slim and less complex and easy to test.

## Licence

lizard-linter is released under the MIT license. For details please check the [LICENSE.md](LICENSE.md) file.