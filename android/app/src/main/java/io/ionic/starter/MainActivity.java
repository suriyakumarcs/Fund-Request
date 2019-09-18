package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.ideas2it.aes256.AES256;

import io.stewan.capacitor.media.MediaPlugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
       add(MediaPlugin.class);
      add(AES256.class);
    }});
  }
}
