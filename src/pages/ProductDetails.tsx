
import { Rating } from "@smastrom/react-rating";
import { Flex, Image, Spin } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/api";
const ProductDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(Number(id));
    console.log(data)
    if (isLoading) return <Spin />

    return (
        <section>
            <Helmet>
                <title>E-Shop | {data?.title}</title>
                <meta name="description" content={`This is the ${data?.title}`} />
            </Helmet>
            <div className="product-content">
                <Image.PreviewGroup
                    items={data?.images}
                >
                    <Image
                        width={400}
                        src={data?.thumbnail}
                    />
                </Image.PreviewGroup>
                <div className="product-info">
                    <p className="title">{data?.title}</p>
                    <p>
                        {data?.description}
                    </p>
                    <p><strong>Brand: </strong> {data?.brand}</p>
                    <p><strong>Warranty: </strong>{data?.warrantyInformation}</p>


                    <Flex gap="small" wrap>
                        <p><strong>Price: </strong> ${data?.price}</p>
                        <p className="percentage">{data?.discountPercentage}% OFF</p>

                    </Flex>
                    <div>
                        <Rating style={{ maxWidth: 150 }} value={data!.rating | 0} readOnly={true} />
                    </div>
                    <Flex gap="small" align="flex-start" vertical>
                        <Flex gap="small" wrap>
                            <button className="btn btn-large btn-info" >
                                Add to Cart
                            </button>
                            <button className="btn btn-large btn-primary" >
                                Buy Now
                            </button>

                        </Flex>
                    </Flex>
                </div>

            </div>
        </section>
    )
}
export default ProductDetails;