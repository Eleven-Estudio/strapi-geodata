# Guía de Desarrollo - strapi-geodata

Esta guía explica cómo trabajar con el plugin `strapi-geodata` tanto para desarrollo local como para instalación en proyectos.

## Tabla de Contenidos

- [Desarrollo Local](#desarrollo-local)
- [Publicar Nueva Versión](#publicar-nueva-versión)
- [Instalación en Proyectos](#instalación-en-proyectos)
- [Scripts Disponibles](#scripts-disponibles)

---

## Desarrollo Local

Cuando necesites hacer cambios al plugin y probarlos en un proyecto Strapi existente:

### 1. Configurar el Entorno de Desarrollo

```bash
# En el directorio del plugin
cd /ruta/a/strapi-geodata

# Construir el plugin (primera vez)
pnpm run build

# Iniciar modo watch con enlace al proyecto
pnpm run watch:link -- --link /ruta/a/tu/proyecto-strapi
```

El comando `watch:link` hace dos cosas:
- Observa cambios en tu código y recompila automáticamente
- Enlaza el plugin al proyecto usando `yalc` para desarrollo local

### 2. Configurar el Proyecto Strapi

```bash
# En el directorio de tu proyecto Strapi
cd /ruta/a/tu/proyecto-strapi

# Agregar el plugin local con yalc
pnpm dlx yalc add --link strapi-geodata

# Instalar dependencias
pnpm install
```

### 3. Actualizar package.json del Proyecto

El proyecto necesita un symlink para que Strapi reconozca el plugin. Agrega o actualiza el script `postinstall` en `package.json`:

```json
{
  "scripts": {
    "postinstall": "cd node_modules && ln -sf strapi-geodata geodata"
  }
}
```

### 4. Desarrollo en Tiempo Real

Ahora puedes:
1. Hacer cambios en el plugin
2. `watch:link` recompilará automáticamente
3. Los cambios se sincronizarán vía `yalc`
4. Reinicia tu servidor Strapi para ver los cambios

```bash
# En tu proyecto Strapi
pnpm run dev
```

### 5. Limpiar el Entorno de Desarrollo

Cuando termines de desarrollar:

```bash
# Detener el proceso watch:link (Ctrl+C)

# En el proyecto Strapi, remover el enlace yalc
cd /ruta/a/tu/proyecto-strapi
pnpm dlx yalc remove strapi-geodata
```

---

## Publicar Nueva Versión

Cuando estés listo para publicar los cambios a npm:

### 1. Verificar que Todo Esté Listo

```bash
cd /ruta/a/strapi-geodata

# Asegurarte de que no hay enlaces yalc activos
# Verificar estado de git
git status

# Asegurarte de que todo compila sin errores
pnpm run build
```

### 2. Hacer Commit de los Cambios

```bash
# Agregar cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "feat: descripción de los cambios"
```

### 3. Actualizar la Versión

Edita `package.json` y actualiza el número de versión:

```json
{
  "version": "0.1.04"  // Incrementar según tipo de cambio
}
```

Tipos de incremento:
- **Patch** (0.1.03 → 0.1.04): Correcciones de bugs
- **Minor** (0.1.03 → 0.2.0): Nuevas funcionalidades
- **Major** (0.1.03 → 1.0.0): Cambios que rompen compatibilidad

```bash
# Hacer commit del cambio de versión
git add package.json
git commit -m "chore: bump version to X.Y.Z"
```

### 4. Construir para Producción

```bash
# Construir el plugin
pnpm run build

# Verificar la construcción
pnpm run verify
```

### 5. Publicar a npm

```bash
# Asegurarte de estar autenticado en npm
npm whoami

# Si no estás autenticado
npm login

# Publicar el paquete
npm publish

# O si usas pnpm
pnpm publish
```

### 6. Subir Cambios a GitHub

```bash
# Push de los commits
git push origin main

# Crear un tag de la versión (opcional pero recomendado)
git tag v0.1.04
git push origin v0.1.04
```

---

## Instalación en Proyectos

Para instalar el plugin en un proyecto Strapi nuevo o existente:

### 1. Instalar el Plugin

```bash
cd /ruta/a/tu/proyecto-strapi

# Instalar desde npm
pnpm add strapi-geodata
# o
npm install strapi-geodata
```

### 2. Configurar el Symlink

Agrega el script `postinstall` en `package.json` del proyecto:

```json
{
  "scripts": {
    "postinstall": "cd node_modules && ln -sf strapi-geodata geodata"
  }
}
```

Luego ejecuta:

```bash
pnpm install
```

### 3. Configurar el Plugin (Opcional)

Crea o edita `config/plugins.ts` (o `.js`):

```typescript
export default {
  geodata: {
    enabled: true,
    config: {
      // Configuración del mapa por defecto
      defaultMap: {
        zoom: 15,
        maxZoom: 18,
        minZoom: 5,
        center: {
          lat: 14.557316602350959,
          lng: -90.73227524766911
        }
      },
      // Configuración del tile layer
      tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
      },
      // Marcador por defecto (opcional)
      defaultMarker: {
        lat: 14.557316602350959,
        lng: -90.73227524766911
      },
      // Configuración de búsqueda
      search: {
        enabled: true,
        placeholder: 'Buscar dirección...'
      },
      // UI personalización
      ui: {
        showCoordinatesInput: true,
        showSearchBox: true,
        showCurrentValue: true
      }
    }
  }
};
```

### 4. Usar el Custom Field

En tus Content Types, agrega un campo de tipo `GeoJSON`:

1. Ve al Content-Type Builder
2. Selecciona tu Content Type
3. Agrega un nuevo campo
4. Selecciona "Custom" → "GeoJSON"
5. Configura el campo

---

## Scripts Disponibles

### En el Plugin

```bash
# Construir el plugin para producción
pnpm run build

# Modo watch (observar cambios)
pnpm run watch

# Modo watch con enlace a proyecto
pnpm run watch:link -- --link /ruta/al/proyecto

# Verificar que el plugin está listo para publicar
pnpm run verify

# Verificar tipos TypeScript (admin)
pnpm run test:ts:front

# Verificar tipos TypeScript (server)
pnpm run test:ts:back
```

### Comandos Útiles

```bash
# Ver versión actual del plugin
grep version package.json

# Limpiar carpeta dist
rm -rf dist

# Limpiar node_modules y reinstalar
rm -rf node_modules && pnpm install

# Ver diferencias de git
git diff

# Ver commits recientes
git log --oneline -10
```

---

## Troubleshooting

### El plugin no aparece en Strapi

1. Verifica que el symlink existe: `ls -la node_modules/geodata`
2. Ejecuta `pnpm install` para recrear el symlink
3. Reinicia el servidor Strapi

### Errores de TypeScript al compilar

1. Verifica que todas las dependencias están instaladas: `pnpm install`
2. Limpia y reconstruye: `rm -rf dist && pnpm run build`

### Cambios no se reflejan en desarrollo local

1. Verifica que `watch:link` está corriendo
2. Reinicia el servidor Strapi
3. Si persiste, haz un push manual: `pnpm dlx yalc push`

### Error al publicar a npm

1. Verifica que estás autenticado: `npm whoami`
2. Verifica permisos del paquete en npm
3. Asegúrate de que la versión no existe ya: `npm view strapi-geodata versions`

---

## Notas Importantes

- **Siempre** haz `git commit` antes de publicar
- **Siempre** incrementa la versión al publicar
- **Nunca** publiques con enlaces yalc activos
- Mantén el `DEVELOPMENT.md` actualizado con cambios importantes
- Documenta cambios importantes en commits descriptivos

---

## Soporte

Para problemas o preguntas:
- GitHub Issues: https://github.com/red-made/strapi-geodata/issues
- Email: info@red-made.com
