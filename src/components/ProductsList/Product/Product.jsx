import { Item, ImgThumb, Img, Link, Paragraph, Span } from "./Product.styled";
export const Product = ({ product }) => {
  return (
    <Item>
      <ImgThumb>
        <Img src={product.img} alt={product.name + " photo"} />
      </ImgThumb>
      <Link href={product.link} target="_blank">
        Link
      </Link>
      <Paragraph>
        <Span>Price:</Span> {product.price}
      </Paragraph>
      <Paragraph>
        <Span>Category:</Span> {product.bsr_category}
      </Paragraph>
      <Paragraph>
        <Span>Title:</Span> {product.name}
      </Paragraph>
      <Paragraph>
        <Span>Articul:</Span> {product.asin}
      </Paragraph>
    </Item>
  );
};
