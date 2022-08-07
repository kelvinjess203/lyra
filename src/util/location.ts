export const checkPage = (page: string) => {
  const currentPath = window.location.pathname;
  if (currentPath.indexOf(page) >= 0) {
    return true;
  }

  return false;
};