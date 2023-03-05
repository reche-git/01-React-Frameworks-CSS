import MediaCard from "./MaterialCard";
import PersistentDrawerLeft from "./MaterialDrawer";

export default function MaterialUI() {
  return (
    <div className="border border-dark" style={{ marginTop: "5rem" }}>
      <h2 className="text-center h1 m-2">Material UI Library</h2>
      <MediaCard />
      <PersistentDrawerLeft />
    </div>
  );
}
