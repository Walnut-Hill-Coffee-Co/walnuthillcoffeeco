
export const normalizePath = (path) => {


  if (!path.endsWith("/")) {
    path = `${path}/`;
  }
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  return path;
};