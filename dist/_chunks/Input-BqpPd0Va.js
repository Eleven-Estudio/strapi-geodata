"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactLeaflet = require("react-leaflet");
const L = require("leaflet");
const designSystem = require("@strapi/design-system");
require("leaflet/dist/leaflet.css");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const L__default = /* @__PURE__ */ _interopDefault(L);
const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";
const customIcon = new L__default.default.Icon({
  iconUrl,
  iconRetinaUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowUrl,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});
let mapProps = {
  zoom: 15,
  center: [14.557316602350959, -90.73227524766911],
  tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileAttribution: "OSM attribution",
  tileAccessToken: ""
};
const Input = (props) => {
  const [map, setMap] = react.useState(null);
  const [location, setLocation] = react.useState(props.value);
  const [config, setConfig] = react.useState(null);
  const [loading, setLoading] = react.useState(true);
  const latRef = react.useRef(null);
  const lngRef = react.useRef(null);
  const searchRef = react.useRef(null);
  react.useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/geodata/config");
        if (response.ok) {
          const pluginConfig = await response.json();
          setConfig(pluginConfig);
          mapProps = {
            zoom: pluginConfig.defaultMap?.zoom || 15,
            center: [
              pluginConfig.defaultMap?.center?.lat || 14.557316602350959,
              pluginConfig.defaultMap?.center?.lng || -90.73227524766911
            ],
            tileUrl: pluginConfig.tileLayer?.url || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            tileAttribution: pluginConfig.tileLayer?.attribution || "OSM attribution",
            tileAccessToken: ""
          };
          if (!props.value && pluginConfig.defaultMarker) {
            setLocation({
              lat: pluginConfig.defaultMarker.lat,
              lng: pluginConfig.defaultMarker.lng
            });
          }
        }
      } catch (error) {
        console.error("Error loading plugin config:", error);
      } finally {
        setLoading(false);
      }
    };
    loadConfig();
  }, []);
  const onMapClick = react.useCallback(
    (e) => {
      setLocation(e.latlng);
    },
    [map]
  );
  react.useEffect(() => {
    if (!map) return;
    map.on("contextmenu", onMapClick);
    return () => {
      map.off("contextmenu", onMapClick);
    };
  }, [map, onMapClick]);
  react.useEffect(() => {
    props.onChange({
      target: {
        name: props.name,
        value: location,
        type: props.attribute.type
      }
    });
  }, [location]);
  async function searchLocation(e) {
    let search = searchRef.current?.value;
    if (!search) {
      return;
    }
    try {
      const response = await fetch(
        `/api/geocode/search?q=${encodeURIComponent(search)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        let lat = parseFloat(data[0].lat);
        let lng = parseFloat(data[0].lon);
        setLocation({ lat, lng });
        map.panTo({ lat, lng });
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  }
  async function setLatLng() {
    let lat = latRef.current?.value;
    let lng = lngRef.current?.value;
    if (lat && lng) {
      lat = parseFloat(lat);
      lng = parseFloat(lng);
      setLocation({ lat, lng });
      map.panTo({ lat, lng });
    }
  }
  const marginBottom = "2rem";
  const display = "block";
  if (loading) {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, {}) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "delta", style: { marginBottom, display }, children: props.label }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "omega", style: { marginBottom, display }, children: "Para establecer la ubicación, ingresa las coordenadas y haz clic en 'Establecer Ubicación', busca una dirección y presiona 'Buscar', o navega en el mapa y haz clic derecho" }),
    config?.ui?.showCoordinatesInput !== false && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { style: { display: "grid", gridTemplateColumns: "2fr 2fr 1fr", marginBottom }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextInput, { ref: latRef, name: "lat", placeholder: "Latitud" }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.TextInput, { ref: lngRef, name: "lng", placeholder: "Longitud" }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "secondary", onClick: setLatLng, size: "l", children: "Establecer Ubicación" })
    ] }),
    config?.ui?.showSearchBox !== false && config?.search?.enabled !== false && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { style: { display: "grid", gridTemplateColumns: "4fr 1fr", marginBottom }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.TextInput,
        {
          ref: searchRef,
          name: "search",
          placeholder: config?.search?.placeholder || "Dirección a buscar"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "secondary", onClick: searchLocation, size: "l", children: "Buscar" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { display: "flex", height: "300px", width: "100%", marginBottom }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { width: "100% " }, children: /* @__PURE__ */ jsxRuntime.jsxs(
      reactLeaflet.MapContainer,
      {
        zoom: mapProps.zoom,
        center: props.value?.lat && props.value?.lng ? [props.value?.lat, props.value?.lng] : mapProps.center,
        ref: setMap,
        style: { height: "300px", zIndex: 299 },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            reactLeaflet.TileLayer,
            {
              attribution: config?.tileLayer?.attribution || mapProps.tileAttribution,
              url: config?.tileLayer?.url || mapProps.tileUrl,
              accessToken: mapProps.tileAccessToken
            }
          ),
          location && /* @__PURE__ */ jsxRuntime.jsx(reactLeaflet.Marker, { position: [location?.lat, location?.lng], icon: customIcon })
        ]
      }
    ) }) }),
    config?.ui?.showCurrentValue !== false && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { style: { marginBottom }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "delta", style: { marginBottom, display }, children: [
        "Valor actual de ",
        props.label,
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.JSONInput,
        {
          disabled: true,
          name: props.name,
          value: JSON.stringify(props.value, null, 2),
          onChange: (e) => setLocation(e),
          style: { height: "9rem" }
        }
      )
    ] })
  ] });
};
exports.default = Input;
