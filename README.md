# React Native 공부

[React Native 공식 홈페이지](https://reactnative.dev/, 'React Native') 보며 공부

## 목차

1. [UI](#ui)
2. [Interaction](#interaction)

## UI

- React Native에서는 스타일을 정의할 때 기기의 픽셀 밀도에 따라 자동으로 조절되기 때문에 px, rem, em과 같은 단위를 붙이지 않는다.
- flex 사용 시 부모에 flex가 없으면 자식 요소에 flex를 사용해도 적용되지 않는다.

### 적용 ❌

```javascript
<View>
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
```

### 적용 ⭕️

```javascript
<View style={{flex: 1}}>
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
```

- 정적인 이미지(Static Image)를 넣기 위해서는 `require`를 써야한다. 이때 require 안에 변수를 넣지 못한다.

```javascript
// GOOD
<Image source={require('./my-icon.png')} />;

// BAD
const icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />;

// GOOD
const icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```

- `uri`를 이용하여 network 이미지 혹은 encoded된 이미지를 가져올 수도 있다. 이 또한 크기를 지정해주어야한다.

```javascript
// GOOD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />

// include at least width and height!
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>
```

- 이미지를 이용한 배경을 사용하고 싶다면 ImageBackground를 사용하면 된다.

```javascript
return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);
```

## Interaction

- Button 컴포넌트는 플랫폼(iOS, Android, Web)에 따라 다르게 보인다.
- 이때 `Touchable` 컴포넌트를 통해 일관되게 보이게 할 수 있다.
- 모든 Touchable 컴포넌트에 `onLongPress` 속성을 이용하여 길게 눌렀을 때의 동작을 설정할 수 있다.

```javascript
// 주로 사용되는 컴포넌트
<TouchableHighlight></TouchableHighlight>

// activeOpacity 속성을 이용하여 투명도를 조절할 수 있다.
// default 값은 0.2이다.
<TouchableOpacity></TouchableOpacity>

// 기능만 필요하고 피드백은 필요 없을 때 사용한다.
<TouchableWithoutFeedback></TouchableWithoutFeedback>
```

- `Pressable` 컴포넌트에서 `onPressIn`을 이용하여 눌렸을 때, `onPressOut`을 이용하여 땠을 때에 대해 동작을 설정할 수 있다.
- `hitSlop` 속성을 이용하여 onPressIn의 동작 시작의 유효 범위를 설정할 수 있다.
- `pressRetentionOffset` 속성을 이용하여 onPressOut의 동작 이전까지의 유효 범위를 설정할 수 있다.
  <img src="https://reactnative.dev/docs/assets/d_pressable_anatomy.svg"/>
  사진 출처 : [React Native Pressable](https://reactnative.dev/docs/pressable)

```javascript
<Pressable
  onPressIn={() => console.log('HitRect activated')}
  onPressOut={() => console.log('PressRect activated')}
  pressRetentionOffset={100}
  hitSlop={50}>
  <Text>Press Me</Text>
</Pressable>
```
