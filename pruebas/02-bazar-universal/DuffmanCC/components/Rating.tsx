import Image from "next/image";

export default function Rating({ rating }: { rating: number }) {
  const n = Math.trunc(rating);
  const fullStar = new Array(n).fill(undefined);

  const halfStar = new Array(1).fill(undefined);

  const emptyN = Math.trunc(5 - rating);
  const emptyStar = new Array(emptyN).fill(undefined);

  return (
    <div>
      <div className="flex gap-1">
        {fullStar.map((_, index) => {
          return (
            <Image
              key={index}
              src="/star-icon.png"
              width={20}
              height={20}
              alt="star icon"
              className="w-5 h-auto"
            />
          );
        })}

        {rating % 1 !== 0 && (
          <Image
            src="/star-half-icon.png"
            width={20}
            height={20}
            alt="star icon"
            className="w-5 h-auto"
          />
        )}

        {emptyStar.map((star, index) => {
          return (
            <Image
              key={index}
              src="/star-empty-icon.png"
              width={20}
              height={20}
              alt="star empty icon"
              className="w-5 h-auto"
            />
          );
        })}
      </div>
    </div>
  );
}
