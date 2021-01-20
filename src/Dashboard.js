import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';
import * as d3 from 'd3';


const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenAge: 0,
            includedGender: ['Male', 'Female','Unknown'],
        }
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {
        const {selectedUser, greaterThenAge, includedGender} = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender)!==-1)
                                 .filter(user=>user.age>greaterThenAge);
        const width = 260;
        const height = 260;
        return (
            <div>
                <Layout>
                    <Content>
                        <View1 user={selectedUser}/>
                    </Content>
                    <Content>
                        <View2 data={filteredData}/>
                        <View4 user={selectedUser}/>
                    </Content>
                    <Layout>
                        <Content>
                            <View5 data={filteredData}/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
