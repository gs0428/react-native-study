# React Native 공부

[React Native 공식 홈페이지](https://reactnative.dev/, "React Native") 보며 공부

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

- 정적인 이미지(Static Image)를 넣기 위해서는 require를 써야한다. 이때 require 안에 변수를 넣지 못한다.

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

- uri를 network 이미지 혹은 encoded된 이미지를 가져올 수도 있다. 이 또한 크기를 지정해주어야한다.

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
