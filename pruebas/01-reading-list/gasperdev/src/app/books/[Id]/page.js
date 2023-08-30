import BackButton from "@/app/components/BackButton";
import BooksCards from "@/app/components/BooksCards";
import BooksNotyfi from "@/app/components/BooksNotyfi";
export default function page({ params }) {
  return (
    <section className="max-w-4xl min-h-screen px-5 pt-5 mx-auto md:mx-auto">
      <div className="right-0 flex justify-end w-full gap-10">
        <BooksNotyfi />
      </div>
      <BackButton />
      <BooksCards params={params} />
    </section>
  );
}
