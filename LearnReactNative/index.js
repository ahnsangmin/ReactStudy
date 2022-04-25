/**
 * @format
 * 코드 스타일을 자동으로 정리해주는 Prettier라는 도구와 관련이 있음
 * Prettier를 사용할 때 --require-pragma라는 명령어 옵션을 설정하면 해당 키워드가 존재하는 파일만 처리
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
/* App 이라는 컴포넌트를 불러와서 AppRegistry.registerComponent라는 함수를 사용해 네이티브 시스템에 해당 컴포넌트를 등록 */
