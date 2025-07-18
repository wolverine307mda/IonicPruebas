import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.company.prueba',
  appName: 'Prueba',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '3512289f',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;