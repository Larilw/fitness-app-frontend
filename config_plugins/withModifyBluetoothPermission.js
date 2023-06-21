"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withModifyBluetoothPermission = (config) => {
  return (0, config_plugins_1.withAndroidManifest)(config, (config) => {
    config.modResults = withModifyBluetoothPlatform(config.modResults);
    return config;
  });
};
function withModifyBluetoothPlatform(androidManifest) {
  if (!Array.isArray(androidManifest.manifest["uses-permission"])) {
    androidManifest.manifest["uses-permission"] = [];
  }
  if (
    androidManifest.manifest["uses-permission"].find(
      (item) => item.$["android:name"] === "android.permission.BLUETOOTH"
    )
  ) {
    config_plugins_1.AndroidConfig.Manifest.ensureToolsAvailable(
      androidManifest
    );
    androidManifest.manifest["uses-permission"] = androidManifest.manifest[
      "uses-permission"
    ].filter(
      (item) => item.$["android:name"] !== "android.permission.BLUETOOTH"
    );
    androidManifest.manifest["uses-permission"]?.push({
      $: {
        "android:name": "android.permission.BLUETOOTH",
        "android:maxSdkVersion": "30",
      },
    });
  }
  return androidManifest;
}
exports.default = withModifyBluetoothPermission;
