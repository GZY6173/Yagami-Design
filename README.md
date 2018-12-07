
# react-native-yagami-design

## Getting started

`$ npm install react-native-yagami-design --save`

### Mostly automatic installation

`$ react-native link react-native-yagami-design`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-yagami-design` and add `RNYagamiDesign.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNYagamiDesign.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNYagamiDesignPackage;` to the imports at the top of the file
  - Add `new RNYagamiDesignPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-yagami-design'
  	project(':react-native-yagami-design').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-yagami-design/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-yagami-design')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNYagamiDesign.sln` in `node_modules/react-native-yagami-design/windows/RNYagamiDesign.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Yagami.Design.RNYagamiDesign;` to the usings at the top of the file
  - Add `new RNYagamiDesignPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNYagamiDesign from 'react-native-yagami-design';

// TODO: What to do with the module?
RNYagamiDesign;
```
  