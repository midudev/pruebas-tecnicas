import DetailsView from '@websiteViews/DetailsView/DetailsView';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <DetailsView id={params.id} />
  );
}
