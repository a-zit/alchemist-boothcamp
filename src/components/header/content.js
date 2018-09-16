import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    font-size:65px;
    color:#fff;
    text-shadow:-5px 5px 5px rgba(0, 0, 0, 0.23);
    text-align:center;
    line-height:.94;
`

const Content2 = styled.div`
    font-size:122px;
    color:#fff;
    text-shadow:-5px 5px 5px rgba(0, 0, 0, 0.23);
    text-align:center;
    line-height:.94;
`

const Content3= styled.div`
    font-size:84px;
    color:#fff;
    text-shadow:-5px 5px 5px rgba(0, 0, 0, 0.23);
    text-align:center;
    line-height:.94;
`
class ContentHeader extends Component {
    state = {
        showContent: [
            'WEB & APP',
            'CARTOONS',
            'BRANDING'
        ],
        position: 0
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.position == 2) {
                this.setState({
                    position: -1
                })
            }
            this.setState({
                position: this.state.position + 1,
            })
        }, 1000)
    }
    render() {
        return (
            <div className='mt-5'>
                <Content>I LOVE TO MAKE</Content>
                <Content2>{this.state.showContent[this.state.position]}</Content2>
                <Content3>LOOK AWESOME</Content3>
            </div>
        );
    }
}

export default ContentHeader;
