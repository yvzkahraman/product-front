import * as Yup from 'yup';

const ProductUpdateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('* Ürün adı gereklidir'),
  stock: Yup.number()
    .required('Required'),
  price: Yup.number().required('Required'),
});

export default ProductUpdateSchema;