import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';



const Card = styled.div`
    .page-card {
        
    }`;

class Page extends Component {
    render() {
        return (
            <div className="page-basics">
                <Card className="page-card">

                </Card>


            </div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(Page);