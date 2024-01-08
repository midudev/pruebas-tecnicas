interface FormatPriceProps {
	price: number;
	discount: number;
}

export function getFormatPrice({ price, discount = 0 }: FormatPriceProps) {
	const pay = calculateDiscount({ price, discount });
	const oldPrice = formatPrice(price);
	const newPrice = formatPrice(pay);

	return {
		oldPrice,
		newPrice,
	};
}

export function formatPrice(value: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
}

export function calculateDiscount({ price, discount }: FormatPriceProps) {
	const discountValue = (price * discount) / 100;
	const pay = price - discountValue;

	return pay;
}
