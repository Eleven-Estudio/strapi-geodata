import { jsx, jsxs } from "react/jsx-runtime";
import { Page } from "@strapi/strapi/admin";
import { Routes, Route } from "react-router-dom";
import { Main, Box, Typography, BaseLink } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { F as ForwardRef } from "./index-RDlm4q6I.mjs";
const HomePage = () => {
  useIntl();
  return /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsxs(
    Box,
    {
      style: {
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      },
      children: [
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Typography, { variant: "alpha", style: { fontWeight: "bold", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsx(ForwardRef, { style: { width: "3rem", height: "3rem" } }),
          " ",
          "Welcome to GeoData"
        ] }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "beta",
            style: { fontWeight: "600", marginBottom: "0.5rem", color: "#e65100" },
            children: "Important Note:"
          }
        ) }),
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsxs(Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: [
            "Only one GeoJSON field is allowed per content type. To store latitude, longitude, and geohash separately for queries, create three fields: ",
            /* @__PURE__ */ jsx("strong", { children: "lat" }),
            " (float),",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "lng" }),
            " (float), and ",
            /* @__PURE__ */ jsx("strong", { children: "geohash" }),
            " (string). The plugin automatically updates the lat/lng fields and the geohash field whenever any of these fields are modified. For dynamic creation, write the GeoJSON field in the",
            " ",
            /* @__PURE__ */ jsx("code", { children: `{lat, lng}` }),
            " format, and the related fields will be populated automatically."
          ] }),
          /* @__PURE__ */ jsx(Box, { style: { marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ddd" } }),
          /* @__PURE__ */ jsx(Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: "To set a field as a float, first create a numeric input, then modify the schema to define it as a float." })
        ] }),
        /* @__PURE__ */ jsxs(Box, { style: { marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ddd" }, children: [
          /* @__PURE__ */ jsxs(Typography, { variant: "beta", style: { fontWeight: "600", marginBottom: "0.5rem" }, children: [
            "Contact the Author:",
            " "
          ] }),
          /* @__PURE__ */ jsxs(Typography, { variant: "gamma", style: { lineHeight: "1.6" }, children: [
            "For inquiries, please contact the author at:",
            " ",
            /* @__PURE__ */ jsx(Typography, { style: { fontWeight: "bold" }, children: "info@red-made.com" }),
            " or visit the",
            " ",
            /* @__PURE__ */ jsx(BaseLink, { style: { fontWeight: "bold" }, href: "https://github.com/red-made/strapi-geodata", target: "_blank", rel: "noopener noreferrer", children: "GitHub repository @github.com/red-made/strapi-geodata" }),
            "."
          ] })
        ] })
      ]
    }
  ) });
};
const App = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page.Error, {}) })
  ] });
};
export {
  App
};
