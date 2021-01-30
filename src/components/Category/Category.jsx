import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import axios from "../../axios";
import { Row, Col } from "react-bootstrap";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from "react-router-dom";



<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z" /></svg>


function Category() {
    const [c1, setC1] = useState([])
    // const category = useSelector(state => state.category)
    async function fetchCategory() {
        const category9 = await axios.get('/category/getcategory')
        return category9;
    }
    useEffect(() => {

        fetchCategory()
            .then(res => {
                setC1(res.data.categoryList)
                console.log(res.data.categoryList);
            });


    }, []);

    function addlink(categories) {
        if (categories.children.length > 0) {
            return <TreeItem nodeId={categories._id} label={categories.name}>
                {/* {console.log(categories.children)} */}
                {categories.children.length > 0 ? (renderCategory(categories.children)) : null}
            </TreeItem>
            
        } else {
            return <Link to={`/category/${categories._id}`}><TreeItem nodeId={categories._id} label={categories.name}>
                {/* {console.log(category.children)} */}
                {categories.children.length > 0 ? (renderCategory(categories.children)) : null}
            </TreeItem></Link>            
        }

    }

    const renderCategory = (categories) => {
        let mycategories = [];
        for (let category of categories) {
            mycategories.push(
                <div>
                    {/* {category.name}

                        {console.log(category.children)}
                        {category.children.length > 0 ? (<ul>{renderCategory(category.children)}</ul>) : null}
 */}


                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {addlink(category)}
                        {/* <TreeItem nodeId={category._id} label={category.name}> */}
                        {/* {console.log(category.children)} */}
                        {/* {category.children.length > 0 ? (renderCategory(category.children)) : null} */}
                        {/* </TreeItem> */}
                    </TreeView>
                </div>
            );
        }
        return mycategories;
    }

    return (
        <div>

            <Container>
                <Row>
                    <Col md={12}>
                        <div>
                            {renderCategory(c1)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Category

