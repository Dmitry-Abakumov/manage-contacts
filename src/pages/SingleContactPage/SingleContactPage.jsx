import { useParams } from "react-router-dom";

import { AddTag } from "@/sections/AddTag";

import { useGetOneContactQuery } from "@/services";

const SingleContactPage = () => {
  const [data, isError, isLoading] = useGetOneContactQuery();
  return (
    <>
      <AddTag />
    </>
  );
};

export default SingleContactPage;
