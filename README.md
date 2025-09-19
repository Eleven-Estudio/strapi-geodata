# Strapi GeoData - Enhanced Version

A powerful Strapi v5 plugin that adds dynamic geolocation functionality with customizable maps, search capabilities, and comprehensive configuration options.

## 🙏 Credits

This plugin is a fork and enhanced version of the original [strapi-geodata](https://github.com/red-made/strapi-geodata) plugin created by **[red-made](https://github.com/red-made)**. We extend our gratitude to the original author for providing the foundational codebase that made this enhanced version possible.

### What's New in This Fork

- ✅ **Dynamic Configuration**: Fully configurable from Strapi's `config/plugins.ts`
- ✅ **Spanish Interface**: Complete Spanish translation and localization
- ✅ **Custom Default Locations**: Set default map center and marker positions
- ✅ **Search Configuration**: Customizable address search with country filtering
- ✅ **UI Flexibility**: Show/hide interface elements as needed
- ✅ **CORS Proxy**: Built-in geocoding proxy to avoid CORS issues
- ✅ **Zoom Controls**: Configurable default, min, and max zoom levels
- ✅ **Multiple Map Providers**: Support for different tile layer providers

## ❗ Requirements

- Strapi v5+
- Node.js 18+

## 📦 Installation

```bash
npm install strapi-geodata
```

```bash
yarn add strapi-geodata
```

```bash
pnpm add strapi-geodata
```

## 🚀 Configuration

### Basic Setup in `config/plugins.ts`

```typescript
export default {
  geodata: {
    enabled: true,
    config: {
      // Map default settings
      defaultMap: {
        center: {
          lat: 14.557316602350959, // Guatemala City
          lng: -90.73227524766911
        },
        zoom: 15, // Initial zoom level
        maxZoom: 18, // Maximum zoom allowed
        minZoom: 5   // Minimum zoom allowed
      },

      // Default marker/pin position
      defaultMarker: {
        lat: 14.557316602350959,
        lng: -90.73227524766911,
        draggable: true // Whether the marker can be dragged
      },

      // Address search configuration
      search: {
        enabled: true, // Enable/disable address search
        placeholder: "Buscar dirección en Guatemala...", // Search box placeholder
        limit: 5, // Maximum number of search results
        countryCode: 'gt' // Filter results by country (Guatemala)
      },

      // User interface options
      ui: {
        showCoordinatesInput: true, // Show lat/lng input fields
        showSearchBox: true, // Show address search box
        showCurrentValue: true, // Show current JSON value
        language: 'es' // Interface language ('es' or 'en')
      },

      // Map tile layer configuration
      tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
      }
    }
  }
}
```

## 🌍 Country-Specific Examples

### Mexico Configuration
```typescript
geodata: {
  enabled: true,
  config: {
    defaultMap: {
      center: { lat: 19.4326, lng: -99.1332 }, // Mexico City
      zoom: 10
    },
    search: {
      countryCode: 'mx',
      placeholder: "Buscar dirección en México..."
    }
  }
}
```

### Spain Configuration
```typescript
geodata: {
  enabled: true,
  config: {
    defaultMap: {
      center: { lat: 40.4168, lng: -3.7038 }, // Madrid
      zoom: 12
    },
    search: {
      countryCode: 'es',
      placeholder: "Buscar dirección en España..."
    }
  }
}
```

### United States Configuration
```typescript
geodata: {
  enabled: true,
  config: {
    defaultMap: {
      center: { lat: 39.8283, lng: -98.5795 }, // Center of US
      zoom: 4
    },
    search: {
      countryCode: 'us',
      placeholder: "Search address in United States..."
    },
    ui: {
      language: 'en'
    }
  }
}
```

## 🎯 Minimal Configuration

For a simple map without search or coordinate inputs:

```typescript
geodata: {
  enabled: true,
  config: {
    defaultMap: {
      center: { lat: 14.557, lng: -90.732 },
      zoom: 12
    },
    ui: {
      showCoordinatesInput: false,
      showSearchBox: false,
      showCurrentValue: false
    }
  }
}
```

## 🗺️ Custom Map Providers

### MapBox Configuration
```typescript
tileLayer: {
  url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  attribution: '© Mapbox © OpenStreetMap',
  id: 'mapbox/streets-v11',
  accessToken: 'your_mapbox_token_here'
}
```

### CartoDB Configuration
```typescript
tileLayer: {
  url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '© CARTO © OpenStreetMap contributors'
}
```

## 🛠️ How It Works

The plugin adds a custom field type that creates an interactive map interface with the following features:

### Adding Locations
1. **Coordinate Input**: Enter latitude and longitude manually and click "Establecer Ubicación"
2. **Address Search**: Type an address and click "Buscar"
3. **Map Interaction**: Navigate the map and right-click to place a marker

### Data Storage
The plugin automatically creates and populates these fields:
- `lat`: Latitude (float)
- `lng`: Longitude (float)
- `geohash`: Geohash string for spatial queries

### API Usage
When creating/updating content programmatically, use this format:

```json
{
  "location_field": {
    "lat": 14.557316602350959,
    "lng": -90.73227524766911
  }
}
```

The `lat`, `lng`, and `geohash` fields will be automatically populated.

## 🔧 Strapi Security Configuration

Add this to your `config/middlewares.ts` to allow map assets:

```typescript
export default [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "script-src": [
            "'self'",
            "unsafe-inline",
            "https://*.basemaps.cartocdn.com",
          ],
          "media-src": [
            "'self'",
            "blob:",
            "data:",
            "https://*.basemaps.cartocdn.com",
            "https://tile.openstreetmap.org",
            "https://*.tile.openstreetmap.org",
          ],
          "img-src": [
            "'self'",
            "blob:",
            "data:",
            "https://*.basemaps.cartocdn.com",
            "market-assets.strapi.io",
            "https://*.tile.openstreetmap.org",
            "https://unpkg.com/leaflet@1.9.4/dist/images/",
          ],
        },
      },
    },
  },
];
```

## 🚫 CORS Solution

This enhanced version includes a built-in CORS proxy for geocoding requests. No additional configuration needed - address search works out of the box!

The plugin automatically creates a `/api/geocode/search` endpoint in your Strapi application that proxies requests to Nominatim with proper headers.

## 🌐 Internationalization

### Spanish (Default)
- Complete Spanish interface
- Localized placeholders and messages
- Spanish address search

### English
Set `ui.language: 'en'` in your configuration for English interface.

## 📋 Configuration Reference

### defaultMap Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `center.lat` | number | 14.557316602350959 | Default latitude |
| `center.lng` | number | -90.73227524766911 | Default longitude |
| `zoom` | number | 15 | Initial zoom level |
| `maxZoom` | number | 18 | Maximum zoom level |
| `minZoom` | number | 5 | Minimum zoom level |

### defaultMarker Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `lat` | number | 14.557316602350959 | Initial marker latitude |
| `lng` | number | -90.73227524766911 | Initial marker longitude |
| `draggable` | boolean | true | Whether marker can be dragged |

### search Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | true | Enable address search |
| `placeholder` | string | "Buscar dirección..." | Search input placeholder |
| `limit` | number | 5 | Max search results |
| `countryCode` | string | "gt" | ISO country code filter |

### ui Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showCoordinatesInput` | boolean | true | Show lat/lng inputs |
| `showSearchBox` | boolean | true | Show address search |
| `showCurrentValue` | boolean | true | Show current JSON value |
| `language` | string | "es" | Interface language |

### tileLayer Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `url` | string | OpenStreetMap URL | Tile server URL |
| `attribution` | string | "© OpenStreetMap contributors" | Map attribution |

## 🔄 Development

After modifying configuration in `config/plugins.ts`, restart Strapi:

```bash
npm run develop
```

```bash
yarn develop
```

```bash
pnpm develop
```

## 🤝 Contributing

This enhanced version maintains compatibility with the original plugin while adding significant new features. We encourage contributions to both this fork and the original project.

### Original Repository
- **Original Author**: [red-made](https://github.com/red-made)
- **Original Repository**: [strapi-geodata](https://github.com/red-made/strapi-geodata)

## 📄 License

This project maintains the same license as the original strapi-geodata plugin. Please refer to the original repository for license details.

## 🐛 Issues & Support

For issues specific to the enhanced features (dynamic configuration, Spanish translation, CORS proxy), please report them in this repository.

For issues related to the core functionality, consider reporting them to the original repository as well to help improve the base plugin.