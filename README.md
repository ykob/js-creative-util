# js-creative-util

Private JavaScript utility functions for Creative Coding created by @ykob

## Install

### npm

```
npm i @ykob/js-creative-util
```

### yarn

```
yarn add @ykob/js-creative-util
```

## Usage

WIP

### Model

```
type Vector3 = [number, number, number]
```

### Functions / Class

#### `attract(vSelf: Vector3, mSelf: number, vTarget: Vector3, mTarget: number, distMin: number, distMax: number): Vector3`

#### `drag(acceleration: Vector3, c: number): Vector3`

#### `friction(acceleration: Vector3, c: number): Vector3`

#### `Hook(k: number, restLength: number)`

```
const hook = new Hook(0.1, 50)
```
