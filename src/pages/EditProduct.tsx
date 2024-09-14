import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

import EditProductForm from '../components/EditProductForm';
import { useGetCategoriesQuery, useGetProductByIdQuery } from '../redux/api/api';

const EditProduct = () => {
    const { id } = useParams<{ id: string }>();

    // Ensure id is defined and converted to a number
    const productId = id ? Number(id) : undefined;

    const { data: product, isFetching: isFetchingProduct } = useGetProductByIdQuery(productId!, { skip: !productId });
    const { data: categories, isFetching: isFetchingCategories } = useGetCategoriesQuery();

    if (isFetchingProduct || isFetchingCategories || !product || !categories) {
        return <Spin />;
    }

    return (
        <section className='edit-form'>
            <h1>Edit Product Information</h1>
            {/* Ensure productId, product, and categories are available before rendering */}
            <EditProductForm id={productId!} product={product} categories={categories} />
        </section>
    );
};

export default EditProduct;
