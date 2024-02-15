const mediaSize = {
  extrasm: "375px",
  sm: "425px",
  extramd: "560px",
  md: "768px",
  bg: "1024px",
};

const breakpoints = {
  extrasm: `(max-width: ${mediaSize.extrasm})`,
  sm: `(max-width: ${mediaSize.sm})`,
  extramd: `(max-width: ${mediaSize.extramd})`,
  md: `(max-width: ${mediaSize.md})`,
  bg: `(max-width: ${mediaSize.bg})`,
};

export default breakpoints;
