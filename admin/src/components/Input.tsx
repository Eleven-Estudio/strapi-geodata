import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngTuple, LeafletMouseEvent } from 'leaflet';

import {
  Box,
  Typography,
  Loader,
  JSONInput,
  TextInput,
  Field,
  Button,
} from '@strapi/design-system';

import 'leaflet/dist/leaflet.css';


const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';


const customIcon = new L.Icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconRetinaUrl,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [0, -41],
  shadowUrl: shadowUrl,
  shadowSize: [41, 41], 
  shadowAnchor: [12, 41],
});

interface Location {
  lat: number;
  lng: number;
}

interface InputProps {
  value: Location;
  [key: string]: any;
}

// Los props del mapa ahora serán cargados dinámicamente
let mapProps = {
  zoom: 15,
  center: [14.557316602350959, -90.73227524766911] as LatLngTuple,
  tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  tileAttribution: 'OSM attribution',
  tileAccessToken: '',
};

const Input: React.FC<InputProps> = (props) => {
  const [map, setMap] = useState<any>(null);
  const [location, setLocation] = useState<any>(props.value);
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const latRef = useRef<HTMLInputElement>(null);
  const lngRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Cargar configuración al montar el componente
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/geodata/config');
        if (response.ok) {
          const pluginConfig = await response.json();
          setConfig(pluginConfig);

          // Actualizar mapProps con la configuración cargada
          mapProps = {
            zoom: pluginConfig.defaultMap?.zoom || 15,
            center: [
              pluginConfig.defaultMap?.center?.lat || 14.557316602350959,
              pluginConfig.defaultMap?.center?.lng || -90.73227524766911
            ] as LatLngTuple,
            tileUrl: pluginConfig.tileLayer?.url || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            tileAttribution: pluginConfig.tileLayer?.attribution || 'OSM attribution',
            tileAccessToken: '',
          };

          // Si no hay location inicial, usar el marcador por defecto
          if (!props.value && pluginConfig.defaultMarker) {
            setLocation({
              lat: pluginConfig.defaultMarker.lat,
              lng: pluginConfig.defaultMarker.lng
            });
          }
        }
      } catch (error) {
        console.error('Error loading plugin config:', error);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  const onMapClick = useCallback(
    (e: LeafletMouseEvent) => {
      setLocation(e.latlng);
    },
    [map]
  );

  useEffect(() => {
    if (!map) return;
    map.on('contextmenu', onMapClick);
    return () => {
      map.off('contextmenu', onMapClick);
    };
  }, [map, onMapClick]);

  useEffect(() => {
    props.onChange({
      target: {
        name: props.name,
        value: location,
        type: props.attribute.type,
      },
    });
  }, [location]);

  async function searchLocation(e: React.MouseEvent) {
    let search = searchRef.current?.value;

    if (!search) {
      return;
    }

    try {
      // Usar el proxy local de Strapi en lugar de llamar directamente a Nominatim
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
      console.error('Error searching location:', error);
      // Opcional: mostrar mensaje de error al usuario
    }
  }

  async function setLatLng() {
    let lat: any = latRef.current?.value;
    let lng: any = lngRef.current?.value;
    if (lat && lng) {
      lat = parseFloat(lat);
      lng = parseFloat(lng);
      setLocation({ lat, lng });
      map.panTo({ lat, lng });
    }
  }

  function handleKeyPress(event: any) {
    if (event?.key === 'Enter') {
      console.log('enter press here! ');
    }
  }

  const marginBottom = '2rem';
  const display = 'block';

  // Mostrar loader mientras carga la configuración
  if (loading) {
    return (
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="delta" style={{ marginBottom, display }}>
        {props.label}
      </Typography>

      <Typography variant="omega" style={{ marginBottom, display }}>
        Para establecer la ubicación, ingresa las coordenadas y haz clic en 'Establecer Ubicación',
        busca una dirección y presiona 'Buscar', o navega en el mapa y haz clic derecho
      </Typography>

      {config?.ui?.showCoordinatesInput !== false && (
        <Box style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', marginBottom }}>
          <TextInput ref={latRef} name="lat" placeholder="Latitud" />
          <TextInput ref={lngRef} name="lng" placeholder="Longitud" />
          <Button variant="secondary" onClick={setLatLng} size="l">
            Establecer Ubicación
          </Button>
        </Box>
      )}

      {config?.ui?.showSearchBox !== false && config?.search?.enabled !== false && (
        <Box style={{ display: 'grid', gridTemplateColumns: '4fr 1fr', marginBottom }}>
          <TextInput
            ref={searchRef}
            name="search"
            placeholder={config?.search?.placeholder || "Dirección a buscar"}
          />
          <Button variant="secondary" onClick={searchLocation} size="l">
            Buscar
          </Button>
        </Box>
      )}

      <Box style={{ display: 'flex', height: '300px', width: '100%', marginBottom }}>
        <Box style={{ width: '100% ' }}>
          <MapContainer
            zoom={ mapProps.zoom}
            center={ props.value?.lat && props.value?.lng ? [props.value?.lat, props.value?.lng ] :  mapProps.center as LatLngTuple}
            ref={setMap}
            style={{ height: '300px', zIndex: 299 }}
          >
            <TileLayer
              attribution={config?.tileLayer?.attribution || mapProps.tileAttribution}
              url={config?.tileLayer?.url || mapProps.tileUrl}
              accessToken={mapProps.tileAccessToken}
            />
            {location && <Marker position={[location?.lat, location?.lng]} icon={customIcon} />}
          </MapContainer>
        </Box>
      </Box>

      {config?.ui?.showCurrentValue !== false && (
        <Box style={{ marginBottom }}>
          <Typography variant="delta" style={{ marginBottom, display }}>
            Valor actual de {props.label}:
          </Typography>

          <JSONInput
            disabled
            name={props.name}
            value={JSON.stringify(props.value, null, 2)}
            onChange={(e: any) => setLocation(e)}
            style={{ height: '9rem' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Input;
