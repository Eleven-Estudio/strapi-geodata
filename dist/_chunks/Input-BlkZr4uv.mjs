import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Box, Loader, Typography, TextInput, Button, JSONInput } from "@strapi/design-system";
import "leaflet/dist/leaflet.css";
const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";
const customIcon = new L.Icon({
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
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(props.value);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const latRef = useRef(null);
  const lngRef = useRef(null);
  const searchRef = useRef(null);
  useEffect(() => {
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
  const onMapClick = useCallback(
    (e) => {
      setLocation(e.latlng);
    },
    [map]
  );
  useEffect(() => {
    if (!map) return;
    map.on("contextmenu", onMapClick);
    return () => {
      map.off("contextmenu", onMapClick);
    };
  }, [map, onMapClick]);
  useEffect(() => {
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
    return /* @__PURE__ */ jsx(Box, { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }, children: /* @__PURE__ */ jsx(Loader, {}) });
  }
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "delta", style: { marginBottom, display }, children: props.label }),
    /* @__PURE__ */ jsx(Typography, { variant: "omega", style: { marginBottom, display }, children: "Para establecer la ubicación, ingresa las coordenadas y haz clic en 'Establecer Ubicación', busca una dirección y presiona 'Buscar', o navega en el mapa y haz clic derecho" }),
    config?.ui?.showCoordinatesInput !== false && /* @__PURE__ */ jsxs(Box, { style: { display: "grid", gridTemplateColumns: "2fr 2fr 1fr", marginBottom }, children: [
      /* @__PURE__ */ jsx(TextInput, { ref: latRef, name: "lat", placeholder: "Latitud" }),
      /* @__PURE__ */ jsx(TextInput, { ref: lngRef, name: "lng", placeholder: "Longitud" }),
      /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: setLatLng, size: "l", children: "Establecer Ubicación" })
    ] }),
    config?.ui?.showSearchBox !== false && config?.search?.enabled !== false && /* @__PURE__ */ jsxs(Box, { style: { display: "grid", gridTemplateColumns: "4fr 1fr", marginBottom }, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          ref: searchRef,
          name: "search",
          placeholder: config?.search?.placeholder || "Dirección a buscar"
        }
      ),
      /* @__PURE__ */ jsx(Button, { variant: "secondary", onClick: searchLocation, size: "l", children: "Buscar" })
    ] }),
    /* @__PURE__ */ jsx(Box, { style: { display: "flex", height: "300px", width: "100%", marginBottom }, children: /* @__PURE__ */ jsx(Box, { style: { width: "100% " }, children: /* @__PURE__ */ jsxs(
      MapContainer,
      {
        zoom: mapProps.zoom,
        center: props.value?.lat && props.value?.lng ? [props.value?.lat, props.value?.lng] : mapProps.center,
        ref: setMap,
        style: { height: "300px", zIndex: 299 },
        children: [
          /* @__PURE__ */ jsx(
            TileLayer,
            {
              attribution: config?.tileLayer?.attribution || mapProps.tileAttribution,
              url: config?.tileLayer?.url || mapProps.tileUrl,
              accessToken: mapProps.tileAccessToken
            }
          ),
          location && /* @__PURE__ */ jsx(Marker, { position: [location?.lat, location?.lng], icon: customIcon })
        ]
      }
    ) }) }),
    config?.ui?.showCurrentValue !== false && /* @__PURE__ */ jsxs(Box, { style: { marginBottom }, children: [
      /* @__PURE__ */ jsxs(Typography, { variant: "delta", style: { marginBottom, display }, children: [
        "Valor actual de ",
        props.label,
        ":"
      ] }),
      /* @__PURE__ */ jsx(
        JSONInput,
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
export {
  Input as default
};
