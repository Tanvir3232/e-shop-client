import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUpdateProductMutation } from '../redux/api/api';
import { Product } from '../types/product.type';

const { TextArea } = Input;
const { Option } = Select;
export type Category = {
    slug: string;
    name: string;
    url: string;
}
const EditProductForm: React.FC<{ id: number, product: Product, categories: Category[] }> = ({ id, product, categories }) => {
    console.log(categories)
    const [form] = Form.useForm();
    const [updateProduct] = useUpdateProductMutation();
    const navigate = useNavigate();
    const onFinish = async (values: Partial<Product>) => {
        console.log('Form Values:', values);
        try {
            const result = await updateProduct({ id: Number(id), body: values }).unwrap();
            console.log('Update success:', result); // Success response
            toast.success("Product data updated successfully")
            navigate('/products')
        } catch (error) {
            console.error('Update failed:', error); // Error handling
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={product}
            autoComplete="off"
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Product Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the product title!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Brand"
                        name="brand"
                        rules={[{ required: true, message: 'Please input the brand name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input the price!' }]}
                    >
                        <InputNumber min={0} prefix="$" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Stock"
                        name="stock"
                        rules={[{ required: true, message: 'Please input the stock!' }]}
                    >
                        <InputNumber min={0} style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Minimum Order Quantity"
                        name="minimumOrderQuantity"
                        rules={[{ required: true, message: 'Please input the minimum order quantity!' }]}
                    >
                        <InputNumber min={1} style={{ width: '100%' }} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Availability Status"
                        name="availabilityStatus"
                        rules={[{ required: true, message: 'Please input availability status!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please select a category!' }]}
            >
                <Select placeholder="Select a category">
                    {
                        categories.map((item: Category) => (<Option value={item.slug} key={item.slug}>{item.name}</Option>))
                    }


                </Select>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input the product description!' }]}
            >
                <TextArea rows={4} />
            </Form.Item>

            {/* Review List */}
            <Form.List name="reviews">
                {(fields, { add, remove }) => (
                    <>
                        <label>Reviews:</label>
                        {fields.map((field, index) => (
                            <Space key={field.key} align="baseline" style={{ display: 'flex', marginBottom: 8 }}>
                                {/* Pass the key explicitly, not through {...field} */}
                                <Form.Item
                                    key={field.key}  // Pass key here explicitly
                                    label="Reviewer Name"
                                    name={[field.name, 'reviewerName']}
                                    rules={[{ required: true, message: 'Please input reviewer name' }]}
                                >
                                    <Input placeholder="Reviewer Name" />
                                </Form.Item>

                                <Form.Item
                                    key={`${field.key}-rating`}  // Ensure a unique key for each item
                                    label="Rating"
                                    name={[field.name, 'rating']}
                                    rules={[{ required: true, message: 'Please input rating' }]}
                                >
                                    <InputNumber min={1} max={5} />
                                </Form.Item>

                                <Form.Item
                                    key={`${field.key}-comment`}  // Ensure a unique key for each item
                                    label="Comment"
                                    name={[field.name, 'comment']}
                                    rules={[{ required: true, message: 'Please input a comment' }]}
                                >
                                    <Input placeholder="Comment" />
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Review
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save Changes
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditProductForm;
