import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { fetchProductSlice } from "../../trk/slises/productSlice";

import Loading from "../../components/loading/Loading";
import { fetchPreview } from "../../trk/slises/previewProduct";
import ProductDetils from "../../components/productDetails/productDetils";

const Details = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.previewProduct);
  const { data ,  isLoading } = detail;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPreview(id));
  }, [id]);
  console.log(detail);
  // if (isLoading) return 

  return (
    <>
      {!isLoading &&  <Loading />}
      <ProductDetils product={data} />
    </>
  );
};

export default Details;
