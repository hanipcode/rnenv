# RNENV

## React Native JS-only environment variable

## Credits

This project is a fork of
[cross-env](https://github.com/kentcdodds/cross-env)
and
[envfile](https://github.com/bevry/envfile)

### Goals

The goals of this project is to create an environment variable library in react native that can
be installed as dev dependency. and Javascript only. the environment variable can not be used in
the native realm of the project.

### How to init env folder

you can init yourself by adding this structure in the root of your app

```
env
- - development.env
- - production.env
- - index.js
```

you can add as many as `env_name`.env that you like, but you should also add the `index.js` file.

or if you use yarn you can run
`yarn run rnenv-init`

or add this command in your `scripts` section in `package.json`:
`"rnenv-init": "rnenv-init"`;
then run `npm run rnenv-init`;

### ENV Format

after you init the env folder you can write in your `env_name`.env like a standard envfile for
example in development.env:

```
BASE_URL=localhost:8000
```

then in production.env:

```
BASE_URL=htttp://production.example.com
```

### How to parse the env file

The idea is like the one used in `cross-env`. so you run `rnenv ENV=envname` then followed
by the command.
for example if you wan to run android with dev env and then build using production env you would
add those in your `scripts` in `package.json`:

```
    "android:prod": "rnenv ENV=production cd ./android && ./gradlew assembleRelease",
    "android:dev": "rnenv ENV=development react-native run-android",
    "start:dev": "rnenv ENV=development npm run start",
```

each time rnenv run, it will change the content of index.js in your env folder according
to the env you selected

### How to use the env file

finally in your file you can import the `env/index.js` for example

```javascript
import ENV from "./env";

function HelloEnv() {
  return (
    <View>
      <Text>Current api URL = {ENV.BASE_URL}</Text>
    </View>
  );
}
```
