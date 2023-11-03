import Image from "next/image";

export default function Rating({ rating }: { rating: number }) {
  const n = Math.trunc(rating);
  const fullStars = new Array(n).fill(undefined);
  const emptyN = Math.trunc(5 - rating);
  const emptyStars = new Array(emptyN).fill(undefined);

  return (
    <div>
      <div className="flex gap-1">
        {fullStars.map((_, index) => {
          return (
            <Image
              key={index}
              src="/star-icon.png"
              width={20}
              height={20}
              alt="star icon"
              className="w-5 h-5"
            />
          );
        })}

        {rating % 1 !== 0 && (
          <Image
            src="/star-half-icon.png"
            width={20}
            height={20}
            alt="half star icon"
            className="w-5 h-5"
          />
        )}

        {emptyStars.map((_, index) => {
          return (
            <Image
              key={index}
              src="/star-empty-icon.png"
              width={20}
              height={20}
              alt="empty star icon"
              className="w-5 h-5"
            />
          );
        })}
      </div>
    </div>
  );
}
