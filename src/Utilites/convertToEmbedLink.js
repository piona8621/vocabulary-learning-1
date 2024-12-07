const convertToEmbedLink = (url) => {
  const videoId = url.split("youtu.be/")[1].split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};
