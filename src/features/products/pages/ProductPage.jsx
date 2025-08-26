import Pagination from "../components/Pagination";
import SearchBar from "../components/ProductFilters/SearchBar";
import Spinner from "../../../components/ui/Spinner";
import { useOutletContext } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";

const ProductPage = () => {
    const { products, setProducts } = useOutletContext();
    const { loading, error} = useProducts(setProducts);

    const [filterData, setFilterData] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    if (error) return <p>Error: {error}</p>
    if (loading)
        return (
    <div classname="flex justify-center items-center b-screen">
        <Spinner />
    </div>
    );

    const handleFiltered = (data) => {
        setFilteredData(data);
    };

    return (
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <SearchBar 
                products={products}
                filteredProducts={handleFiltered}
                setCurrentPage={setCurrentPage}
            />

            <Pagination
                products={products}
                filteredData={filteredData}
                currentPage={currentPage}
                setCurrentPage={setCUrrentPage}
            />
        </div>
    );
};

export default ProductPage;