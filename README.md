# 🌌 Aetheris

> **Plataforma de aprendizaje tecnológico personalizada**  
> Conectando conocimiento, comunidad y crecimiento profesional en el mundo tech.

![Aetheris Banner](Client/src/assets/imgs/logo.png)

---

## 📖 Sobre el Proyecto

**Aetheris** es una plataforma educativa diseñada para ofrecer **rutas de aprendizaje personalizadas** en áreas tecnológicas como DevSecOps, Python, Cybersecurity, Inteligencia Artificial y Análisis de Datos.

El nombre *Aetheris* proviene del concepto del **éter**: aquello invisible que conecta todo, que sostiene la luz y la energía en movimiento. Esa misma esencia inspira nuestra misión: conectar datos, inteligencia y seguridad de forma fluida, confiable y futurista.

### 🎯 Objetivo

Democratizar el acceso a la educación tecnológica mediante:
- ✅ Rutas de aprendizaje adaptativas basadas en intereses del usuario
- ✅ Múltiples estilos de estudio (videos, labs, libros, clases en vivo)
- ✅ Comunidad integrada para colaboración y networking
- ✅ Sistema de certificación y seguimiento de progreso
- ✅ Contenido curado por expertos de la industria

---

## 🚀 Características Principales

### 🔐 Autenticación Inteligente
- Registro en 3 pasos con personalización de perfil
- Validación de contraseña con medidor de fortaleza en tiempo real
- Integración con proveedores OAuth (Google, Facebook, Microsoft, GitHub)

### 📚 Catálogo de Cursos
- Exploración por categorías técnicas
- Filtrado por nivel de dificultad
- Sistema de recomendaciones basado en intereses

### 👥 Comunidad
- Foro de discusión integrado
- Sistema de posts y comentarios
- Networking entre estudiantes

### 📊 Perfil de Usuario
- Dashboard personalizado con progreso
- Certificados descargables
- Historial de aprendizaje

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.1** - Librería UI con componentes funcionales
- **Vite 7.1** - Build tool ultrarrápido con HMR
- **React Router 7.9** - Navegación SPA
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Axios 1.12** - Cliente HTTP para API REST

### Herramientas de Desarrollo
- **ESLint** - Linter para código consistente
- **Babel React Compiler** - Optimización automática
- **PostCSS** - Transformación de CSS

---

## 📦 Instalación y Configuración

### Prerrequisitos
```bash
Node.js >= 20.19.0
npm >= 8.0.0
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/aetheris.git
cd aetheris
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno** (opcional)
```bash
cp .env.example .env
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Analizar código con ESLint
```

---

## 📁 Estructura del Proyecto

```
aetheris/
├── public/                  # Archivos estáticos
├── src/
│   ├── assets/             # Imágenes, fuentes, recursos
│   │   ├── fonts/         # Marykate, Nunito
│   │   └── imgs/          # Logo, ilustraciones
│   ├── components/        # Componentes reutilizables
│   │   └── Navbar.jsx     # Barra de navegación
│   ├── pages/             # Páginas/vistas principales
│   │   ├── Landing.jsx    # Página de inicio
│   │   ├── Login.jsx      # Inicio de sesión
│   │   ├── Register.jsx   # Registro multi-paso
│   │   ├── Cursos.jsx     # Catálogo de cursos
│   │   ├── Comunidad.jsx  # Foro comunitario
│   │   └── Perfil.jsx     # Dashboard de usuario
│   ├── App.jsx            # Componente raíz con routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globales + Tailwind
├── index.html             # HTML base
├── vite.config.js         # Configuración de Vite
├── postcss.config.js      # Configuración de PostCSS
├── eslint.config.js       # Configuración de ESLint
└── package.json           # Dependencias y scripts
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
--color-background: #c1dbfa  /* Azul cielo suave */
--color-text: #1e293b        /* Gris oscuro legible */
--color-white: #ffffff       /* Blanco puro */
```

### Tipografía
- **Display**: Marykate (títulos y branding)
- **Sans**: Nunito (cuerpo de texto)

### Principios de Diseño
- ✨ **Responsive-first**: Mobile y desktop optimizado
- 🎯 **Accesibilidad**: Contraste WCAG AA+
- ⚡ **Performance**: Lazy loading y code splitting
- 🌊 **Fluidez**: Transiciones suaves y feedback visual

---

## 🔄 Flujo de Usuario

### 1️⃣ Registro
```
Inicio → Email/Contraseña → Intereses → Estilo de Estudio → Dashboard
```
- **Paso 1**: Credenciales con validación de fortaleza de contraseña
- **Paso 2**: Selección de áreas de interés (multi-select)
- **Paso 3**: Preferencias de aprendizaje (videos, labs, libros, etc.)

### 2️⃣ Navegación Principal
```
Landing → Login/Register → Cursos → Comunidad → Perfil
```

### 3️⃣ Aprendizaje
```
Explorar Cursos → Seleccionar Ruta → Módulos → Certificación
```

---

## 🔌 Integración con Backend (Próximamente)

### Endpoints Esperados
```javascript
POST   /api/auth/register     // Registro de usuario
POST   /api/auth/login        // Autenticación
GET    /api/courses           // Listar cursos
GET    /api/courses/:id       // Detalle de curso
POST   /api/community/posts   // Crear post en foro
GET    /api/user/progress     // Progreso del usuario
```

### Ejemplo de Payload (Register)
```json
{
  "email": "usuario@ejemplo.com",
  "password": "SecurePass123!",
  "interests": ["python", "cybersecurity", "ai"],
  "studyStyles": ["videos", "labs", "group"]
}
```

---

## 🧪 Testing (Roadmap)

```bash
# Configuración futura
npm run test        # Unit tests con Vitest
npm run test:e2e    # E2E tests con Playwright
npm run test:coverage  # Coverage report
```

---

## 🚧 Roadmap

### Fase 1 - MVP ✅
- [x] Sistema de autenticación con validación
- [x] Registro multi-paso personalizado
- [x] Navegación con React Router
- [x] Diseño responsive con Tailwind

### Fase 2 - Core Features 🔄
- [ ] Integración con backend API REST
- [ ] Catálogo de cursos funcional
- [ ] Sistema de progreso y certificados
- [ ] Foro comunitario con posts/comentarios

### Fase 3 - Mejoras 📋
- [ ] Búsqueda y filtros avanzados
- [ ] Sistema de notificaciones
- [ ] Chat en tiempo real
- [ ] Gamificación (badges, puntos)

### Fase 4 - Optimización 🎯
- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Internacionalización (i18n)
- [ ] Analytics y métricas

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo
- Usa ESLint para mantener el código consistente
- Componentes funcionales con hooks
- Nombres descriptivos en español para UI, inglés para lógica
- Commits semánticos: `Add:`, `Fix:`, `Update:`, `Remove:`

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👥 Equipo

**Desarrolladores:**
- Tu Nombre - [GitHub](https://github.com/tu-usuario)

**Diseño:**
- Logo y branding por [Tu Equipo]

---

## 📞 Contacto

- **Website**: [aetheris.dev](https://aetheris.dev)
- **Email**: contacto@aetheris.dev
- **Twitter**: [@AetherisEdu](https://twitter.com/AetherisEdu)

---

## 🙏 Agradecimientos

- Fuentes tipográficas: Marykate y Nunito
- Iconos: Heroicons y custom SVG
- Inspiración: Comunidad open-source de React

---

<div align="center">
  <p>Hecho con 💙 por el equipo de Aetheris</p>
  <p>© 2025 Aetheris - Conectando conocimiento, comunidad y crecimiento</p>
</div>
