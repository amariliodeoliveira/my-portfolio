export function generateOgImage(title: string) {
  const templateId = "de877aaf-7660-4515-9e0e-2cdabccef385";
  const version = 2;

  const titleText = encodeURIComponent(title);
  const titleFontFamily = encodeURIComponent("Roboto");
  const titleColor = encodeURIComponent("rgba(28, 24, 75, 1)");
  const imageUrl = encodeURIComponent(
    "https://opengraph.b-cdn.net/production/images/3ed42010-ebb7-4186-8fc6-19fe082f3f1a.jpg?token=TLpNsrS9B1bdk_3Ysj7fC0G1Vi_QUF9KRVrp_rBadLA&height=460&width=460&expires=33303899820",
  );
  const imageObjectFit = encodeURIComponent("cover");
  const ctaText = encodeURIComponent("See my Portfolio");
  const ctaFontFamily = encodeURIComponent("Roboto");
  const ctaColor = encodeURIComponent("rgba(161, 177, 255, 1)");
  const ctaBackgroundColor = encodeURIComponent("rgba(28, 24, 75, 1)");

  return `https://ogcdn.net/${templateId}/v${version}/${titleText}/${titleFontFamily}/${titleColor}/${imageUrl}/${imageObjectFit}/${ctaText}/${ctaFontFamily}/${ctaColor}/${ctaBackgroundColor}/og.png`;
}
