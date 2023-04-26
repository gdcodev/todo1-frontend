/* eslint-disable no-underscore-dangle */
export const parserProduct = ({
  _id,
  name,
  description,
  image,
  price,
  stock,
  category,
}) => ({
  id: _id,
  name,
  description,
  image,
  price,
  stock,
  categoryId: category._id,
  categoryName: category.name,
  categoryDescription: category.description,
});

export const parserCard = ({
  _id,
  lastFourNumbers,
}) => ({
  id: _id,
  lastFourNumbers
});
