import styled from "styled-components";

const PictureFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    margin: 0.5rem;
    width: calc(50% - 1rem);
  }

  img {
    display: block;
    flex: 0 auto;
    width: 100%;
    margin: 0;
    border: none;
    border: 1px solid #7a40fa;
  }
`;

export default () => (
  <PictureFrame>
    <div>
      <img
        src={`/static/images/meandmoni.jpg`}
        alt="Antonio Rodriguez - leader, web developer, dad, husband, knows what he's doing 60% of the time"
      />
    </div>
    <div>
      <img
        src={`/static/images/ginoandme.jpg`}
        alt="Antonio Rodriguez - leader, web developer, dad, husband, knows what he's doing 60% of the time"
      />
    </div>
  </PictureFrame>
);
