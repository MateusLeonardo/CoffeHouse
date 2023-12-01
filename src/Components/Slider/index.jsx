import { Carousel } from 'react-carousel-minimal';

export function Slider({data}) {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    display: 'none'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
       
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </>
  );
}
