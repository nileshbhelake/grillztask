import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BottomPart = (props) => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col sx={6} md={6} xs={{ p: 50 }}>
          <div>
            <h1
              style={{
                borderLeft: "15px solid #3d7475",
                paddingLeft: 20,
                color: "#2e266f",
              }}
            >
              {props.title}
            </h1>
          </div>
        </Col>
        <Col sx={6} md={6}>
          <p>{props.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomPart;
