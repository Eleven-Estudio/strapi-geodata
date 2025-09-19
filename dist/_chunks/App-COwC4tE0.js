"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
const index = require("./index-CH5z6Pmh.js");
const HomePage = () => {
  reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Box,
    {
      style: {
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "alpha", style: { fontWeight: "bold", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntime.jsx(index.ForwardRef, { style: { width: "3rem", height: "3rem" } }),
          " ",
          "Welcome to GeoData"
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Typography,
          {
            variant: "beta",
            style: { fontWeight: "600", marginBottom: "0.5rem", color: "#e65100" },
            children: "Important Note:"
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: [
            "Only one GeoJSON field is allowed per content type. To store latitude, longitude, and geohash separately for queries, create three fields: ",
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "lat" }),
            " (float),",
            " ",
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "lng" }),
            " (float), and ",
            /* @__PURE__ */ jsxRuntime.jsx("strong", { children: "geohash" }),
            " (string). The plugin automatically updates the lat/lng fields and the geohash field whenever any of these fields are modified. For dynamic creation, write the GeoJSON field in the",
            " ",
            /* @__PURE__ */ jsxRuntime.jsx("code", { children: `{lat, lng}` }),
            " format, and the related fields will be populated automatically."
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ddd" } }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: "To set a field as a float, first create a numeric input, then modify the schema to define it as a float." })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { style: { marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ddd" }, children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "beta", style: { fontWeight: "600", marginBottom: "0.5rem" }, children: [
            "Contact the Author:",
            " "
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: [
            "For inquiries, please contact the author at:",
            " ",
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { style: { fontWeight: "bold" }, children: "info@red-made.com" }),
            " or visit the",
            " ",
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.BaseLink, { style: { fontWeight: "bold" }, href: "https://github.com/red-made/strapi-geodata", target: "_blank", rel: "noopener noreferrer", children: "GitHub repository @github.com/red-made/strapi-geodata" }),
            "."
          ] })
        ] })
      ]
    }
  ) });
};
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
  ] });
};
exports.App = App;
