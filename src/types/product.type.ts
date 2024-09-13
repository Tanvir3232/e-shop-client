export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export type Dimensions = {
    depth: number;
    height: number;
    width: number;
}

export type Meta = {
    barcode: string;
    qrCode: string;
    createdAt: string;
    updatedAt: string;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    minimumOrderQuantity: number;
    availabilityStatus: string;
    brand: string;
    category: string;
    dimensions: Dimensions;
    weight: number;
    returnPolicy: string;
    warrantyInformation: string;
    shippingInformation: string;
    reviews: Review[];
    tags: string[];
    images: string[];
    thumbnail: string;
    sku: string;
    meta: Meta;
}
