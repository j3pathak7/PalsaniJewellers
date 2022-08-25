import { Card, Carousel } from "react-bootstrap";

export const CardCarousel = () => {
  return (
    <>
      <h3 className="mb-4 ms-lg-5 fs-1 fw-bold">Testimonials</h3>
      <Carousel variant="dark">
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Bhargaavii Barman</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Senior Designer
            </Card.Subtitle>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              obcaecati error, adipisci at dolore natus placeat deserunt totam
              sit possimus, rerum repudiandae nemo alias magnam deleniti. Quam
              temporibus eaque quas iure dolorem fugit reiciendis?
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Mother Teresa</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Manager Lead
            </Card.Subtitle>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              tempora nulla enim. Iste magni reiciendis quas, illo similique
              laudantium ducimus pariatur deserunt facere cupiditate? Facilis
              officia ipsa labore amet repellendus placeat beatae iusto
              recusandae?
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Florence Griffith-Joyner</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">CEO</Card.Subtitle>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using letters Ipsum
              is that it has a more-or-less normal distribution of letter.
            </p>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
