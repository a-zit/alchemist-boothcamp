import React, { Component } from 'react'
import styled from 'styled-components'

const BG = styled.div`
    color:#ffffff;
    margin-top:192px;
    min-height:680px;
    text-align:center;
`
const Head = styled.div`
    padding-top:15px;
    height:78px;
    width:auto;
    color:#333333;
    background-image: url("images/section-header-bg.png");
    background-size:100%;
    background-repeat: no-repeat;
    font-weight:normal;
    font-size:32px;
`

class Services extends Component {
    render() {
        return (
            <BG className='container'>
                <Head>
                    <h3>OUR MAIN SERVICES</h3>
                </Head>
                <div className='mt-5'>
                    <h2 >LET ME INTRODUCE US</h2>
                    <p className='mt-3'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum es mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div  className='row'>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div></div>
                </div>
            </BG>
        );
    }
}

export default Services
