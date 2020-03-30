import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    .page-card {
        height: 1000px
    }`;

class Page extends Component {
    render() {
        return (
                <Card className="page-card">

                </Card>
         )
    }
}

export default Page;