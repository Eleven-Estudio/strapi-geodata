import React, { useState, useEffect } from 'react';
import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import {
  Typography,
  BaseLink,
  Box,
  TextInput,
  NumberInput,
  Toggle,
  Button,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Divider,
  Alert,
  Select,
  Option,
  Textarea
} from '@strapi/design-system';
import { Check } from '@strapi/icons';

import PluginIcon from './../components/PluginIcon';

const HomePage = () => {
  const { formatMessage } = useIntl();

  // Estados para la configuración
  const [config, setConfig] = useState({
    defaultMap: {
      center: { lat: 14.557316602350959, lng: -90.73227524766911 },
      zoom: 14,
      maxZoom: 20,
      minZoom: 5
    },
    defaultMarker: {
      lat: 14.557316602350959,
      lng: -90.73227524766911,
      draggable: true
    },
    search: {
      enabled: true,
      placeholder: 'Buscar dirección en Guatemala...',
      limit: 5,
      countryCode: 'gt'
    },
    ui: {
      showCoordinatesInput: true,
      showSearchBox: false,
      showCurrentValue: true,
      language: 'es'
    },
    tileLayer: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© OpenStreetMap contributors'
    }
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  // Cargar configuración actual
  useEffect(() => {
    loadCurrentConfig();
  }, []);

  const loadCurrentConfig = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/geodata-config');
      if (response.ok) {
        const result = await response.json();
        if (result.data) {
          setConfig(result.data);
        }
      }
    } catch (err) {
      console.error('Error loading config:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateConfig = (path: string, value: any) => {
    setConfig(prev => {
      const keys = path.split('.');
      const newConfig = { ...prev };
      let current: any = newConfig;

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newConfig;
    });
  };

  const saveConfiguration = async () => {
    try {
      setLoading(true);
      setError('');

      // Generar la configuración para plugins.ts
      const configText = `geodata: {
  enabled: true,
  config: ${JSON.stringify(config, null, 4)}
}`;

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);

    } catch (err) {
      setError('Error al guardar la configuración');
      console.error('Save error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main>
      <Box style={{ padding: '2rem' }}>
        {/* Header */}
        <Box style={{ marginBottom: '2rem' }}>
          <Typography variant="alpha" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            <PluginIcon style={{width: "3rem", height:"3rem"}} />
            {' '}Configuración de GeoData
          </Typography>
          <Typography variant="gamma" style={{ color: '#666' }}>
            Configura el comportamiento del plugin de mapas y geolocalización
          </Typography>
        </Box>

        {/* Alerts */}
        {saved && (
          <Alert
            closeLabel="Cerrar"
            title="Guardado"
            variant="success"
            style={{ marginBottom: '1rem' }}
            onClose={() => setSaved(false)}
          >
            Configuración guardada correctamente. Reinicia Strapi para aplicar los cambios.
          </Alert>
        )}

        {error && (
          <Alert
            closeLabel="Cerrar"
            title="Error"
            variant="danger"
            style={{ marginBottom: '1rem' }}
            onClose={() => setError('')}
          >
            {error}
          </Alert>
        )}

        <Grid gap={6}>
          {/* Configuración del Mapa */}
          <GridItem col={6}>
            <Card>
              <CardHeader>
                <CardTitle>Configuración del Mapa</CardTitle>
              </CardHeader>
              <CardBody>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Typography variant="beta" style={{ marginBottom: '0.5rem' }}>
                    Centro por Defecto
                  </Typography>

                  <NumberInput
                    label="Latitud"
                    name="defaultMap.center.lat"
                    value={config.defaultMap.center.lat}
                    onValueChange={(value: number) => updateConfig('defaultMap.center.lat', value)}
                    step={0.000001}
                  />

                  <NumberInput
                    label="Longitud"
                    name="defaultMap.center.lng"
                    value={config.defaultMap.center.lng}
                    onValueChange={(value: number) => updateConfig('defaultMap.center.lng', value)}
                    step={0.000001}
                  />

                  <Divider />

                  <Typography variant="beta" style={{ marginBottom: '0.5rem' }}>
                    Niveles de Zoom
                  </Typography>

                  <NumberInput
                    label="Zoom Inicial"
                    name="defaultMap.zoom"
                    value={config.defaultMap.zoom}
                    onValueChange={(value: number) => updateConfig('defaultMap.zoom', value)}
                    min={1}
                    max={20}
                  />

                  <NumberInput
                    label="Zoom Máximo"
                    name="defaultMap.maxZoom"
                    value={config.defaultMap.maxZoom}
                    onValueChange={(value: number) => updateConfig('defaultMap.maxZoom', value)}
                    min={1}
                    max={20}
                  />

                  <NumberInput
                    label="Zoom Mínimo"
                    name="defaultMap.minZoom"
                    value={config.defaultMap.minZoom}
                    onValueChange={(value: number) => updateConfig('defaultMap.minZoom', value)}
                    min={1}
                    max={20}
                  />
                </Box>
              </CardBody>
            </Card>
          </GridItem>

          {/* Configuración del Marcador */}
          <GridItem col={6}>
            <Card>
              <CardHeader>
                <CardTitle>Marcador por Defecto</CardTitle>
              </CardHeader>
              <CardBody>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <NumberInput
                    label="Latitud del Marcador"
                    name="defaultMarker.lat"
                    value={config.defaultMarker.lat}
                    onValueChange={(value: number) => updateConfig('defaultMarker.lat', value)}
                    step={0.000001}
                  />

                  <NumberInput
                    label="Longitud del Marcador"
                    name="defaultMarker.lng"
                    value={config.defaultMarker.lng}
                    onValueChange={(value: number) => updateConfig('defaultMarker.lng', value)}
                    step={0.000001}
                  />

                  <Toggle
                    label="Marcador Arrastrable"
                    name="defaultMarker.draggable"
                    onLabel="Sí"
                    offLabel="No"
                    checked={config.defaultMarker.draggable}
                    onChange={() => updateConfig('defaultMarker.draggable', !config.defaultMarker.draggable)}
                  />
                </Box>
              </CardBody>
            </Card>
          </GridItem>

          {/* Configuración de Búsqueda */}
          <GridItem col={6}>
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Búsqueda</CardTitle>
              </CardHeader>
              <CardBody>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Toggle
                    label="Habilitar Búsqueda"
                    name="search.enabled"
                    onLabel="Sí"
                    offLabel="No"
                    checked={config.search.enabled}
                    onChange={() => updateConfig('search.enabled', !config.search.enabled)}
                  />

                  <TextInput
                    label="Placeholder de Búsqueda"
                    name="search.placeholder"
                    value={config.search.placeholder}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateConfig('search.placeholder', e.target.value)}
                  />

                  <NumberInput
                    label="Límite de Resultados"
                    name="search.limit"
                    value={config.search.limit}
                    onValueChange={(value: number) => updateConfig('search.limit', value)}
                    min={1}
                    max={20}
                  />

                  <TextInput
                    label="Código de País"
                    name="search.countryCode"
                    value={config.search.countryCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateConfig('search.countryCode', e.target.value)}
                    placeholder="ej: gt, mx, es, us"
                  />
                </Box>
              </CardBody>
            </Card>
          </GridItem>

          {/* Configuración de Interfaz */}
          <GridItem col={6}>
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Interfaz</CardTitle>
              </CardHeader>
              <CardBody>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Toggle
                    label="Mostrar Campos de Coordenadas"
                    name="ui.showCoordinatesInput"
                    onLabel="Sí"
                    offLabel="No"
                    checked={config.ui.showCoordinatesInput}
                    onChange={() => updateConfig('ui.showCoordinatesInput', !config.ui.showCoordinatesInput)}
                  />

                  <Toggle
                    label="Mostrar Caja de Búsqueda"
                    name="ui.showSearchBox"
                    onLabel="Sí"
                    offLabel="No"
                    checked={config.ui.showSearchBox}
                    onChange={() => updateConfig('ui.showSearchBox', !config.ui.showSearchBox)}
                  />

                  <Toggle
                    label="Mostrar Valor Actual"
                    name="ui.showCurrentValue"
                    onLabel="Sí"
                    offLabel="No"
                    checked={config.ui.showCurrentValue}
                    onChange={() => updateConfig('ui.showCurrentValue', !config.ui.showCurrentValue)}
                  />

                  <Select
                    label="Idioma"
                    name="ui.language"
                    value={config.ui.language}
                    onChange={(value: string) => updateConfig('ui.language', value)}
                  >
                    <Option value="es">Español</Option>
                    <Option value="en">English</Option>
                  </Select>
                </Box>
              </CardBody>
            </Card>
          </GridItem>

          {/* Configuración de Tiles */}
          <GridItem col={12}>
            <Card>
              <CardHeader>
                <CardTitle>Proveedor de Mapas</CardTitle>
              </CardHeader>
              <CardBody>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <TextInput
                    label="URL del Tile Layer"
                    name="tileLayer.url"
                    value={config.tileLayer.url}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateConfig('tileLayer.url', e.target.value)}
                    placeholder="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <TextInput
                    label="Atribución"
                    name="tileLayer.attribution"
                    value={config.tileLayer.attribution}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateConfig('tileLayer.attribution', e.target.value)}
                    placeholder="© OpenStreetMap contributors"
                  />
                </Box>
              </CardBody>
            </Card>
          </GridItem>

          {/* Configuración Generada */}
          <GridItem col={12}>
            <Card>
              <CardHeader>
                <CardTitle>Configuración para plugins.ts</CardTitle>
              </CardHeader>
              <CardBody>
                <Typography variant="gamma" style={{ marginBottom: '1rem' }}>
                  Copia esta configuración en tu archivo <code>config/plugins.ts</code>:
                </Typography>
                <Textarea
                  label=""
                  name="generatedConfig"
                  value={`geodata: {
  enabled: true,
  config: ${JSON.stringify(config, null, 4)}
}`}
                  rows={20}
                  style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}
                  disabled
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>

        {/* Botones de Acción */}
        <Box style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <Button
            onClick={saveConfiguration}
            loading={loading}
            size="L"
            variant="default"
            startIcon={<Check />}
          >
            Guardar Configuración
          </Button>

          <Button
            onClick={loadCurrentConfig}
            size="L"
            variant="secondary"
          >
            Recargar Configuración
          </Button>
        </Box>

        {/* Información adicional */}
        <Box style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <Typography variant="beta" style={{ fontWeight: '600', marginBottom: '1rem' }}>
            Instrucciones de Uso:
          </Typography>
          <Typography variant="gamma" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
            1. Modifica los valores de configuración usando los formularios arriba<br/>
            2. Copia la configuración generada y pégala en tu archivo <code>config/plugins.ts</code><br/>
            3. Reinicia Strapi para aplicar los cambios<br/>
            4. Solo un campo GeoJSON está permitido por tipo de contenido
          </Typography>

          <Typography variant="beta" style={{ fontWeight: '600', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            Campos Requeridos:
          </Typography>
          <Typography variant="gamma" style={{ lineHeight: '1.6' }}>
            Para el correcto funcionamiento, crea estos campos: <strong>lat</strong> (float), <strong>lng</strong> (float), y <strong>geohash</strong> (string).
            El plugin actualiza automáticamente estos campos cuando se modifica la ubicación.
          </Typography>
        </Box>

        {/* Créditos */}
        <Box style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ddd' }}>
          <Typography variant="beta" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
            Autor Original:
          </Typography>
          <Typography variant="gamma" style={{ lineHeight: '1.6' }}>
            Plugin original por <Typography style={{ fontWeight: "bold" }}>red-made</Typography>. Visita{' '}
            <BaseLink style={{ fontWeight: "bold" }} href="https://github.com/red-made/strapi-geodata" target="_blank" rel="noopener noreferrer">
              GitHub @github.com/red-made/strapi-geodata
            </BaseLink>
            {' '}para más información.
          </Typography>
        </Box>
      </Box>
    </Main>
  );
};

export { HomePage };
