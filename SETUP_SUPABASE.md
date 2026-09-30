# Configuración de Supabase

## Paso 1: Crear proyecto en Supabase

1. Ve a https://supabase.com
2. Crea una cuenta o inicia sesión
3. Haz clic en "New Project"
4. Completa los datos del proyecto
5. Copia la URL del proyecto y la clave anónima (anon key)

## Paso 2: Crear la tabla

En el editor SQL de Supabase, ejecuta:

```sql
CREATE TABLE pagos (
  id BIGSERIAL PRIMARY KEY,
  codigo TEXT NOT NULL,
  tipo TEXT NOT NULL DEFAULT 'departamento',
  tamano TEXT DEFAULT 'estandar',
  arrendatario TEXT NOT NULL,
  telefono TEXT,
  universidad TEXT,
  mes_pago TEXT NOT NULL,
  meses_pagados TEXT[] DEFAULT '{}',
  meses_totales INTEGER DEFAULT 12,
  monto DECIMAL(12,2) NOT NULL,
  fecha_pago DATE,
  estado TEXT DEFAULT 'pendiente',
  metodo_pago TEXT DEFAULT 'transferencia',
  deposito DECIMAL(12,2) DEFAULT 0,
  fecha_inicio DATE,
  fecha_fin DATE,
  comprobante TEXT,
  creado TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE pagos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON pagos FOR ALL USING (true) WITH CHECK (true);
```

## Paso 3: Configurar credenciales

Edita el archivo `inventario-arriendos.html` y reemplaza:

```javascript
const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_ANON_KEY = 'tu-anon-key';
```

Con tus credenciales reales.

## Paso 4: Subir a GitHub

```bash
git add .
git commit -m "Integración con Supabase"
git push
```
