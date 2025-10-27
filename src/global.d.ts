declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// Flutter WebView JavaScriptChannel 타입 정의
interface Window {
  FlutterStorage?: {
    postMessage: (message: string) => void;
  };
}
