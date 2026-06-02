import { ImageResponse } from "next/og";

export const runtime = "edge";

// El tamaño estándar para favicons en el ecosistema moderno de Google
export const size = {
  width: 48,
  height: 48,
};

export const contentType = "image/png";

export default async function Icon() {
  // Obtenemos la URL absoluta del asset interno para que funcione tanto local como en Vercel
  const iconUrl = new URL(
    "../../../public/images/logo/icono.png",
    import.meta.url
  ).toString();

  // Leemos el archivo físico de la imagen
  const iconData = await fetch(iconUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent", 
        }}
      >
        <img
          /* @ts-ignore */
          src={iconData}
          width="100%"
          height="100%"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}