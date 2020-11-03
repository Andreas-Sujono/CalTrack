# CalTrack Mobile App Frontend
Built using react native framework

----
## Dependencies
* redux & react-redux & redux thunk → **As state management**
* axios → **to Make http requests to the API**
* react-native-element → **UI kit**
* React-native-paper → **UI kit2**
* React-native-vector-icon → **Icon kit**
* React-navigation & react-navigation-stack & @react-navigation/bottom-tabs → **handle navigation between page
* styled-components
* react-native-cache-store


----
## File Structure
```javascript
.
|__App.js                   //the root component of the app, It contains the first stack navigation
|__assets                   //houses static files (e.g images) used in the application.
|__src
|  |__actions                   
|  |  |__auth
|  |  |  |__general.action.js
|  |  |  |__core.action.js
|  |__api
|  |  |__general.contant.js
|  |__components
|  |  |__Login
|  |     |__index.js
|  |     |__Login.js
|  |     |__Login.style.js
|  |__constants   
|  |  |__auth
|  |  |  |__general.constant.js
|  |__reducers
|  |  |__auth
|  |  |  |__index.js
|  |  |  |__reducer.js
|  |__selectors 
|  |  |__auth
|  |  |  |__general.selector.js
|  |__store.js
``` 
**Notes**
* every Component must inside its own folder that contain: **index.js, <Component>.js, <Component>.style.js**

----
## Initialize App
1. Run ``` yarn install``` to install all the dependecies needed
2. Run the scripts below to start the app

----
## Scripts

* To start the app using expo, run:
```
yarn start
```
* To start the app using android emulator, run:
```
yarn run android
```
* To start the app using IOS emulator (must run in mac), run:
```
yarn run ios
```
* To start the app by web, run:
```
yarn run web
```
* To deploy the app in **expo**:
```
yarn run publish
```
* To test the app using jest, run:
```
yarn test
```
* To eject the app (will producing ios and android native code), run:
```
yarn run eject
```
* To run eslint to show the issue in our code styling:
```
yarn run lint
```
* To run prettier and fix the styling of the code
```
yarn run lint:fix
```

----
## Deployment
##### in development:
<soon>

----
## Development Notes

If you want to continue to  develop this app, follow these rules: 

* Use ```yarn``` instead of npm, there is an issue in dependencies if install them using npm
* For form, no need to store the state inside reducer, local state is enough
* If calling API, remember to wrap it using ```try{...} catch(err){...}``` to prevent app from crashing if server not working properly
* to open the app using emulator, open the emulator first. In android, launch android emulator using android studio. In IOS, launch IOS emulator using Xcode. Then run the respective script. (CMD+M to open emulator window in android, CMD+R to open emulator window in IOS)
* If there's an error regarding the native component. ex: `Invariant Violation: requireNativeComponent: "RNCPicker" was not found in the UIManager.` try to delete cache of the app.

----
## Naming Convention
- Folder and Filing name:
      	- **component folder, component file, component style:** Must capitalized, ex: *Header, Header.js, Header.style.js*   
      	- every component or feature folder must have **index.js**
      	- **folder name:** *components, actions, reducers, selectors*
	- **file name:** *general.action.js, reducer.js, general.selector.js, constant.js*
      
- Code name:
	    - component name must be capitalized, *ex: const **Header** = () => {.....}*
	    - name of constant must all in capital, ex: SET, LOGIN_SUCCESS

----
## Developers
* [Andreas Sujono](http://www.github.com/andreas-sujono)
