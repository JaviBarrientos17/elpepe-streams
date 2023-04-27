import sagasData from "../../data/Sagas.json";
import SagaDetail from "../sagaDetail";

export default function Saga({ saga }) {
  return <SagaDetail saga={saga} />;
}

export async function getStaticPaths() {
  const paths = sagasData.map((saga) => ({
    params: { id: saga.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id);
  const saga = sagasData.find((saga) => saga.id === id);
  return { props: { saga } };
}
