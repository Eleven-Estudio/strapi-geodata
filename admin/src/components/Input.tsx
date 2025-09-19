import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngTuple, LeafletMouseEvent } from 'leaflet';

import {
  Box,
  Typography,
  Loader,
  JSONInput,
  TextInput, Button
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

const Input: React.FC<InputProps> = (props) => {
  const [map, setMap] = useState<any>(null);
  const [location, setLocation] = useState<any>(props.value);
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [configLoaded, setConfigLoaded] = useState<boolean>(false);

  const latRef = useRef<HTMLInputElement>(null);
  const lngRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Cargar configuración al montar el componente
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/geodata-config');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = result.data;

        setConfig(data);
        setConfigLoaded(true);

        // Si no hay location inicial, usar el marcador por defecto
        if (!props.value && data.defaultMarker) {
          setLocation({
            lat: data.defaultMarker.lat,
            lng: data.defaultMarker.lng
          });
        }
      } catch (error) {
        console.error('Error loading plugin config:', error);
        // Usar configuración por defecto si falla la carga
        const defaultConfig = {
          defaultMap: {
            zoom: 15,
            maxZoom: 18,
            minZoom: 5,
            center: { lat: 14.557316602350959, lng: -90.73227524766911 }
          },
          tileLayer: {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '© OpenStreetMap contributors'
          }
        };
        setConfig(defaultConfig);
        setConfigLoaded(true);
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
      if (data && data.length > 0) {
        let lat = parseFloat(data[0].lat);
        let lng = parseFloat(data[0].lon);
        setLocation({ lat, lng });

        // Si la nueva ubicación está muy lejos, hacer setView con zoom apropiado
        // Si está cerca, solo hacer pan para mantener el zoom actual
        const currentCenter = map.getCenter();
        const distance = currentCenter.distanceTo([lat, lng]);

        if (distance > 50000) { // Si está a más de 50km, hacer zoom
          map.setView([lat, lng], Math.max(map.getZoom(), 12));
        } else {
          map.panTo([lat, lng]);
        }
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

      // Si la nueva ubicación está muy lejos, hacer setView con zoom apropiado
      // Si está cerca, solo hacer pan para mantener el zoom actual
      const currentCenter = map.getCenter();
      const distance = currentCenter.distanceTo([lat, lng]);

      if (distance > 50000) { // Si está a más de 50km, hacer zoom
        map.setView([lat, lng], Math.max(map.getZoom(), 12));
      } else {
        map.panTo([lat, lng]);
      }
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
        <Box style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '0.5rem', marginBottom }}>
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
          {configLoaded && config && (() => {
            const mapZoom = config?.defaultMap?.zoom || 15;
            const mapMaxZoom = config?.defaultMap?.maxZoom || 18;
            const mapMinZoom = config?.defaultMap?.minZoom || 5;

            // Solo usar las coordenadas por defecto si no hay valor inicial
            const initialCenter: LatLngTuple = props.value?.lat && props.value?.lng
              ? [props.value.lat, props.value.lng] as LatLngTuple
              : [
                config?.defaultMap?.center?.lat || 14.557316602350959,
                config?.defaultMap?.center?.lng || -90.73227524766911
              ] as LatLngTuple;

            return (
              <MapContainer
                key={`map-${mapZoom}-${mapMaxZoom}-${mapMinZoom}`}
                zoom={mapZoom}
                maxZoom={mapMaxZoom}
                minZoom={mapMinZoom}
                center={initialCenter}
                ref={setMap}
                style={{ height: '300px', zIndex: 299 }}
              >
                <TileLayer
                  attribution={config?.tileLayer?.attribution || '© OpenStreetMap contributors'}
                  url={config?.tileLayer?.url || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                />
                {location && <Marker position={[location?.lat, location?.lng]} icon={customIcon} />}
              </MapContainer>
            );
          })()}
          {(!configLoaded || loading) && (
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <Loader />
            </Box>
          )}
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
