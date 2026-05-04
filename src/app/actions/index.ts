export const handleStarAction = () => {
  const repoOwner = "Passion-Over-Pain";
  const repoName = "the-atlas-six";
  const backendUrl =
    "https://portfolio-backend-pi-three.vercel.app/api/auth/login";
  const intent = "star";
  const source = "https://the-atlas-six.vercel.app";
  window.location.href = `${backendUrl}?intent=${intent}&repoOwner=${repoOwner}&repoName=${repoName}&source=${source}`;
};
