// src/pages/ProductList.tsx
import { Table, TableColumnType } from 'antd';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../redux/api/api';
import { Product } from '../types/product.type';
export type TTableData = Pick<Product, 'id' | 'brand' | 'category' | 'price' | 'title' | 'stock'>
const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetProductsQuery({ limit: 0, skip: (page - 1) * 10 });
  const tableData = data?.products?.map(
    ({ id, price, title, stock, category, brand }) => ({
      key: id,
      title,
      brand,
      category,
      price,
      stock
    })
  )
  const navigate = useNavigate();

  const columns: TableColumnType<TTableData> = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Brand', dataIndex: 'brand', key: 'brand' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Actions',
      align: 'center',
      key: 'actions',
      render: (item) => (
        <div className='action-buttons'>
          <button className='btn btn-info' title='Edit Product data' onClick={() => navigate(`/products/edit/${item.key}`)}> <img src='/edit.png' className='imgIcon' /> </button>
          <button className='btn btn-primary' title='Product details' onClick={() => navigate(`/products/${item.key}`)}> <img src='/view.png' className='imgIcon' /> </button>
        </div>
      )
    },
  ];

  return (
    <section className='product-list'>
      <Helmet>
        <title>E-Shop | Products</title>

      </Helmet>
      <h1>Product List</h1>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}

      />
    </section>

  );
};

export default ProductList;
