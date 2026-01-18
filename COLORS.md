# Atlas - Paleta de Colores

## Colores Principales

### Fondos
- **Fondo principal (claro):** `#f7f3ed`
- **Fondo secundario (beige claro):** `#ebe7e0` 
- **Fondo oscuro:** `#0a1624`

### Texto
- **Texto oscuro principal:** `#0d1926`
- **Texto claro:** `#f7f3ed`

### Acentos
- **Dorado:** `#d4af37`

## Uso en Tailwind

```js
colors: {
  atlas: {
    primary: '#f7f3ed',      // Fondo principal
    secondary: '#ebe7e0',    // Fondo secundario beige
    dark: '#0d1926',         // Texto oscuro
    darkBg: '#0a1624',       // Fondo oscuro (para secciones alternas)
    gold: '#d4af37',         // Acento dorado
  },
}
```

## Aplicación en Páginas

- **Secciones claras:** bg-atlas-primary (#f7f3ed)
- **Secciones beige claro:** bg-[#ebe7e0] o bg-atlas-secondary
- **Secciones oscuras:** bg-[#0a1624]
- **Texto sobre fondo claro:** text-atlas-dark
- **Texto sobre fondo oscuro:** text-atlas-primary
