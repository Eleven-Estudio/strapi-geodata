import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('geodata')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },

  getConfig(ctx) {
    console.log('🔧 [GEODATA SERVER] Request a /geodata/config recibido');

    // Obtener la configuración del plugin desde Strapi
    const pluginConfig = strapi.config.get('plugin.geodata', {});
    console.log('🔧 [GEODATA SERVER] Configuración del plugin desde strapi.config:', pluginConfig);

    // Configuración por defecto en caso de que no esté definida
    const defaultConfig = {
      defaultMap: {
        center: { lat: 14.557316602350959, lng: -90.73227524766911 },
        zoom: 15,
        maxZoom: 18,
        minZoom: 5
      },
      defaultMarker: {
        lat: 14.557316602350959,
        lng: -90.73227524766911,
        draggable: true
      },
      search: {
        enabled: true,
        placeholder: "Buscar dirección...",
        limit: 5,
        countryCode: 'gt'
      },
      ui: {
        showCoordinatesInput: true,
        showSearchBox: true,
        showCurrentValue: true,
        language: 'es'
      },
      tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
      }
    };

    // Merge de configuración por defecto con la configuración del usuario
    const config = { ...defaultConfig, ...pluginConfig };
    console.log('🔧 [GEODATA SERVER] Configuración final enviada:', config);

    ctx.body = config;
  },
});

export default controller;
