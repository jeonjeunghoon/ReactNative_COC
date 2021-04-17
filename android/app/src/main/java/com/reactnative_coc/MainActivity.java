package com.reactnative_coc;

import android.os.Bundle; // 스플래시
import com.facebook.react.ReactActivity;

// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; // 스플래시
// react-native-splash-screen < 0.3.1 
//import com.cboy.rn.splashscreen.SplashScreen; // 낮은 버전임

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    SplashScreen.show(this); // SplashScreen 설정
    return "ReactNative_COC";
  }
}
