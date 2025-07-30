# IONIC Para ANGULAR


## 📱 Comandos Básicos de Ionic
### Crear y Configurar Proyecto

```
# Crear nuevo proyecto sobre angular
ionic start myApp tabs --type=angular

# Navegar al proyecto
cd myApp

# Instalar dependencias
npm install
```

### Desarrollo y Servidor
```
# Servidor de desarrollo
ionic serve

# Servidor con recarga automática
ionic serve --lab

# Generar páginas/componentes
ionic generate page nombre-pagina
ionic generate component nombre-componente
```

### Build y Preparación
```
# Build para producción
ionic build

# Build para desarrollo
ionic build --dev
```

### Capacitor (Nativo)
```
# Añadir plataforma Android
ionic cap add android

# Añadir plataforma iOS
ionic cap add ios

# Copiar archivos web a nativo
ionic cap copy

# Sincronizar (copy + update)
ionic cap sync

# Abrir en Android Studio
ionic cap open android

# Abrir en Xcode (iOS)
ionic cap open ios

# Ejecutar en dispositivo/emulador Android
ionic cap run android

# Ejecutar en dispositivo iOS
ionic cap run ios
```

### Flujo Completo para Android
```
# 1. Build del proyecto
ionic build

# 2. Copiar archivos al proyecto nativo
ionic cap copy android

# 3. Sincronizar cambios
ionic cap sync android

# 4. Abrir en Android Studio
ionic cap open android
```

### Comandos de Desarrollo Útiles
```
# Ver información del proyecto
ionic info

# Actualizar Ionic CLI
npm install -g @ionic/cli@latest

# Actualizar Capacitor
npm install @capacitor/core @capacitor/cli

# Ver versiones instaladas
ionic --version
```

### Para tu proyecto actual
```
# Desde la carpeta del proyecto
cd "c:\Proyectos\Ionic\IonicPruebas"

# Build
ionic build

# Copiar a Android
ionic cap copy android

# Abrir Android Studio
ionic cap open android

# O todo en uno:
ionic cap sync
```

### Basándome en tu estructura, estos serían los comandos específicos:
```
# Ver logs del dispositivo Android
ionic cap run android --livereload

# Inspeccionar app en Chrome
# Ir a chrome://inspect en Chrome después de conectar dispositivo
```