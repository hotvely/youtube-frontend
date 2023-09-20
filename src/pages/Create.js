import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getCategories } from "../api/video";
import { useState, useEffect } from "react";

import styled from "styled-components";

const Header = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 20px 0;
`;

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목입력.." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="내용.."
          style={{ resize: "none" }}
        />
      </Form.Group>
    </Form>
  );
}
function FormFileExample() {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>썸네일 이미지</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>동영상 파일</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
}
function TypesExample() {
  return (
    <>
      <Button variant="danger" style={{ marginTop: "20px" }}>
        저장
      </Button>
    </>
  );
}
function SelectBasicExample({ categories }) {
  return (
    <Form.Select aria-label="Default select example">
      {categories.map((data) => (
        <option value={data.categoryCode} key={data.categoryCode}>
          {data.categoryName}
        </option>
      ))}
    </Form.Select>
  );
}

const Create = () => {
  const [categories, setCategories] = useState([]);
  const categoryAPI = async () => {
    const result = await getCategories();

    setCategories(result.data);
  };

  useEffect(() => {
    categoryAPI();
  }, []);

  return (
    <>
      <Container>
        <Header>동영상 업로드</Header>
        {TextControlsExample()}
        {FormFileExample()}
        {SelectBasicExample({ categories })}
        {TypesExample()}
      </Container>
    </>
  );
};

export default Create;
