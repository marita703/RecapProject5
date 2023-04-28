import { useArtStore } from "../../stores/artpieces";

export function PaletaDeColores(slug) {
  const { artPiecesInfo } = useArtStore();

  const theOne = artPiecesInfo.find((ele) => ele.slug === slug.slug);
  console.log("slug", slug);
  console.log("art", artPiecesInfo);
  console.log("theOne", theOne);

  return (
    <>
      <h3>Use This Collors for Inspo:</h3>
      <section style={{ display: "flex", flexDirection: "row", margin: "2em" }}>
        {theOne.colors.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                background: color,
                width: 24,
                height: 24,
                borderRadius: 12,
              }}
            ></div>
          );
        })}
      </section>
    </>
  );
}
