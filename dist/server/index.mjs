import geohash from "ngeohash";
const bootstrap = ({ strapi }) => {
  strapi.db.lifecycles.subscribe((event) => {
    if (event.action === "beforeCreate" || event.action === "beforeUpdate") {
      for (const key in event.model.attributes) {
        let field = event.model.attributes[key];
        if (field?.customField === "plugin::geodata.geojson") {
          event.params.data.lat = event.params.data[key]?.lat;
          event.params.data.lng = event.params.data[key]?.lng;
          if (event.params.data.lat && event.params.data.lng) {
            event.params.data.geohash = geohash.encode(event.params.data.lat, event.params.data.lng);
          }
        }
      }
    }
  });
};
const destroy = ({ strapi }) => {
};
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "geojson",
    plugin: "geodata",
    type: "json",
    inputSize: {
      // optional
      default: 12,
      isResizable: true
    }
  });
};
const config = {
  default: {},
  validator() {
  }
};
const contentTypes = {};
const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin("geodata").service("service").getWelcomeMessage();
  },
  getConfig(ctx) {
    const pluginConfig = strapi.config.get("plugin.geodata", {});
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
        countryCode: "gt"
      },
      ui: {
        showCoordinatesInput: true,
        showSearchBox: true,
        showCurrentValue: true,
        language: "es"
      },
      tileLayer: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "© OpenStreetMap contributors"
      }
    };
    const config2 = { ...defaultConfig, ...pluginConfig };
    ctx.body = config2;
  }
});
const controllers = {
  controller
};
const middlewares = {};
const policies = {};
const routes = [
  {
    method: "GET",
    path: "/",
    // name of the controller file & the method.
    handler: "controller.index",
    config: {
      policies: []
    }
  },
  {
    method: "GET",
    path: "/config",
    handler: "controller.getConfig",
    config: {
      policies: []
    }
  }
];
const service = ({ strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  }
});
const services = {
  service
};
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares
};
export {
  index as default
};
