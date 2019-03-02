#!/bin/bash
      # Helper script for Gradle to call node on macOS in case it is not found
      export PATH=$PATH:/Users/huinichen/.nvm/versions/node/v8.15.0/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/huinichen/Desktop/Cool/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/huinichen/Desktop/Cool/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/Users/huinichen/.nvm/versions/node/v8.15.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/huinichen/Library/Python/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/Users/huinichen/Downloads:/Users/huinichen/Downloads
      node $@
    