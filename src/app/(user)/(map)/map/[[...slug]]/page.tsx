import MapBox from "@/src/features/map/map-common/components/map-box";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <>
      <MapBox slug={slug} />
    </>
  );
}
