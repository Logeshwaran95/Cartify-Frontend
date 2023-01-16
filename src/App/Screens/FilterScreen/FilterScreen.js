import React from 'react';
import {Row,Container, Form, FormControl, FormGroup, Col, InputGroup, Button } from "react-bootstrap";
import axios from 'axios';
import path from '../../Config/servAddr';
import Modal from 'react-bootstrap/Modal';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loader from '../../Components/Loader';
import Swal from 'sweetalert2';

const FilterScreen = () => {

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const [searched, setSearched] = React.useState(false);

    const [filteredProducts, setFilteredProducts] = React.useState([]);

    const [shownnumber, setShownNumber] = React.useState(12);



    const getProducts = async () => {
        try{
            setLoading(true);
            const response = await axios.get(`${path.local}/product`);
            setProducts(response.data);
            console.log(response.data);
            setLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }

    React.useEffect(()=>{
            getProducts();
    },[])

    const [searchCriteria, setSearchCriteria] = React.useState({
        keyword: "",
        category: "",
        priceRange: {
          min: 0,
          max: 0,
        },
        rating: 0,
        sort: "",
        inStock: false,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria((prev) => ({
          ...prev,
          priceRange: {
            ...prev.priceRange,
            [name]: value,
          },
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchCriteria);

        searchCriteria.priceRange.min = parseInt(searchCriteria.priceRange.min);
        searchCriteria.priceRange.max = parseInt(searchCriteria.priceRange.max);

        
        if(searchCriteria.priceRange.min > searchCriteria.priceRange.max){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Minimum price cannot be greater than maximum price!',
            })
            return;
        }



        const filtered = products.filter((product) => {

          return (
            (searchCriteria.keyword !=="" ? product.title?.toString().toLowerCase().includes(searchCriteria.keyword) : true)
            &&
            (searchCriteria.category !== "" ? product.categories.toString().toLowerCase().includes(searchCriteria.category) : true)
            &&
            (searchCriteria.priceRange.min !==0 ? product.currentPrice >= searchCriteria.priceRange.min : true)
            &&
            (searchCriteria.priceRange.max !==0 ? product.currentPrice <= searchCriteria.priceRange.max : true)
            &&
            (searchCriteria.rating !==0 ? product.rating >= searchCriteria.rating : true)
          );
        });

        if(searchCriteria.sort === "lowest"){
          filtered.sort((a,b) => a.currentPrice - b.currentPrice);
      }
      else{
          filtered.sort((a,b) => b.currentPrice - a.currentPrice);
      }

        setFilteredProducts(filtered);


        console.log(filtered);
        setShow(false);
        setSearched(true);

      };




  return (
    <Container fluid>

        <h2
        style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
            color: "#fff",
            fontWeight: "bold",
        }}
        >   
            {
                searched ? "Filtered Products" : "All Products"
            }
            <br></br>
            <br></br>
      
            <Button variant="primary"
            onClick={() => setShow(true)}
            >Filter Now</Button>
            {
                searched && 
                <Button variant="primary"
                onClick={() => setSearched(false)}
                >Clear Filter</Button>

            }

            {
                searched &&

                <>
                <br></br>
                <br></br>
                <h3>Showing {filteredProducts.length} results</h3>
                </>
               

            }





            <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Advanced Search</Modal.Title>
        </Modal.Header>
        <Modal.Body
        style={{
            backgroundColor: "#f5f5f5",
            // display: "flex",
            // justifyContent: "center",
            // minWidth: "100%",
        }}
        >
          <center>
        <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Col xs={12} md={6}>
          <FormControl
            type="text"
            placeholder="Keyword"
            name="keyword"
            value={searchCriteria.keyword}
            onChange={handleChange}
          />
        </Col>

        <br></br>


        <Col xs={12} md={6}>
          <FormControl
            as="select"
            name="category"
            value={searchCriteria.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="mobiles">Mobiles</option>
            <option value="laptops">Laptops</option>
            <option value="camera">Cameras</option>
            <option value="tv">TV</option>
            <option value="audio">Audio</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
            <option value="games">Games</option>
            <option value="movies">Movies</option>
            <option value="music">Music</option>
            <option value="accessories">Accessories</option>

                    
          </FormControl>
        </Col>


        <br></br>


      </FormGroup>
      <FormGroup>
        <Col xs={12} md={6}>
          <InputGroup>
            {/* <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend> */}


            <FormControl
              type="number"
              name="min"
              value={
                searchCriteria.priceRange.min==0 ? "" : searchCriteria.priceRange.min
              }
              onChange={handlePriceChange}
              placeholder="Min Price"
            />
            {/* <InputGroup.Append>
              <InputGroup.Text>Min</InputGroup.Text>
            </InputGroup.Append> */}
          </InputGroup>
        </Col>


        <br></br>


        <Col xs={12} md={6}>
          <InputGroup>
            {/* <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend> */}


            <FormControl
              type="number"
              name="max"
              value={
                searchCriteria.priceRange.max==0 ? "" : searchCriteria.priceRange.max
              }
              onChange={handlePriceChange}
              placeholder="Max Price"
            />
            {/* <InputGroup.Append>
              <InputGroup.Text>Max</InputGroup.Text>
            </InputGroup.Append> */}
          </InputGroup>
        </Col>


        <br></br>


      </FormGroup>
      <FormGroup>
        <Col xs={12} md={6}>
          <FormControl
            as="select"
            name="rating"
            value={searchCriteria.rating}
            onChange={handleChange}
          >
            <option value="">Select a rating</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </FormControl>
        </Col>


        <br></br>


        <Col xs={12} md={6}>
          <FormControl
            as="select"
            name="sort"
            value={searchCriteria.sort}
            onChange={handleChange}
          >
            <option value="">Sort by</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
          </FormControl>
        </Col>
      </FormGroup>
      {/* <FormGroup>
        <Col xs={12} md={6}>
          <FormControl
            as="select"
            name="inStock"
            value={searchCriteria.inStock}
            onChange={handleChange}
          >
            <option value="">In Stock</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </FormControl>
        </Col>
        <Col xs={12} md={6}>
          <FormControl
            as="select"
            name="fastDelivery"
            value={searchCriteria.fastDelivery}
            onChange={handleChange}
          >
            <option value="">Fast Delivery</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </FormControl>
        </Col>
      </FormGroup> */}

      <br></br>
    
      <Button variant="danger" type="submit">
        Search
      </Button>
    </Form>      

    </center>
    
    
        </Modal.Body>
      </Modal>
     
      

        </h2>
            <Row>  
                {searched===false ? loading ? 
                <Loader
                loading={true}
                />
                : products.slice(0,shownnumber).map((product) => (
                    <Col>
                        <ProductCard data={product} />
                    </Col>
                ))
              :
              loading ?
              <Loader
              loading={true}
              />
              : filteredProducts.slice(0,shownnumber).map((product) => (
                <Col>
                    <ProductCard data={product} />
                </Col>
            ))

              }
            </Row>
            
            {
                    //display upto 20 products 
                    products.length > 12 ? 

                    <h2
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        marginBottom: "20px",
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                    >
                      {
                        shownnumber < products.length ?

                      
                        <Button variant="primary"
                        onClick={
                            () => {
                                setShownNumber(shownnumber + 12);
                            }
                        }
                        >Load More</Button>
                        : null
                      }
                    </h2>
              
                    : null

                }

    </Container>
  );
}

export default FilterScreen;



