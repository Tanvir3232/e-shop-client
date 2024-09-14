
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

import EditProductForm from '../components/EditProductForm';
import { useGetCategoriesQuery, useGetProductByIdQuery } from '../redux/api/api';

const EditProduct = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetProductByIdQuery(Number(id));
    const { data: categories, isFetching } = useGetCategoriesQuery();


    if (isFetching) {
        return <Spin />
    }
    return (
        <section className='edit-form'>
            <h1>Edit Product Information</h1>
            <EditProductForm id={id} product={data} categories={categories} />
        </section>
    );
};

export default EditProduct;
