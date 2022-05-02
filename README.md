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

It defined the below type for TypeScript.

```
type Vector3 = [number, number, number]
```

### Functions / Class

#### `attract(vSelf: Vector3, mSelf: number, vTarget: Vector3, mTarget: number, distMin: number, distMax: number): Vector3`

#### `drag(acceleration: Vector3, c: number): Vector3`

The drag function returns a number array of Vector3 for decelerating an object.  
This returned value is according to the magnitude of an object's acceleration.

#### `friction(acceleration: Vector3, c: number): Vector3`

The friction function returns a number array of Vector3 for decelerating an object.  
This returned value is constant.

#### `Hook(k: number, restLength: number)`

The Hook class calculates the acceleration with Hooke's law.

```
const hook = new Hook(0.1, 50)
```
